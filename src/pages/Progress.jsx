import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, ArrowLeft, Target } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { useGamification } from '../context/GamificationContext';
import { useRequireAuth } from '../hooks/useRequireAuth';

export function Progress() {
    const navigate = useNavigate();
    const { xp, level, streak } = useGamification();
    const profile = useRequireAuth();

    // TODO: Adicionar sistema de tracking de questões respondidas
    const hasData = false; // Será true quando houver dados reais

    return (
        <Layout>
            <div className="flex items-center p-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 sticky top-0 z-10 transition-colors">
                <button onClick={() => navigate('/')} className="p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">
                    <ArrowLeft size={24} />
                </button>
                <h1 className="text-lg font-bold text-slate-800 dark:text-white ml-2">Meu Progresso</h1>
            </div>

            <div className="p-6 space-y-6">
                {profile && (
                    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-4 shadow-sm space-y-2">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Perfil em foco</p>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-slate-900 dark:text-white">{profile.name}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{profile.description}</p>
                            </div>
                            <span
                                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white bg-gradient-to-r ${profile.accent}`}
                            >
                                {profile.name[0]}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wide">
                            {profile.targets.map((target) => (
                                <span key={`progress-profile-target-${target}`} className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-200">
                                    {target}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Gamification Stats (Real Data) */}
                <div className="grid grid-cols-3 gap-3">
                    <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl backdrop-blur-sm border border-blue-500/20 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{level}</span>
                        <span className="text-xs text-blue-500 dark:text-blue-400 font-medium uppercase mt-1">Nível</span>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl backdrop-blur-sm border border-purple-500/20 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">{xp}</span>
                        <span className="text-xs text-purple-500 dark:text-purple-400 font-medium uppercase mt-1">XP Total</span>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl backdrop-blur-sm border border-orange-500/20 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">{streak}</span>
                        <span className="text-xs text-orange-500 dark:text-orange-400 font-medium uppercase mt-1">Streak</span>
                    </div>
                </div>

                {/* Empty State */}
                {!hasData && (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-full flex items-center justify-center mb-4">
                            <BarChart3 className="w-10 h-10 text-slate-400 dark:text-slate-600" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                            Nenhum dado ainda
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs mb-6">
                            Comece respondendo questões para ver suas estatísticas aqui.
                        </p>
                        <div className="flex flex-col gap-3 w-full max-w-xs">
                            <Button
                                onClick={() => navigate('/question/setup')}
                                fullWidth
                                variant="primary"
                            >
                                <Target className="w-4 h-4 mr-2" />
                                Responder Questões
                            </Button>
                        </div>
                    </div>
                )}

                {/* Future: Real Statistics (quando implementar tracking) */}
                {hasData && (
                    <div className="space-y-6">
                        <h3 className="font-bold text-slate-800 dark:text-white text-lg">Por Matéria</h3>

                        {/* Aqui virão as estatísticas reais */}
                        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl text-center text-slate-500">
                            <p className="text-sm">Sistema de tracking de questões em desenvolvimento...</p>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}
