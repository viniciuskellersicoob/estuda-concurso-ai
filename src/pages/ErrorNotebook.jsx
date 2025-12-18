import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ArrowLeft, BookOpen, Trash2 } from 'lucide-react';
import { Button } from '../components/Button';
import { clearErrorNotebook, getErrorEntries, removeErrorEntry } from '../data/errorNotebook';
import { generateMicroLesson } from '../services/ai';
import { useRequireAuth } from '../hooks/useRequireAuth';
import { usePreferences } from '../context/PreferencesContext';
import { isTtsSupported, speak, stopTts } from '../utils/tts';
import { clsx } from 'clsx';

const LESSON_CACHE_PREFIX = 'micro_lesson_v1:';

function getLessonCacheKey(subject, topic) {
    const safeSubject = (subject || 'geral').toLowerCase();
    const safeTopic = (topic || 'geral').toLowerCase();
    return `${LESSON_CACHE_PREFIX}${safeSubject}:${safeTopic}`;
}

function readLessonCache(subject, topic) {
    if (typeof window === 'undefined') return null;
    const raw = window.localStorage.getItem(getLessonCacheKey(subject, topic));
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch {
        return null;
    }
}

function writeLessonCache(subject, topic, payload) {
    if (typeof window === 'undefined') return;
    try {
        window.localStorage.setItem(getLessonCacheKey(subject, topic), JSON.stringify(payload));
    } catch {
        // ignore
    }
}

export function ErrorNotebook() {
    const navigate = useNavigate();
    const profile = useRequireAuth();
    const { preferences } = usePreferences();

    const [errors, setErrors] = useState([]);
    const [showResolved, setShowResolved] = useState(false);
    const [subjectFilter, setSubjectFilter] = useState('all');
    const [search, setSearch] = useState('');
    const [lessonLoading, setLessonLoading] = useState(false);
    const [lessonError, setLessonError] = useState(null);
    const [activeLessonKey, setActiveLessonKey] = useState(null);
    const [activeLesson, setActiveLesson] = useState(null);
    const [ttsOn, setTtsOn] = useState(false);

    useEffect(() => {
        setErrors(getErrorEntries({ includeResolved: showResolved }));
    }, [showResolved]);

    const subjects = useMemo(() => {
        const set = new Set();
        errors.forEach((e) => set.add(e.subject || 'Sem matéria'));
        return Array.from(set).sort((a, b) => a.localeCompare(b));
    }, [errors]);

    const filteredErrors = useMemo(() => {
        const q = search.trim().toLowerCase();
        return errors.filter((e) => {
            if (!showResolved && e.resolvedAt) return false;
            if (subjectFilter !== 'all' && (e.subject || 'Sem matéria') !== subjectFilter) return false;
            if (!q) return true;
            const blob = `${e.subject} ${e.topic || ''} ${e.text || ''}`.toLowerCase();
            return blob.includes(q);
        });
    }, [errors, search, subjectFilter, showResolved]);

    // Agrupar por matéria/tópico e ordenar por recorrência
    const grouped = useMemo(() => {
        const result = {};
        for (const e of filteredErrors) {
            const subject = e.subject || 'Sem matéria';
            const topic = e.topic || 'Geral';
            if (!result[subject]) result[subject] = {};
            if (!result[subject][topic]) result[subject][topic] = [];
            result[subject][topic].push(e);
        }

        Object.values(result).forEach((topics) => {
            Object.values(topics).forEach((list) => {
                list.sort((a, b) => (b.wrongCount || 1) - (a.wrongCount || 1));
            });
        });

        return result;
    }, [filteredErrors]);

    const totalWrongCount = useMemo(
        () => filteredErrors.reduce((sum, e) => sum + (e.wrongCount || 1), 0),
        [filteredErrors]
    );

    const handleClear = () => {
        clearErrorNotebook();
        setErrors([]);
        setActiveLesson(null);
        setActiveLessonKey(null);
    };

    const handleRemove = (entryId) => {
        removeErrorEntry(entryId);
        setErrors(getErrorEntries({ includeResolved: showResolved }));
    };

    const handlePractice = (subset) => {
        const queue = Array.isArray(subset) ? subset : [];
        if (!queue.length) return;
        stopTts();
        setTtsOn(false);
        navigate('/question', {
            state: {
                mode: 'errors',
                errorQueue: queue,
            },
        });
    };

    const collectMistakes = (list) =>
        list.map((e) => {
            const chosen = e.selectedId ? e.selectedId.toUpperCase() : '?';
            const correct = e.correctId ? e.correctId.toUpperCase() : '?';
            return `Errou a questão ${e.questionId}: marcou ${chosen}, gabarito ${correct}.`;
        });

    const handleMicroLesson = async (subject, topic, list) => {
        const cacheKey = getLessonCacheKey(subject, topic);
        setActiveLessonKey(cacheKey);
        setLessonError(null);

        const cached = readLessonCache(subject, topic);
        if (cached?.content) {
            setActiveLesson(cached);
            return;
        }

        setLessonLoading(true);
        try {
            const payload = await generateMicroLesson({
                subject,
                topic,
                mistakes: collectMistakes(list),
                simpleLanguage: preferences.simpleLanguage,
            });
            if (!payload?.content) throw new Error('Resposta inesperada da IA.');
            setActiveLesson(payload);
            writeLessonCache(subject, topic, payload);
        } catch (e) {
            setLessonError(e.message || 'Erro ao gerar aula curta.');
        } finally {
            setLessonLoading(false);
        }
    };

    const handleToggleLessonAudio = () => {
        if (!preferences.audioEnabled || !isTtsSupported()) return;
        if (ttsOn) {
            stopTts();
            setTtsOn(false);
            return;
        }
        if (!activeLesson?.content) return;
        speak(`${activeLesson.title || 'Aula curta'}. ${activeLesson.content}`);
        setTtsOn(true);
    };

    return (
        <Layout>
            <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg sticky top-0 z-10 flex items-center gap-3">
                <button
                    onClick={() => navigate('/')}
                    className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors"
                >
                    <ArrowLeft size={20} />
                </button>
                <span className="font-semibold text-slate-700 dark:text-slate-200 truncate flex-1">Caderno de Erros</span>
                {filteredErrors.length > 0 && (
                    <button
                        onClick={handleClear}
                        className="flex items-center gap-1 text-xs font-semibold text-red-600 dark:text-red-400 px-3 py-1.5 rounded-full hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
                    >
                        <Trash2 size={14} />
                        Limpar
                    </button>
                )}
            </div>

            {profile && (
                <div className="px-4 pt-4">
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/60 p-4 flex items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Perfil ativo</p>
                            <p className="font-semibold text-slate-800 dark:text-white">{profile.name}</p>
                            <p className="text-xs">{profile.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {profile.targets.map((target) => (
                                <span
                                    key={`errors-profile-target-${target}`}
                                    className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 text-[11px] font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-200"
                                >
                                    {target}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="flex-1 overflow-y-auto bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
                <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-4 pb-24">
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/60 p-4 flex flex-col gap-3">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                                <p className="text-sm font-bold text-slate-800 dark:text-white">Resumo</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    {filteredErrors.length} questões • {totalWrongCount} erros acumulados
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Button
                                    variant="primary"
                                    className="h-10 px-4 text-sm"
                                    onClick={() => handlePractice(filteredErrors.filter((e) => !e.resolvedAt))}
                                    disabled={filteredErrors.filter((e) => !e.resolvedAt).length === 0}
                                >
                                    Treinar erros
                                </Button>
                                <Button
                                    variant="outline"
                                    className="h-10 px-4 text-sm"
                                    onClick={() => setShowResolved((v) => !v)}
                                >
                                    {showResolved ? 'Ocultar resolvidas' : 'Mostrar resolvidas'}
                                </Button>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Buscar por matéria/tópico/enunciado..."
                                className="flex-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <select
                                value={subjectFilter}
                                onChange={(e) => setSubjectFilter(e.target.value)}
                                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3 py-2 text-sm text-slate-900 dark:text-white"
                            >
                                <option value="all">Todas as matérias</option>
                                {subjects.map((s) => (
                                    <option key={`subject-${s}`} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {lessonError && (
                        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-200">
                            {lessonError}
                        </div>
                    )}

                    {activeLesson?.content && (
                        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/60 p-4 space-y-3">
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex items-center gap-2">
                                    <BookOpen className="text-blue-600 dark:text-blue-400" size={18} />
                                    <div>
                                        <p className="font-bold text-slate-800 dark:text-white">{activeLesson.title || 'Aula curta'}</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                            {lessonLoading ? 'Gerando...' : 'Baseada nos seus erros'}
                                        </p>
                                    </div>
                                </div>
                                {preferences.audioEnabled && isTtsSupported() && (
                                    <Button
                                        variant={ttsOn ? 'secondary' : 'outline'}
                                        className="h-10 px-4 text-sm"
                                        onClick={handleToggleLessonAudio}
                                    >
                                        {ttsOn ? 'Parar áudio' : 'Ouvir'}
                                    </Button>
                                )}
                            </div>

                            <pre className="whitespace-pre-wrap text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                                {activeLesson.content}
                            </pre>

                            {Array.isArray(activeLesson.checklist) && activeLesson.checklist.length > 0 && (
                                <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                                        Checklist
                                    </p>
                                    <ul className="grid gap-2">
                                        {activeLesson.checklist.map((item) => (
                                            <li
                                                key={`lesson-check-${item}`}
                                                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 px-3 py-2 text-sm text-slate-700 dark:text-slate-200"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {filteredErrors.length === 0 ? (
                        <div className="text-center p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
                            <p className="text-slate-700 dark:text-slate-200 font-semibold">Nenhum erro por aqui.</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                Erre algumas questões e o sistema vai guardar para você revisar.
                            </p>
                        </div>
                    ) : (
                        Object.entries(grouped)
                            .sort((a, b) => a[0].localeCompare(b[0]))
                            .map(([subject, topics]) => (
                                <div key={`subject-${subject}`} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/60 overflow-hidden">
                                    <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                                        <div>
                                            <p className="font-bold text-slate-800 dark:text-white">{subject}</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                {Object.values(topics).reduce((sum, list) => sum + list.length, 0)} questões
                                            </p>
                                        </div>
                                        <Button
                                            variant="outline"
                                            className="h-10 px-4 text-sm"
                                            onClick={() => handlePractice(Object.values(topics).flat().filter((e) => !e.resolvedAt))}
                                        >
                                            Treinar matéria
                                        </Button>
                                    </div>

                                    <div className="divide-y divide-slate-200 dark:divide-slate-800">
                                        {Object.entries(topics)
                                            .sort((a, b) => a[0].localeCompare(b[0]))
                                            .map(([topic, list]) => (
                                                <div key={`topic-${subject}-${topic}`} className="p-4 space-y-3">
                                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                                        <div>
                                                            <p className="text-sm font-semibold text-slate-800 dark:text-white">{topic}</p>
                                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                                {list.length} questões • {list.reduce((s, e) => s + (e.wrongCount || 1), 0)} erros
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2">
                                                            <Button
                                                                variant="primary"
                                                                className="h-10 px-4 text-sm"
                                                                onClick={() => handlePractice(list.filter((e) => !e.resolvedAt))}
                                                            >
                                                                Treinar tópico
                                                            </Button>
                                                            <Button
                                                                variant="outline"
                                                                className="h-10 px-4 text-sm"
                                                                disabled={lessonLoading && activeLessonKey === getLessonCacheKey(subject, topic)}
                                                                onClick={() => handleMicroLesson(subject, topic, list)}
                                                            >
                                                                {lessonLoading && activeLessonKey === getLessonCacheKey(subject, topic)
                                                                    ? 'Gerando...'
                                                                    : 'Aula curta (IA)'}
                                                            </Button>
                                                        </div>
                                                    </div>

                                                    <div className="grid gap-3">
                                                        {list.map((e) => (
                                                            <div
                                                                key={e.entryId}
                                                                className={clsx(
                                                                    "rounded-2xl border p-4",
                                                                    e.resolvedAt
                                                                        ? "border-emerald-200 bg-emerald-50/60 dark:border-emerald-900/40 dark:bg-emerald-900/10"
                                                                        : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/30"
                                                                )}
                                                            >
                                                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                                                    <p className="text-sm font-semibold text-slate-800 dark:text-white">
                                                                        {e.questionId}
                                                                    </p>
                                                                    <div className="flex items-center gap-2">
                                                                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-900/50 text-slate-600 dark:text-slate-200">
                                                                            Erros: {e.wrongCount || 1}
                                                                        </span>
                                                                        {e.resolvedAt && (
                                                                            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-200">
                                                                                Resolvida
                                                                            </span>
                                                                        )}
                                                                        <button
                                                                            onClick={() => handleRemove(e.entryId)}
                                                                            className="text-xs font-semibold text-red-600 dark:text-red-400 hover:underline"
                                                                        >
                                                                            Remover
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                                                                    {e.text}
                                                                </p>

                                                                {Array.isArray(e.options) && e.options.length > 0 && (
                                                                    <div className="mt-3 grid gap-2">
                                                                        {e.options.map((opt) => (
                                                                            <div
                                                                                key={opt.id}
                                                                                className={clsx(
                                                                                    "rounded-xl border px-3 py-2 text-sm",
                                                                                    opt.id === e.correctId
                                                                                        ? "border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20"
                                                                                        : opt.id === e.selectedId
                                                                                            ? "border-red-300 bg-red-50 dark:bg-red-900/20"
                                                                                            : "border-slate-200 dark:border-slate-800"
                                                                                )}
                                                                            >
                                                                                <p className="font-semibold text-slate-700 dark:text-slate-200">
                                                                                    {opt.id.toUpperCase()}. {opt.text}
                                                                                </p>
                                                                                {e.optionExplanations?.[opt.id] && (
                                                                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                                                                        {e.optionExplanations[opt.id]}
                                                                                    </p>
                                                                                )}
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                )}

                                                                {e.explanation && (
                                                                    <p className="mt-3 text-xs text-slate-600 dark:text-slate-300">
                                                                        <span className="font-semibold">Comentário:</span> {e.explanation}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            ))
                    )}
                </div>
            </div>
        </Layout>
    );
}

