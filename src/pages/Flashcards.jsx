import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RotateCcw, Shuffle, ChevronLeft, ChevronRight, BookOpen, Brain } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { getAllFlashcards, shuffleFlashcards, FLASHCARD_BANK } from '../data/flashcards';

export function Flashcards() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [cards, setCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [studied, setStudied] = useState(new Set());

    // Carregar cards ao selecionar categoria
    useEffect(() => {
        if (selectedCategory === 'all') {
            setCards(shuffleFlashcards(getAllFlashcards()));
        } else {
            setCards(shuffleFlashcards(FLASHCARD_BANK[selectedCategory] || []));
        }
        setCurrentIndex(0);
        setIsFlipped(false);
        setStudied(new Set());
    }, [selectedCategory]);

    const currentCard = cards[currentIndex];
    const progress = cards.length > 0 ? Math.round(((currentIndex + 1) / cards.length) * 100) : 0;

    const handleNext = () => {
        if (currentIndex < cards.length - 1) {
            setStudied(prev => new Set([...prev, currentCard.id]));
            setCurrentIndex(currentIndex + 1);
            setIsFlipped(false);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setIsFlipped(false);
        }
    };

    const handleShuffle = () => {
        setCards(shuffleFlashcards([...cards]));
        setCurrentIndex(0);
        setIsFlipped(false);
        setStudied(new Set());
    };

    const handleReset = () => {
        setCurrentIndex(0);
        setIsFlipped(false);
        setStudied(new Set());
    };

    const categories = [
        { id: 'all', name: 'Todos', icon: '📚', count: getAllFlashcards().length },
        { id: 'lei-execucao-penal', name: 'LEP', icon: '⚖️', count: FLASHCARD_BANK['lei-execucao-penal']?.length || 0 },
        { id: 'lei-drogas', name: 'Lei de Drogas', icon: '🚫', count: FLASHCARD_BANK['lei-drogas']?.length || 0 },
        { id: 'crimes-hediondos', name: 'Hediondos', icon: '🔒', count: FLASHCARD_BANK['crimes-hediondos']?.length || 0 },
        { id: 'ctb', name: 'CTB', icon: '🚗', count: FLASHCARD_BANK['ctb']?.length || 0 },
        { id: 'rju', name: 'Lei 8.112', icon: '👔', count: FLASHCARD_BANK['rju']?.length || 0 },
        { id: 'afo', name: 'AFO', icon: '💰', count: FLASHCARD_BANK['afo']?.length || 0 },
        { id: 'arquivo', name: 'Arquivo', icon: '📁', count: FLASHCARD_BANK['arquivo']?.length || 0 },
        { id: 'constitucional', name: 'Constitucional', icon: '📜', count: FLASHCARD_BANK['constitucional']?.length || 0 },
        { id: 'portugues', name: 'Português', icon: '✍️', count: FLASHCARD_BANK['portugues']?.length || 0 },
        { id: 'logica', name: 'Lógica', icon: '🧮', count: FLASHCARD_BANK['logica']?.length || 0 },
        { id: 'informatica', name: 'Informática', icon: '💻', count: FLASHCARD_BANK['informatica']?.length || 0 },
    ];

    return (
        <Layout>
            <Header />

            <div className="flex-1 p-3 sm:p-4 md:p-6 max-w-6xl mx-auto w-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 md:mb-6">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
                    >
                        <ArrowLeft size={20} />
                        <span className="text-sm md:text-base font-medium">Voltar</span>
                    </button>

                    <div className="flex items-center gap-2">
                        <Brain className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
                        <h1 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white">
                            Flashcards
                        </h1>
                    </div>
                </div>

                {/* Categories */}
                <div className="mb-4 md:mb-6 overflow-x-auto pb-2">
                    <div className="flex gap-2 min-w-max">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition whitespace-nowrap ${selectedCategory === cat.id
                                        ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                                    }`}
                            >
                                <span className="mr-1.5">{cat.icon}</span>
                                {cat.name}
                                <span className="ml-1.5 opacity-75">({cat.count})</span>
                            </button>
                        ))}
                    </div>
                </div>

                {cards.length === 0 ? (
                    <div className="text-center py-12 md:py-20">
                        <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
                        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
                            Nenhum flashcard disponível nesta categoria
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Progress */}
                        <div className="mb-4">
                            <div className="flex items-center justify-between text-xs md:text-sm mb-2">
                                <span className="text-slate-600 dark:text-slate-400">
                                    Card {currentIndex + 1} de {cards.length}
                                </span>
                                <span className="font-semibold text-purple-600 dark:text-purple-400">
                                    {progress}%
                                </span>
                            </div>
                            <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>

                        {/* Card */}
                        <div className="relative h-64 md:h-80 lg:h-96 mb-6 perspective-1000">
                            <div
                                className={`relative w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''
                                    }`}
                                onClick={() => setIsFlipped(!isFlipped)}
                            >
                                {/* Front */}
                                <div className="absolute inset-0 backface-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 p-6 md:p-8 flex flex-col items-center justify-center shadow-2xl">
                                    <div className="text-center">
                                        <div className="inline-block px-3 py-1 bg-purple-500/20 rounded-full text-xs font-medium text-purple-600 dark:text-purple-400 mb-4">
                                            {currentCard?.category}
                                        </div>
                                        <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                            {currentCard?.front}
                                        </h2>
                                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-6">
                                            Clique para revelar a resposta
                                        </p>
                                    </div>
                                </div>

                                {/* Back */}
                                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl md:rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 p-6 md:p-8 flex flex-col items-center justify-center shadow-2xl">
                                    <div className="text-center">
                                        <div className="inline-block px-3 py-1 bg-green-500/20 rounded-full text-xs font-medium text-green-600 dark:text-green-400 mb-4">
                                            Resposta
                                        </div>
                                        <p className="text-base md:text-lg lg:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                                            {currentCard?.back}
                                        </p>
                                        {currentCard?.exam && (
                                            <div className="mt-6 text-xs md:text-sm text-slate-500 dark:text-slate-400">
                                                📌 {currentCard.exam}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-between gap-3">
                            <button
                                onClick={handlePrevious}
                                disabled={currentIndex === 0}
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                            >
                                <ChevronLeft size={20} />
                                <span className="hidden sm:inline">Anterior</span>
                            </button>

                            <button
                                onClick={handleShuffle}
                                className="px-4 md:px-6 py-3 bg-yellow-500 text-white rounded-xl font-medium hover:bg-yellow-600 transition shadow-lg shadow-yellow-500/30"
                                title="Embaralhar"
                            >
                                <Shuffle size={20} />
                            </button>

                            <button
                                onClick={handleReset}
                                className="px-4 md:px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition shadow-lg shadow-blue-500/30"
                                title="Recomeçar"
                            >
                                <RotateCcw size={20} />
                            </button>

                            <button
                                onClick={handleNext}
                                disabled={currentIndex === cards.length - 1}
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:from-purple-600 hover:to-pink-600 transition shadow-lg shadow-purple-500/30"
                            >
                                <span className="hidden sm:inline">Próximo</span>
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="mt-6 grid grid-cols-2 gap-3 md:gap-4">
                            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 md:p-4 text-center">
                                <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Estudados</p>
                                <p className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">
                                    {studied.size}
                                </p>
                            </div>
                            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-3 md:p-4 text-center">
                                <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Restantes</p>
                                <p className="text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-400">
                                    {cards.length - studied.size}
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .transform-style-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </Layout>
    );
}
