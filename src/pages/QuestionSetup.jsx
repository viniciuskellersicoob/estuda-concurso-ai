import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Target, BookOpen, CheckCircle2 } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { EXAM_DATABASE, findExam } from '../data/examDatabase';
import { clsx } from 'clsx';
import { useRequireAuth } from '../hooks/useRequireAuth';

export function QuestionSetup() {
    const navigate = useNavigate();
    const profile = useRequireAuth();
    const [selectedExam, setSelectedExam] = useState('');
    const [selectedPosition, setSelectedPosition] = useState('');
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [selectedTopics, setSelectedTopics] = useState({});

    // Get available exams
    const availableExams = Object.keys(EXAM_DATABASE).map(key => ({
        id: key,
        ...EXAM_DATABASE[key]
    }));

    // Get positions for selected exam
    const examData = selectedExam ? EXAM_DATABASE[selectedExam] : null;
    const positions = examData?.positions || [];

    // Get subjects for selected position
    const positionData = positions.find(p => p.id === selectedPosition);
    const subjects = positionData?.subjects || [];

    // Handle exam selection
    const handleExamChange = (examId) => {
        setSelectedExam(examId);
        setSelectedPosition('');
        setSelectedSubjects([]);
        setSelectedTopics({});
    };

    // Handle position selection
    const handlePositionChange = (positionId) => {
        setSelectedPosition(positionId);
        setSelectedSubjects([]);
        setSelectedTopics({});
    };

    // Handle subject toggle
    const handleSubjectToggle = (subjectLabel) => {
        setSelectedSubjects(prev => {
            if (prev.includes(subjectLabel)) {
                // Remove subject and its topics
                const newTopics = { ...selectedTopics };
                delete newTopics[subjectLabel];
                setSelectedTopics(newTopics);
                return prev.filter(s => s !== subjectLabel);
            } else {
                return [...prev, subjectLabel];
            }
        });
    };

    // Handle topic toggle
    const handleTopicToggle = (subjectLabel, topic) => {
        setSelectedTopics(prev => {
            const subjectTopics = prev[subjectLabel] || [];
            if (subjectTopics.includes(topic)) {
                return {
                    ...prev,
                    [subjectLabel]: subjectTopics.filter(t => t !== topic)
                };
            } else {
                return {
                    ...prev,
                    [subjectLabel]: [...subjectTopics, topic]
                };
            }
        });
    };

    // Select all topics for a subject
    const handleSelectAllTopics = (subjectLabel, topics) => {
        setSelectedTopics(prev => ({
            ...prev,
            [subjectLabel]: topics
        }));
    };

    // Check if can start simulation
    const canStart = selectedExam && selectedPosition && selectedSubjects.length > 0;

    // Start simulation
    const handleStartSimulation = () => {
        if (!canStart) return;

        navigate('/question', {
            state: {
                exam: selectedExam,
                position: selectedPosition,
                subjects: selectedSubjects,
                topics: selectedTopics
            }
        });
    };

    return (
        <Layout>
            {/* Header */}
            <div className="px-3 sm:px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center gap-3 sticky top-0 z-10">
                <button
                    onClick={() => navigate('/')}
                    className="p-2 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg active:bg-slate-100 dark:active:bg-slate-800 transition-colors"
                >
                    <ArrowLeft size={18} className="md:w-5 md:h-5" />
                </button>
                <h1 className="flex-1 text-base md:text-lg font-bold text-slate-800 dark:text-white">
                    Configurar Simulação
                </h1>
            </div>

            <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 pb-32 max-w-4xl mx-auto w-full">
                {profile && (
                    <div className="mb-5 md:mb-6 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-4 md:p-5 shadow-sm space-y-2">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Perfil ativo</p>
                                <p className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">{profile.name}</p>
                            </div>
                            <span
                                className={`inline-flex items-center rounded-2xl px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white bg-gradient-to-r ${profile.accent}`}
                            >
                                {profile.name[0]}
                            </span>
                        </div>
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-300">{profile.description}</p>
                        {profile.targets.length > 0 && (
                            <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide">
                                {profile.targets.map((target) => (
                                    <span
                                        key={`profile-target-${target}`}
                                        className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-200"
                                    >
                                        {target}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                )}
                {/* Step 1: Select Exam */}
                <div className="mb-6 md:mb-8">
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                            1
                        </div>
                        <h2 className="text-base md:text-lg font-bold text-slate-800 dark:text-white">
                            Escolha o Concurso
                        </h2>
                    </div>
                    <div className="grid gap-2 md:gap-3">
                        {availableExams.map(exam => (
                            <button
                                key={exam.id}
                                onClick={() => handleExamChange(exam.id)}
                                className={clsx(
                                    "p-3 md:p-4 rounded-xl border-2 text-left transition-all active:scale-[0.98]",
                                    selectedExam === exam.id
                                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-sm"
                                        : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900"
                                )}
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-sm md:text-base text-slate-800 dark:text-white mb-1">
                                            {exam.name}
                                        </h3>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                            Banca: {exam.bancas}
                                        </p>
                                    </div>
                                    {selectedExam === exam.id && (
                                        <CheckCircle2 size={18} className="md:w-5 md:h-5 text-blue-500 flex-shrink-0" />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Step 2: Select Position */}
                {selectedExam && positions.length > 0 && (
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                                2
                            </div>
                            <h2 className="text-lg font-bold text-slate-800 dark:text-white">
                                Escolha o Cargo
                            </h2>
                        </div>
                        <div className="grid gap-3">
                            {positions.map(position => (
                                <button
                                    key={position.id}
                                    onClick={() => handlePositionChange(position.id)}
                                    className={clsx(
                                        "p-4 rounded-xl border-2 text-left transition-all",
                                        selectedPosition === position.id
                                            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-sm"
                                            : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900"
                                    )}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold text-slate-800 dark:text-white">
                                            {position.label}
                                        </h3>
                                        {selectedPosition === position.id && (
                                            <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 ml-2" />
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 3: Select Subjects and Topics */}
                {selectedPosition && subjects.length > 0 && (
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                                3
                            </div>
                            <h2 className="text-lg font-bold text-slate-800 dark:text-white">
                                Escolha as Matérias e Conteúdos
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {subjects.map((subject, idx) => {
                                const isSelected = selectedSubjects.includes(subject.label);
                                const subjectTopics = selectedTopics[subject.label] || [];
                                const allTopicsSelected = subject.topics && subjectTopics.length === subject.topics.length;

                                return (
                                    <div
                                        key={idx}
                                        className={clsx(
                                            "rounded-xl border-2 overflow-hidden transition-all",
                                            isSelected
                                                ? "border-blue-500 bg-blue-50/50 dark:bg-blue-950/20"
                                                : "border-slate-200 dark:border-slate-700"
                                        )}
                                    >
                                        {/* Subject Header */}
                                        <button
                                            onClick={() => handleSubjectToggle(subject.label)}
                                            className="w-full p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={clsx(
                                                    "w-5 h-5 rounded border-2 flex items-center justify-center transition-all",
                                                    isSelected
                                                        ? "bg-blue-500 border-blue-500"
                                                        : "border-slate-300 dark:border-slate-600"
                                                )}>
                                                    {isSelected && (
                                                        <CheckCircle2 size={14} className="text-white" />
                                                    )}
                                                </div>
                                                <div className="text-left">
                                                    <h3 className="font-bold text-slate-800 dark:text-white">
                                                        {subject.label}
                                                    </h3>
                                                    {subject.category && (
                                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                                            {subject.category}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <BookOpen size={18} className="text-slate-400" />
                                        </button>

                                        {/* Topics (if subject is selected) */}
                                        {isSelected && subject.topics && subject.topics.length > 0 && (
                                            <div className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-4">
                                                <div className="flex items-center justify-between mb-3">
                                                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                                        Conteúdos ({subjectTopics.length}/{subject.topics.length})
                                                    </p>
                                                    <button
                                                        onClick={() => handleSelectAllTopics(subject.label, subject.topics)}
                                                        className="text-xs font-semibold text-blue-500 hover:text-blue-600"
                                                    >
                                                        {allTopicsSelected ? 'Desmarcar todos' : 'Selecionar todos'}
                                                    </button>
                                                </div>
                                                <div className="space-y-2">
                                                    {subject.topics.map((topic, topicIdx) => {
                                                        const isTopicSelected = subjectTopics.includes(topic);
                                                        return (
                                                            <button
                                                                key={topicIdx}
                                                                onClick={() => handleTopicToggle(subject.label, topic)}
                                                                className={clsx(
                                                                    "w-full p-3 rounded-lg border text-left text-sm transition-all flex items-start gap-2",
                                                                    isTopicSelected
                                                                        ? "border-blue-300 bg-blue-50 dark:bg-blue-900/10 text-blue-900 dark:text-blue-200"
                                                                        : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
                                                                )}
                                                            >
                                                                <div className={clsx(
                                                                    "w-4 h-4 mt-0.5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all",
                                                                    isTopicSelected
                                                                        ? "bg-blue-500 border-blue-500"
                                                                        : "border-slate-300 dark:border-slate-600"
                                                                )}>
                                                                    {isTopicSelected && (
                                                                        <CheckCircle2 size={10} className="text-white" />
                                                                    )}
                                                                </div>
                                                                <span className="flex-1">{topic}</span>
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Summary */}
                {selectedSubjects.length > 0 && (
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-100 dark:border-blue-900 rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <Target size={18} className="text-blue-600 dark:text-blue-400" />
                            <h3 className="font-bold text-slate-800 dark:text-white">
                                Resumo da Simulação
                            </h3>
                        </div>
                        <div className="space-y-2 text-sm">
                            <p className="text-slate-600 dark:text-slate-300">
                                <span className="font-semibold">Concurso:</span> {examData?.name}
                            </p>
                            <p className="text-slate-600 dark:text-slate-300">
                                <span className="font-semibold">Cargo:</span> {positionData?.label}
                            </p>
                            <p className="text-slate-600 dark:text-slate-300">
                                <span className="font-semibold">Matérias:</span> {selectedSubjects.length}
                            </p>
                            <p className="text-slate-600 dark:text-slate-300">
                                <span className="font-semibold">Conteúdos selecionados:</span>{' '}
                                {Object.values(selectedTopics).flat().length || 'Todos'}
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Fixed Footer */}
            <div className="fixed bottom-0 left-0 right-0 p-3 sm:p-4 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 z-20 safe-bottom">
                <div className="max-w-4xl mx-auto">
                    <Button
                        onClick={handleStartSimulation}
                        disabled={!canStart}
                        className="w-full"
                        size="lg"
                    >
                        <Play size={18} className="md:w-5 md:h-5 mr-2" />
                        Iniciar Simulação
                    </Button>
                    {!canStart && selectedSubjects.length === 0 && selectedPosition && (
                        <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-2">
                            Selecione pelo menos uma matéria para continuar
                        </p>
                    )}
                </div>
            </div>
        </Layout>
    );
}
