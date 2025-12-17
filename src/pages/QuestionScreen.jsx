import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { StudyControls } from '../components/StudyControls';
import { generateQuestion } from '../services/ai';
import { getQuestionFromBank } from '../data/questionBank';
import { addErrorEntry } from '../data/errorNotebook';
import { useGamification } from '../context/GamificationContext';
import { clsx } from 'clsx';
import { useRequireAuth } from '../hooks/useRequireAuth';

export function QuestionScreen() {
    const navigate = useNavigate();
    const location = useLocation();
    const { exam, position, subjects, topics } = location.state || {};
    const profile = useRequireAuth();

    // Redirect to setup if no configuration
    React.useEffect(() => {
        if (!exam || !subjects || subjects.length === 0) {
            navigate('/question/setup');
        }
    }, [exam, subjects, navigate]);

    const [currentSubjectIndex, setCurrentSubjectIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [isAnswered, setIsAnswered] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const usedBankIdsRef = useRef(new Set());

    const { addXp } = useGamification();

    // Get current subject
    const currentSubject = subjects?.[currentSubjectIndex] || 'Conhecimentos Gerais';

    // Initial load
    useEffect(() => {
        if (currentSubject) {
            loadNewQuestion();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSubject]);

    const loadNewQuestion = async () => {
        setLoading(true);
        setError(null);

        const bankQuestion = getQuestionFromBank(currentSubject, usedBankIdsRef.current, exam);
        if (bankQuestion) {
            usedBankIdsRef.current.add(bankQuestion.id);
            setQuestions((prev) => [
                ...prev,
                {
                    ...bankQuestion,
                    subject: currentSubject,
                    exam: exam || 'Geral',
                },
            ]);
            setLoading(false);
            return true;
        }

        try {
            const newQuestion = await generateQuestion(currentSubject, exam);
            newQuestion.id = newQuestion.id || Date.now().toString();
            setQuestions((prev) => [
                ...prev,
                {
                    ...newQuestion,
                    subject: currentSubject,
                    exam: exam || 'Geral',
                },
            ]);
            return true;
        } catch (err) {
            console.error(err);
            setError(err.message);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const currentQuestion = questions[currentIndex];

    const handleOptionSelect = (optionId) => {
        if (isAnswered) return;
        setSelectedOption(optionId);
    };

    const handleSubmit = () => {
        if (!selectedOption) return;
        setIsAnswered(true);

        // Gamification Logic
        if (selectedOption === currentQuestion.correctId) {
            addXp(10); // 10 XP per correct answer
        } else {
            addErrorEntry({
                questionId: currentQuestion.id,
                subject: currentQuestion.subject || currentSubject,
                exam: currentQuestion.exam || exam || 'Geral',
                text: currentQuestion.text,
                options: currentQuestion.options,
                correctId: currentQuestion.correctId,
                selectedId: selectedOption,
                explanation: currentQuestion.explanation,
                optionExplanations: currentQuestion.optionExplanations,
            });
        }
    };

    const handleNext = async () => {
        if (currentIndex === questions.length - 1) {
            const success = await loadNewQuestion();
            if (success) {
                setCurrentIndex((prev) => prev + 1);
                setSelectedOption('');
                setIsAnswered(false);
            }
            return;
        }

        setCurrentIndex((prev) => prev + 1);
        setSelectedOption('');
        setIsAnswered(false);
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            setSelectedOption('');
            setIsAnswered(true); // Review mode
        }
    };

    if (loading && !currentQuestion) {
        return (
            <Layout>
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center animate-pulse">
                    <div className="w-12 h-12 bg-blue-200 dark:bg-blue-900 rounded-full mb-4"></div>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Gerando questão com IA...</p>
                    <p className="text-xs text-slate-400 dark:text-slate-600 mt-2">Isso pode levar alguns segundos.</p>
                </div>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                    <AlertCircle size={48} className="text-red-500 mb-4" />
                    <p className="text-slate-800 dark:text-white font-bold mb-2">Erro ao gerar questão</p>
                    <p className="text-slate-500 dark:text-slate-400 mb-6">{error}</p>
                    <Button onClick={loadNewQuestion}>Tentar Novamente</Button>
                    <Button variant="ghost" onClick={() => navigate('/')} className="mt-2">Voltar</Button>
                </div>
            </Layout>
        );
    }

    const isCorrect = isAnswered && selectedOption === currentQuestion.correctId;

    return (
        <Layout>
            {/* Header with Progress Bar */}
            <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center gap-3 sticky top-0 z-10 transition-colors">
                <button onClick={() => navigate('/')} className="p-1 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 rounded">
                    <ArrowLeft size={20} />
                </button>
                <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-blue-500 transition-all duration-300"
                        style={{ width: `100%` }}
                    />
                </div>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Questão {currentIndex + 1}
                </span>
            </div>

            <div className="flex-1 overflow-y-auto pb-32">
                <div className="p-6 space-y-6">
                    {profile && (
                        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-4 shadow-sm space-y-2">
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Perfil ativo</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-semibold text-slate-800 dark:text-white">{profile.name}</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{profile.description}</p>
                                </div>
                                <span
                                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white bg-gradient-to-r ${profile.accent}`}
                                >
                                    {profile.name[0]}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wide">
                                {profile.targets.map((target) => (
                                    <span
                                        key={`question-profile-target-${target}`}
                                        className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-200"
                                    >
                                        {target}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 shadow-xl p-5">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 text-xs font-bold rounded-full uppercase tracking-wide">
                                {currentQuestion.subject || currentSubject}
                            </span>
                            {(currentQuestion.exam || exam) && (
                                <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-full uppercase tracking-wide">
                                    {currentQuestion.exam || exam}
                                </span>
                            )}
                        </div>
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] mb-2">
                            Enunciado
                        </p>
                        <p className="text-lg font-semibold text-slate-800 dark:text-white leading-relaxed">
                            {currentQuestion.text}
                        </p>
                    </div>

                    <div className="space-y-3">
                        {currentQuestion.options.map((opt) => {
                            // Determine styles based on state
                            let optionStyle = "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900";
                            let icon = null;

                            const isSelected = selectedOption === opt.id;

                            if (isAnswered) {
                                if (opt.id === currentQuestion.correctId) {
                                    optionStyle = "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300";
                                    icon = <CheckCircle size={20} className="text-green-600 dark:text-green-400" />;
                                } else if (isSelected && opt.id !== currentQuestion.correctId) {
                                    optionStyle = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300";
                                    icon = <XCircle size={20} className="text-red-600 dark:text-red-400" />;
                                } else {
                                    optionStyle = "border-slate-100 dark:border-slate-800 opacity-60";
                                }
                            } else if (isSelected) {
                                optionStyle = "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-sm ring-1 ring-blue-500";
                            }

                            return (
                                <div
                                    key={opt.id}
                                    onClick={() => handleOptionSelect(opt.id)}
                                    className={clsx(
                                        "relative p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between text-slate-700 dark:text-slate-300",
                                        optionStyle
                                    )}
                                >
                                    <span className="text-sm font-medium pr-8">{opt.text}</span>
                                    {icon}
                                </div>
                            );
                        })}
                    </div>

                    {/* Explanation Section */}
                    {isAnswered && (
                        <div className={`mt-8 p-5 rounded-xl border ${isCorrect ? 'bg-green-50 dark:bg-green-900/10 border-green-100 dark:border-green-900' : 'bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800'} animate-in fade-in slide-in-from-bottom-4 duration-500`}>
                            <div className="flex items-center gap-2 mb-2">
                                <AlertCircle size={18} className={isCorrect ? "text-green-600 dark:text-green-400" : "text-slate-500 dark:text-slate-400"} />
                                <h3 className="font-bold text-sm uppercase text-slate-700 dark:text-slate-200">Explicação</h3>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {currentQuestion.explanation}
                            </p>
                            {!isCorrect && currentQuestion.optionExplanations && (
                                <div className="mt-4 space-y-3 border-t border-slate-200 dark:border-slate-800 pt-4">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                        Comentários por alternativa
                                    </p>
                                    {currentQuestion.options.map((opt) => (
                                        <div
                                            key={opt.id}
                                            className={`rounded-2xl border px-3 py-2 text-sm ${opt.id === currentQuestion.correctId ? 'border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20' : 'border-slate-200 dark:border-slate-800'}`}
                                        >
                                            <p className="font-semibold text-slate-700 dark:text-slate-200 mb-1">
                                                {opt.id.toUpperCase()}. {opt.text}
                                            </p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                {currentQuestion.optionExplanations[opt.id]}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <StudyControls
                onNext={handleNext}
                onPrevious={handlePrevious}
                onSubmit={handleSubmit}
                showSubmit={!isAnswered && !!selectedOption}
                hasNext={true} // In real app, check if last question
                hasPrevious={currentIndex > 0}
                loading={loading}
            />
        </Layout>
    );
}
