import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { ArrowLeft, Trash2, NotebookPen, RefreshCcw, ChevronDown, ChevronRight } from 'lucide-react';
import { getErrorEntries, removeErrorEntry, clearErrorNotebook } from '../data/errorNotebook';
import { useRequireAuth } from '../hooks/useRequireAuth';

export function ErrorNotebook() {
    const navigate = useNavigate();
    const profile = useRequireAuth();
    const [errors, setErrors] = useState([]);
    const [expandedSubjects, setExpandedSubjects] = useState({});
    const [expandedTopics, setExpandedTopics] = useState({});

    useEffect(() => {
        setErrors(getErrorEntries());
    }, []);

    // Agrupar erros por matéria e tópico
    const groupedErrors = useMemo(() => {
        const grouped = {};
        errors.forEach((error) => {
            const subject = error.subject || 'Sem matéria';
            const topic = error.topic || 'Geral';

            if (!grouped[subject]) {
                grouped[subject] = {};
            }
            if (!grouped[subject][topic]) {
                grouped[subject][topic] = [];
            }
            grouped[subject][topic].push(error);
        });
        return grouped;
    }, [errors]);

    const handleRemove = (entryId) => {
        removeErrorEntry(entryId);
        setErrors(getErrorEntries());
    };

    const handleClear = () => {
        clearErrorNotebook();
        setErrors([]);
    };

    const handleRetry = (error) => {
        navigate('/question', {
            state: {
                exam: error.exam,
                subject: error.subject,
                position: null,
            },
        });
    };

    const toggleSubject = (subject) => {
        setExpandedSubjects((prev) => ({
            ...prev,
            [subject]: !prev[subject],
        }));
    };

    const toggleTopic = (subjectTopic) => {
        setExpandedTopics((prev) => ({
            ...prev,
            [subjectTopic]: !prev[subjectTopic],
        }));
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
                {errors.length > 0 && (
                    <button
                        onClick={handleClear}
                        className="flex items-center gap-1 text-xs font-semibold text-red-600 dark:text-red-400 px-3 py-1.5 rounded-full hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
                    >
                        <Trash2 size={14} />
                        Limpar tudo
                    </button>
                )}
            </div>
            {profile && (
                <div className="px-4 pb-4">
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/60 p-4 flex items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Perfil ativo</p>
                            <p className="font-semibold text-slate-800 dark:text-white">{profile.name}</p>
                            <p className="text-xs">{profile.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {profile.targets.map((target) => (
                                <span key={`errors-profile-target-${target}`} className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 text-[11px] font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-200">
                                    {target}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="flex-1 overflow-y-auto bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
                <div className="max-w-4xl mx-auto p-6 space-y-4 pb-24">
                    {errors.length === 0 ? (
                        <div className="text-center p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
                            <NotebookPen size={48} className="mx-auto text-purple-500 mb-4" />
                            <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Sem registros ainda</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Resolva questões no modo simulado. Todo erro aparecerá aqui com explicações detalhadas.
                            </p>
                            <Button className="mt-6" onClick={() => navigate('/question', { state: { mode: 'questions' } })}>
                                Ir para Simulado
                            </Button>
                        </div>
                    ) : (
                        Object.entries(groupedErrors).map(([subject, topics]) => {
                            const subjectErrorCount = Object.values(topics).reduce((sum, topicErrors) => sum + topicErrors.length, 0);
                            const isSubjectExpanded = expandedSubjects[subject];

                            return (
                                <div key={subject} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm overflow-hidden">
                                    {/* Header da Matéria */}
                                    <button
                                        onClick={() => toggleSubject(subject)}
                                        className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            {isSubjectExpanded ? <ChevronDown size={20} className="text-slate-400" /> : <ChevronRight size={20} className="text-slate-400" />}
                                            <div className="text-left">
                                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{subject}</h3>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">{subjectErrorCount} {subjectErrorCount === 1 ? 'erro' : 'erros'}</p>
                                            </div>
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-bold">
                                            {subjectErrorCount}
                                        </div>
                                    </button>

                                    {/* Tópicos da Matéria */}
                                    {isSubjectExpanded && (
                                        <div className="border-t border-slate-200 dark:border-slate-800">
                                            {Object.entries(topics).map(([topic, topicErrors]) => {
                                                const topicKey = `${subject}-${topic}`;
                                                const isTopicExpanded = expandedTopics[topicKey];

                                                return (
                                                    <div key={topicKey} className="border-b border-slate-200 dark:border-slate-800 last:border-b-0">
                                                        {/* Header do Tópico */}
                                                        <button
                                                            onClick={() => toggleTopic(topicKey)}
                                                            className="w-full flex items-center justify-between p-4 pl-12 hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors"
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                {isTopicExpanded ? <ChevronDown size={16} className="text-slate-400" /> : <ChevronRight size={16} className="text-slate-400" />}
                                                                <div className="text-left">
                                                                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{topic}</p>
                                                                    <p className="text-xs text-slate-500 dark:text-slate-400">{topicErrors.length} {topicErrors.length === 1 ? 'questão' : 'questões'}</p>
                                                                </div>
                                                            </div>
                                                            <div className="px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-bold">
                                                                {topicErrors.length}
                                                            </div>
                                                        </button>

                                                        {/* Questões do Tópico */}
                                                        {isTopicExpanded && (
                                                            <div className="bg-slate-50 dark:bg-slate-900/20 p-4 space-y-4">
                                                                {topicErrors.map((error) => (
                                                                    <div
                                                                        key={error.entryId}
                                                                        className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 shadow-sm p-4 space-y-3"
                                                                    >
                                                                        <div className="flex items-start justify-between gap-3">
                                                                            <div className="flex-1">
                                                                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                                                                    {new Date(error.recordedAt).toLocaleString('pt-BR')}
                                                                                </p>
                                                                            </div>
                                                                            <div className="flex items-center gap-2">
                                                                                <Button variant="secondary" size="sm" onClick={() => handleRetry(error)}>
                                                                                    <RefreshCcw size={14} />
                                                                                </Button>
                                                                                <button
                                                                                    onClick={() => handleRemove(error.entryId)}
                                                                                    className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg transition-colors"
                                                                                >
                                                                                    <Trash2 size={16} />
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <p className="text-sm font-semibold text-slate-700 dark:text-white mb-2">{error.text}</p>
                                                                            <div className="space-y-2">
                                                                                {error.options.map((option) => (
                                                                                    <div
                                                                                        key={option.id}
                                                                                        className={`flex items-start gap-2 rounded-xl border px-3 py-2 text-sm ${option.id === error.correctId
                                                                                                ? 'border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20'
                                                                                                : option.id === error.selectedId
                                                                                                    ? 'border-red-300 bg-red-50 dark:bg-red-900/20'
                                                                                                    : 'border-slate-200 dark:border-slate-700'
                                                                                            }`}
                                                                                    >
                                                                                        <span className="font-semibold text-slate-500 dark:text-slate-400">{option.id.toUpperCase()}.</span>
                                                                                        <div className="flex-1">
                                                                                            <p className="text-slate-700 dark:text-slate-200">{option.text}</p>
                                                                                            {error.optionExplanations?.[option.id] && (
                                                                                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                                                                                    {error.optionExplanations[option.id]}
                                                                                                </p>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                                                                            <p>
                                                                                <span className="font-semibold">Sua resposta:</span> {error.selectedId ? error.selectedId.toUpperCase() : '—'}
                                                                            </p>
                                                                            <p>
                                                                                <span className="font-semibold">Gabarito:</span> {error.correctId.toUpperCase()}
                                                                            </p>
                                                                            {error.explanation && (
                                                                                <p className="mt-2 text-slate-700 dark:text-slate-200">
                                                                                    <span className="font-semibold">Comentário:</span> {error.explanation}
                                                                                </p>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </Layout>
    );
}
