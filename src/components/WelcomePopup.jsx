import { useEffect, useState } from 'react';
import { Heart, Sparkles, X } from 'lucide-react';

export default function WelcomePopup({ userName, onClose }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Sempre mostra o popup quando o componente monta
        setShow(true);
    }, [userName]);

    if (!show) return null;

    const handleClose = () => {
        setShow(false);
        if (onClose) onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="relative max-w-md w-full bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900/20 rounded-2xl shadow-2xl border-2 border-pink-200 dark:border-pink-500/30 animate-scaleIn overflow-hidden">

                {/* Background decorativo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200/30 dark:bg-pink-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl"></div>

                {/* Botão fechar */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 transition-all shadow-lg z-10"
                    aria-label="Fechar"
                >
                    <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>

                {/* Conteúdo */}
                <div className="relative p-8 text-center">

                    {/* Ícone principal */}
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-pink-400 dark:bg-pink-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                            <div className="relative bg-gradient-to-br from-pink-400 to-purple-500 p-4 rounded-full shadow-xl">
                                <Heart className="w-12 h-12 text-white fill-white animate-heartbeat" />
                            </div>
                        </div>
                    </div>

                    {/* Título */}
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                        Olá, {userName}! ❤️
                    </h2>

                    {/* Mensagem especial */}
                    <div className="space-y-4 mb-6">
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Eu te amo muito e <strong className="text-pink-600 dark:text-pink-400">acredito profundamente no seu potencial!</strong>
                        </p>

                        <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                            Você é capaz de conquistar tudo que desejar!
                        </p>

                        <p className="text-base text-gray-600 dark:text-gray-400 italic">
                            Este app foi feito com muito carinho para te ajudar a alcançar seus sonhos. Você vai arrasar!
                        </p>

                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-6 pt-4 border-t border-pink-200 dark:border-pink-500/30">
                            by: <span className="font-semibold text-pink-600 dark:text-pink-400">Keller</span> ❤️
                        </p>
                    </div>

                    {/* Botão */}
                    <button
                        onClick={handleClose}
                        className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 hover:from-pink-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                        <Heart className="w-5 h-5 fill-white" />
                        Vamos começar!
                        <Heart className="w-5 h-5 fill-white" />
                    </button>
                </div>
            </div>
        </div>
    );
}
