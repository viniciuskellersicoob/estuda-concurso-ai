import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, ChevronRight, Wifi, WifiOff, Loader2, Zap, Target, Sparkles, NotebookPen } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { checkConnection } from '../services/ai';
import { useGamification } from '../context/GamificationContext';
import { clsx } from 'clsx';
import { useAuth } from '../context/AuthContext';

export function Home() {
    const navigate = useNavigate();
    const [apiStatus, setApiStatus] = useState(null);
    const [checking, setChecking] = useState(false);
    const [credential, setCredential] = useState('');
    const { xp, level, streak } = useGamification();
    const {
        isAuthenticated,
        selectedUser,
        login,
        selectUser,
        logout,
        errorMessage,
        userProfiles,
    } = useAuth();

    const profile = selectedUser ? userProfiles[selectedUser] : null;

    const handleLogin = () => {
        if (login(credential)) {
            setCredential('');
        }
    };

    const handleCheckApi = async () => {
        setChecking(true);
        try {
            const status = await checkConnection();
            setApiStatus(status);
        } catch (error) {
            setApiStatus({ ok: false, message: 'Falha ao verificar IA' });
        } finally {
            setChecking(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <Layout>
                <div className="flex-1 flex items-center justify-center p-3 sm:p-4 md:p-6">
                    <div className="w-full max-w-md rounded-2xl md:rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 sm:p-6 space-y-5 shadow-xl">
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Acesso Seguro</h2>
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                            Digite a credencial para continuar.
                        </p>
                        <input
                            type="password"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                            className="w-full rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-4 py-3.5 text-base text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Credencial"
                        />
                        <button
                            onClick={handleLogin}
                            className="w-full rounded-xl md:rounded-2xl bg-blue-600 text-white py-3.5 font-semibold hover:bg-blue-700 active:bg-blue-800 transition"
                        >
                            Entrar
                        </button>
                        {errorMessage && (
                            <p className="text-center text-xs md:text-sm text-red-500">{errorMessage}</p>
                        )}
                    </div>
                </div>
            </Layout>
        );
    }

    if (!selectedUser) {
        return (
            <Layout>
                <div className="flex-1 flex items-center justify-center p-3 sm:p-4 md:p-6">
                    <div className="w-full max-w-2xl rounded-2xl md:rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 sm:p-6 md:p-8 space-y-5 md:space-y-6 shadow-xl">
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Quem está estudando?</h2>
                            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                                Escolha o perfil para uma experiência personalizada.
                            </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
                            {Object.values(userProfiles).map((profileOption) => (
                                <button
                                    key={profileOption.name}
                                    onClick={() => selectUser(profileOption.name)}
                                    className="group relative overflow-hidden rounded-xl md:rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-5 md:p-6 text-center transition-all duration-300 active:scale-[0.98] md:hover:scale-105 md:hover:shadow-xl"
                                >
                                    <div className={`absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${profileOption.accent} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>

                                    <div className="relative">
                                        <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${profileOption.accent} text-white text-xl md:text-2xl font-bold mb-3 shadow-lg`}>
                                            {profileOption.name[0]}
                                        </div>
                                        <p className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                                            {profileOption.name}
                                        </p>
                                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2">
                                            {profileOption.description}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                            <button
                                onClick={logout}
                                className="w-full text-xs md:text-sm uppercase tracking-wide text-red-600 hover:text-red-400 active:text-red-500 transition py-2.5"
                            >
                                Trocar credencial
                            </button>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout className="relative overflow-hidden max-w-full">
            <Header />

            {/* Background gradient */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
            </div>

            <div className="flex-1 p-3 sm:p-4 md:p-6 flex flex-col gap-4 md:gap-6 relative max-w-5xl mx-auto w-full">

                {/* Welcome Section with Gamification */}
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/20 p-4 md:p-6">
                    <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-2xl"></div>

                    <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                                    <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                                        Olá, Estrategista!
                                    </h2>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm">
                                    Nível {level} • {xp.toLocaleString()} XP
                                </p>
                            </div>

                            <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 md:px-4 py-2 rounded-full font-bold text-xs md:text-sm shadow-lg">
                                <Zap size={14} className="md:w-4 md:h-4" fill="currentColor" />
                                {streak} dias
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-4">
                            <div className="flex items-center justify-between text-xs mb-2">
                                <span className="text-slate-600 dark:text-slate-400">Progresso para Nível {level + 1}</span>
                                <span className="font-semibold text-blue-600 dark:text-blue-400">
                                    {Math.min(100, Math.floor((xp % 100)))}%
                                </span>
                            </div>
                            <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                                    style={{ width: `${Math.min(100, (xp % 100))}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* API Status */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20">
                    <div className="flex items-center gap-3 flex-1">
                        <div className={clsx("p-2 rounded-xl transition-all duration-300",
                            apiStatus?.ok ? "bg-green-500/20 text-green-600 dark:text-green-400" :
                                apiStatus?.ok === false ? "bg-red-500/20 text-red-600 dark:text-red-400" :
                                    "bg-slate-200 dark:bg-slate-700 text-slate-500"
                        )}>
                            {apiStatus?.ok ? <Wifi size={16} className="md:w-5 md:h-5" /> : <WifiOff size={16} className="md:w-5 md:h-5" />}
                        </div>
                        <div className="flex-1">
                            <p className="text-xs text-slate-500 dark:text-slate-400">Status IA</p>
                            <p className={clsx("text-xs md:text-sm font-semibold",
                                apiStatus?.ok ? "text-green-700 dark:text-green-400" :
                                    apiStatus?.ok === false ? "text-red-700 dark:text-red-400" :
                                        "text-slate-600 dark:text-slate-400"
                            )}>
                                {checking ? "Verificando..." : (apiStatus?.message || "Não verificado")}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleCheckApi}
                        disabled={checking}
                        className="w-full sm:w-auto px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 shadow-lg shadow-blue-500/30"
                    >
                        {checking ? <Loader2 size={16} className="animate-spin mx-auto" /> : "Testar"}
                    </button>
                </div>

                {/* Action Cards */}
                <div className="grid gap-3 md:gap-4">
                    <button
                        onClick={() => navigate('/question/setup')}
                        className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20 backdrop-blur-xl border border-blue-500/20 p-4 md:p-6 text-left transition-all duration-300 active:scale-[0.98] md:hover:scale-[1.02] md:hover:shadow-2xl md:hover:shadow-blue-500/20"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-300"></div>

                        <div className="relative z-10 flex items-start gap-3 md:gap-4">
                            <div className="p-2.5 md:p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl md:rounded-2xl shadow-lg shrink-0">
                                <Target className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-white mb-1">
                                    Simular Questões
                                </h3>
                                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                                    Escolha o concurso, matérias e conteúdos específicos para praticar.
                                </p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform shrink-0" />
                        </div>
                    </button>

                    <button
                        onClick={() => navigate('/progress')}
                        className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 backdrop-blur-xl border border-emerald-500/20 p-4 md:p-6 text-left transition-all duration-300 active:scale-[0.98] md:hover:scale-[1.02] md:hover:shadow-2xl md:hover:shadow-emerald-500/20"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-300"></div>

                        <div className="relative z-10 flex items-start gap-3 md:gap-4">
                            <div className="p-2.5 md:p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl md:rounded-2xl shadow-lg shrink-0">
                                <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-white mb-1">
                                    Meu Progresso
                                </h3>
                                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                                    Acompanhe suas estatísticas e desempenho por matéria.
                                </p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-emerald-500 group-hover:translate-x-1 transition-transform shrink-0" />
                        </div>
                    </button>

                    <button
                        onClick={() => navigate('/errors')}
                        className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 hover:from-yellow-500/20 hover:to-orange-500/20 backdrop-blur-xl border border-yellow-500/20 p-4 md:p-6 text-left transition-all duration-300 active:scale-[0.98] md:hover:scale-[1.02] md:hover:shadow-2xl md:hover:shadow-yellow-500/20"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-yellow-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-all duration-300"></div>

                        <div className="relative z-10 flex items-start gap-3 md:gap-4">
                            <div className="p-2.5 md:p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl md:rounded-2xl shadow-lg shrink-0">
                                <NotebookPen className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-white mb-1">
                                    Caderno de Erros
                                </h3>
                                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                                    Revise explicações por alternativa e refaça rapidamente suas questões erradas.
                                </p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-yellow-500 group-hover:translate-x-1 transition-transform shrink-0" />
                        </div>
                    </button>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-4 md:pt-6 text-center">
                    <p className="text-xs text-slate-400 dark:text-slate-500">EstudaConcurso AI • v2.0</p>
                </div>
            </div>
        </Layout>
    );
}
