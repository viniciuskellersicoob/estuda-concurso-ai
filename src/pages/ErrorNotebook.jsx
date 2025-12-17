import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { ArrowLeft, Trash2, NotebookPen, RefreshCcw } from 'lucide-react';
import { getErrorEntries, removeErrorEntry, clearErrorNotebook } from '../data/errorNotebook';
import { useRequireAuth } from '../hooks/useRequireAuth';

export function ErrorNotebook() {
    const navigate = useNavigate();
    const profile = useRequireAuth();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        setErrors(getErrorEntries());
    }, []);

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
                <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
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
                        errors.map((error) => (
                            <div
                                key={error.entryId}
                                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm p-6 space-y-4"
                            >
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <div>
                                        <p className="text-xs uppercase text-slate-500 dark:text-slate-400">Matéria</p>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{error.subject}</h3>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                            Concurso: <span className="font-semibold">{error.exam || 'Geral'}</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="secondary" onClick={() => handleRetry(error)}>
                                            <RefreshCcw size={16} />
                                            Refazer questão
                                        </Button>
                                        <button
                                            onClick={() => handleRemove(error.entryId)}
                                            className="p-2 text-slate-400 hover:text-red-500 rounded-lg transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        Registrado em{' '}
                                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                                            {new Date(error.recordedAt).toLocaleString('pt-BR')}
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-700 dark:text-white mb-2">{error.text}</p>
                                    <div className="space-y-2">
                                        {error.options.map((option) => (
                                            <div
                                                key={option.id}
                                                className={`flex items-start gap-3 rounded-2xl border px-3 py-2 ${
                                                    option.id === error.correctId
                                                        ? 'border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20'
                                                        : option.id === error.selectedId
                                                            ? 'border-red-300 bg-red-50 dark:bg-red-900/20'
                                                            : 'border-slate-200 dark:border-slate-800'
                                                }`}
                                            >
                                                <span className="font-semibold text-slate-500 dark:text-slate-400">{option.id.toUpperCase()}.</span>
                                                <div>
                                                    <p className="text-sm text-slate-700 dark:text-slate-200">{option.text}</p>
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
                                <div className="text-sm text-slate-600 dark:text-slate-300">
                                    <p>
                                        <span className="font-semibold">Sua resposta:</span>{' '}
                                        {error.selectedId ? error.selectedId.toUpperCase() : '—'}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Gabari to:</span> {error.correctId.toUpperCase()}
                                    </p>
                                    {error.explanation && (
                                        <p className="mt-1">
                                            <span className="font-semibold">Comentário:</span> {error.explanation}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </Layout>
    );
}
