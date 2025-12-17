import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Loader2 } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { Select } from '../components/Select';
import { detectExamPositions, getSubjectsForExamAndPosition } from '../services/ai';
import { clsx } from 'clsx';
import { useRequireAuth } from '../hooks/useRequireAuth';

export function StudySetup() {
    const navigate = useNavigate();
    const profile = useRequireAuth();

    const [exam, setExam] = useState('');
    const [position, setPosition] = useState('');
    const [subject, setSubject] = useState('');

    const [loadingPositions, setLoadingPositions] = useState(false);
    const [positions, setPositions] = useState([]);
    const [hasPositions, setHasPositions] = useState(false);

    const [loadingSubjects, setLoadingSubjects] = useState(false);
    const [subjects, setSubjects] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearchExam = async (examName = exam) => {
        if (!examName.trim()) return;

        setLoadingPositions(true);
        setHasSearched(false);
        setPosition('');
        setSubject('');

        try {
            const result = await detectExamPositions(examName);

            if (result.hasMultiplePositions && result.positions.length > 1) {
                // Multiple positions: show dropdown
                setHasPositions(true);
                const formatted = result.positions.map(p => ({ value: p.label, label: p.label }));
                setPositions(formatted);
            } else if (result.positions.length === 1) {
                // Exactly ONE position: auto-select it!
                const singlePosition = result.positions[0].label;
                setPosition(singlePosition);
                setHasPositions(false);
                await loadSubjectsForPosition(examName, singlePosition);
            } else {
                // No positions found: fallback
                setHasPositions(false);
                await loadSubjectsDirectly(examName);
            }
        } catch (error) {
            console.error("Erro ao detectar cargos:", error);
            setHasPositions(false);
            await loadSubjectsDirectly(examName);
        } finally {
            setLoadingPositions(false);
        }
    };

    const loadSubjectsDirectly = async (examName = exam) => {
        setLoadingSubjects(true);
        setHasSearched(true);

        try {
            const data = await getSubjectsForExamAndPosition(examName, 'Geral');
            const formatted = data.map(item => ({
                value: item.label,
                label: item.label,
                category: item.category || 'Conhecimentos Específicos'
            }));
            setSubjects(formatted);
        } catch (error) {
            console.error("Erro ao buscar matérias:", error);
            setSubjects([
                { value: 'Conhecimentos Gerais', label: 'Conhecimentos Gerais' },
                { value: 'Língua Portuguesa', label: 'Língua Portuguesa' }
            ]);
        } finally {
            setLoadingSubjects(false);
        }
    };

    const loadSubjectsForPosition = async (examName, positionName) => {
        setLoadingSubjects(true);
        setHasSearched(true);

        try {
            const data = await getSubjectsForExamAndPosition(examName, positionName);
            // Map and preserve category if available
            const formatted = data.map(item => ({
                value: item.label,
                label: item.label,
                category: item.category || 'Conhecimentos Específicos' // default if not provided
            }));
            setSubjects(formatted);
        } catch (error) {
            console.error("Erro ao buscar matérias do cargo:", error);
            setSubjects([
                { value: 'Conhecimentos Gerais', label: 'Conhecimentos Gerais' },
                { value: 'Língua Portuguesa', label: 'Língua Portuguesa' }
            ]);
        } finally {
            setLoadingSubjects(false);
        }
    };

    const handlePositionChange = async (selectedPosition) => {
        setPosition(selectedPosition);
        setSubject('');

        if (!selectedPosition) return;

        setLoadingSubjects(true);
        setHasSearched(true);

        try {
            const data = await getSubjectsForExamAndPosition(exam, selectedPosition);
            const formatted = data.map(item => ({
                value: item.label,
                label: item.label,
                category: item.category || 'Conhecimentos Específicos'
            }));
            setSubjects(formatted);
        } catch (error) {
            console.error("Erro ao buscar matérias:", error);
            setSubjects([
                { value: 'Conhecimentos Gerais', label: 'Conhecimentos Gerais' },
                { value: 'Língua Portuguesa', label: 'Língua Portuguesa' }
            ]);
        } finally {
            setLoadingSubjects(false);
        }
    };

    const handleStart = () => {
        navigate('/question', { state: { exam, subject, position } });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearchExam();
        }
    };

    const canStart = exam && subject;

    return (
        <Layout>
                <div className="flex items-center p-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 sticky top-0 z-10 transition-colors">
                    <button onClick={() => navigate('/')} className="p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">
                        <ArrowLeft size={24} />
                    </button>
                    <h1 className="text-lg font-bold text-slate-800 dark:text-white ml-2">
                        🎯 Simulado
                    </h1>
                </div>

            <div className="p-6 flex-1 flex flex-col">
                {profile && (
                    <div className="mb-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-5 shadow-sm space-y-3">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Perfil ativo</p>
                                <p className="text-lg font-semibold text-slate-900 dark:text-white">{profile.name}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-300">{profile.description}</p>
                            </div>
                            <span
                                className={`inline-flex items-center rounded-2xl px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white bg-gradient-to-r ${profile.accent}`}
                            >
                                {profile.name[0]}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider">
                            {profile.targets.map((target) => (
                                <span
                                    key={target}
                                    className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-slate-600 dark:text-slate-200"
                                >
                                    {target}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                <div className="space-y-6">

                    <div className="w-full mb-4">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            Qual concurso você vai prestar?
                        </label>
                        <div className="relative">
                            <select
                                value={exam}
                                onChange={(e) => {
                                    const newExam = e.target.value;
                                    setExam(newExam);
                                    if (newExam) {
                                        handleSearchExam(newExam); // Pass the value directly!
                                    }
                                }}
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-base rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                            >
                                <option value="">Escolha um concurso...</option>
                                <option value="camara dos deputados">Câmara dos Deputados</option>
                                <option value="policia penal mg">Polícia Penal MG</option>
                                <option value="pmdf">PMDF - Polícia Militar do DF</option>
                            </select>
                        </div>
                    </div>

                    {hasPositions && (
                        <div className="animate-in fade-in slide-in-from-top-2 duration-500">
                            <Select
                                label="Para qual cargo?"
                                placeholder="Selecione o cargo..."
                                value={position}
                                onChange={handlePositionChange}
                                options={positions}
                            />
                        </div>
                    )}

                    {hasSearched && subjects.length > 0 && (
                        <div className="animate-in fade-in slide-in-from-top-2 duration-500">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                                Escolha a Matéria
                            </label>
                            <select
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-base rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                            >
                                <option value="">{loadingSubjects ? "Buscando matérias..." : "Selecione a disciplina..."}</option>

                                {(() => {
                                    // Group by actual category from database
                                    const basicSubjects = subjects.filter(s =>
                                        s.category === 'Conhecimentos Básicos'
                                    );
                                    const specificSubjects = subjects.filter(s =>
                                        s.category && s.category !== 'Conhecimentos Básicos'
                                    );

                                    return (
                                        <>
                                            {basicSubjects.length > 0 && (
                                                <optgroup label="📚 Conhecimentos Básicos">
                                                    {basicSubjects.map((s) => (
                                                        <option key={s.value} value={s.value}>{s.label}</option>
                                                    ))}
                                                </optgroup>
                                            )}
                                            {specificSubjects.length > 0 && (
                                                <optgroup label="🎯 Conhecimentos Específicos">
                                                    {specificSubjects.map((s) => (
                                                        <option key={s.value} value={s.value}>{s.label}</option>
                                                    ))}
                                                </optgroup>
                                            )}
                                        </>
                                    );
                                })()}
                            </select>
                        </div>
                    )}

                    <div className="p-4 rounded-xl border mt-8 bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800">
                        <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-300">
                            🧠 Modo Inteligente
                        </h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                            Detecta automaticamente os cargos disponíveis e lista TODAS as matérias específicas.
                        </p>
                    </div>
                </div>

                <div className="mt-auto pt-8 space-y-3">
                    <Button
                        fullWidth
                        disabled={!canStart}
                        onClick={handleStart}
                        className={!canStart ? 'opacity-50 cursor-not-allowed bg-slate-300 dark:bg-slate-700 shadow-none' : ''}
                        variant="primary"
                    >
                        🎯 Começar Simulado
                    </Button>
                </div>
            </div>
        </Layout >
    );
}
