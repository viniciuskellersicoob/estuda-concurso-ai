import React, { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RotateCcw, Shuffle, ChevronLeft, ChevronRight, BookOpen, Brain } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { getAllExams, getExamSubjects, getFlashcards, shuffleFlashcards } from '../data/flashcards';

export function Flashcards() {
    const navigate = useNavigate();
    const [selectedExam, setSelectedExam] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState('all');
    const [allCards, setAllCards] = useState([]);
    const [cards, setCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [studied, setStudied] = useState(new Set());

    const exams = getAllExams();
    const subjects = selectedExam ? getExamSubjects(selectedExam) : [];

    // Carregar cards ao selecionar matéria
    useEffect(() => {
        if (selectedExam && selectedSubject) {
            const flashcards = getFlashcards(selectedExam, selectedSubject);
            const shuffled = shuffleFlashcards(flashcards);
            setAllCards(shuffled);
            setCards(shuffled);
            setCurrentIndex(0);
            setIsFlipped(false);
            setStudied(new Set());
            setSelectedTopic('all');
        }
    }, [selectedExam, selectedSubject]);

    const availableTopics = useMemo(() => {
        const topicSet = new Set();
        allCards.forEach((card) => {
            if (card.topic) topicSet.add(card.topic);
        });
        return Array.from(topicSet).sort((a, b) => a.localeCompare(b, 'pt-BR'));
    }, [allCards]);

    useEffect(() => {
        if (!selectedExam || !selectedSubject) return;
        if (!allCards || allCards.length === 0) return;

        const filtered = selectedTopic === 'all' ? allCards : allCards.filter((card) => card.topic === selectedTopic);
        setCards(shuffleFlashcards(filtered));
        setCurrentIndex(0);
        setIsFlipped(false);
        setStudied(new Set());
    }, [selectedTopic, selectedExam, selectedSubject, allCards]);

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
        const base = selectedTopic === 'all' ? allCards : allCards.filter((card) => card.topic === selectedTopic);
        setCards(shuffleFlashcards([...base]));
        setCurrentIndex(0);
        setIsFlipped(false);
        setStudied(new Set());
    };

    const handleReset = () => {
        setCurrentIndex(0);
        setIsFlipped(false);
        setStudied(new Set());
    };

    const handleBackToExams = () => {
        setSelectedExam(null);
        setSelectedSubject(null);
        setSelectedTopic('all');
        setAllCards([]);
        setCards([]);
    };

    const handleBackToSubjects = () => {
        setSelectedSubject(null);
        setSelectedTopic('all');
        setAllCards([]);
        setCards([]);
    };

    return (
        <Layout>
            <Header />

            <div className="flex-1 p-3 sm:p-4 md:p-6 max-w-6xl mx-auto w-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 md:mb-6">
                    <button
                        onClick={() => !selectedExam ? navigate('/') : selectedSubject ? handleBackToSubjects() : handleBackToExams()}
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
                    >
                        <ArrowLeft size={20} />
                        <span className="text-sm md:text-base font-medium">
                            {!selectedExam ? 'Início' : selectedSubject ? 'Voltar' : 'Concursos'}
                        </span>
                    </button>

                    <div className="flex items-center gap-2">
                        <Brain className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
                        <h1 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white">
                            Flashcards
                        </h1>
                    </div>
                </div>

                {/* Breadcrumb */}
                {(selectedExam || selectedSubject) && (
                    <div className="mb-4 flex items-center gap-2 text-xs md:text-sm text-slate-500 dark:text-slate-400">
                        <span>📚 Flashcards</span>
                        {selectedExam && (
                            <>
                                <span>→</span>
                                <span>{exams.find(e => e.id === selectedExam)?.name}</span>
                            </>
                        )}
                        {selectedSubject && (
                            <>
                                <span>→</span>
                                <span>{subjects.find(s => s.id === selectedSubject)?.name}</span>
                            </>
                        )}
                    </div>
                )}

                {/* Seleção de Concurso */}
                {!selectedExam && (
                    <div className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {exams.map(exam => (
                            <button
                                key={exam.id}
                                onClick={() => setSelectedExam(exam.id)}
                                className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border border-purple-500/20 p-5 md:p-6 text-left transition-all duration-300 active:scale-[0.98] md:hover:scale-[1.02]"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition"></div>

                                <div className="relative">
                                    <div className="text-3xl md:text-4xl mb-3">{exam.icon}</div>
                                    <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                                        {exam.name}
                                    </h3>
                                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                                        {exam.subjectCount} {exam.subjectCount === 1 ? 'matéria' : 'matérias'}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                {/* Seleção de Matéria */}
                {selectedExam && !selectedSubject && (
                    <div className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {subjects.map(subject => (
                            <button
                                key={subject.id}
                                onClick={() => setSelectedSubject(subject.id)}
                                className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 border border-blue-500/20 p-4 md:p-5 text-left transition-all duration-300 active:scale-[0.98] md:hover:scale-[1.02]"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="text-2xl md:text-3xl shrink-0">{subject.icon}</div>
                                    <div className="flex-1">
                                        <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white mb-1">
                                            {subject.name}
                                        </h4>
                                        <p className="text-xs text-slate-600 dark:text-slate-400">
                                            {subject.cardCount} {subject.cardCount === 1 ? 'flashcard' : 'flashcards'}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                {/* Flashcards */}
                {selectedExam && selectedSubject && (
                    cards.length === 0 ? (
                        <div className="text-center py-12 md:py-20">
                            <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
                            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
                                Nenhum flashcard disponível
                            </p>
                        </div>
                    ) : (
                        <>
                            {/* Filtro por tópico (quando houver tags) */}
                            {availableTopics.length > 0 && (
                                <div className="mb-4 md:mb-6">
                                    <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
                                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                            <BookOpen className="w-4 h-4" />
                                            <span className="font-medium">Filtrar por tópico</span>
                                        </div>
                                        <select
                                            value={selectedTopic}
                                            onChange={(e) => setSelectedTopic(e.target.value)}
                                            className="w-full sm:w-auto px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                                        >
                                            <option value="all">Todos os tópicos ({allCards.length})</option>
                                            {availableTopics.map((topic) => {
                                                const count = allCards.filter((c) => c.topic === topic).length;
                                                return (
                                                    <option key={topic} value={topic}>
                                                        {topic} ({count})
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            )}

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
                                            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                                {currentCard?.front}
                                            </h2>
                                            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-6">
                                                Clique para revelar a resposta
                                            </p>
                                        </div>
                                    </div>

                                    {/* Back */}
                                    <div
                                        className="absolute inset-0 backface-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 p-6 md:p-8 flex flex-col items-center justify-center shadow-2xl"
                                        style={{ transform: 'rotateY(180deg)' }}
                                    >
                                        <div className="text-center">
                                            <div className="inline-block px-3 py-1 bg-green-500/20 rounded-full text-xs font-medium text-green-600 dark:text-green-400 mb-4">
                                                Resposta
                                            </div>
                                            {currentCard?.topic && (
                                                <div className="mb-3">
                                                    <span className="inline-block px-3 py-1 bg-purple-500/15 border border-purple-500/20 rounded-full text-xs font-medium text-purple-700 dark:text-purple-300">
                                                        Tópico: {currentCard.topic}
                                                    </span>
                                                </div>
                                            )}
                                            <p className="text-base md:text-lg lg:text-xl text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                                                {currentCard?.back}
                                            </p>
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
                    )
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
