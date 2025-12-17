import React, { createContext, useContext, useState, useEffect } from 'react';

const GamificationContext = createContext();

export function GamificationProvider({ children }) {
    const [xp, setXp] = useState(() => parseInt(localStorage.getItem('user_xp') || '0'));
    const [level, setLevel] = useState(() => parseInt(localStorage.getItem('user_level') || '1'));
    const [streak, setStreak] = useState(() => parseInt(localStorage.getItem('user_streak') || '0'));
    const [lastStudyDate, setLastStudyDate] = useState(() => localStorage.getItem('last_study_date') || '');

    useEffect(() => {
        localStorage.setItem('user_xp', xp.toString());
        localStorage.setItem('user_level', level.toString());
        localStorage.setItem('user_streak', streak.toString());
        localStorage.setItem('last_study_date', lastStudyDate);
    }, [xp, level, streak, lastStudyDate]);

    const calculateLevel = (currentXp) => {
        // Simple formula: Level = sqrt(XP / 100) + 1
        return Math.floor(Math.sqrt(currentXp / 100)) + 1;
    };

    const addXp = (amount) => {
        const newXp = xp + amount;
        setXp(newXp);

        const newLevel = calculateLevel(newXp);
        if (newLevel > level) {
            setLevel(newLevel);
            // In a real app, we'd trigger a modal here
        }

        updateStreak();
    };

    const updateStreak = () => {
        const today = new Date().toISOString().split('T')[0];

        if (lastStudyDate === today) return;

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        if (lastStudyDate === yesterdayStr) {
            setStreak(prev => prev + 1);
        } else {
            setStreak(1);
        }

        setLastStudyDate(today);
    };

    return (
        <GamificationContext.Provider value={{ xp, level, streak, addXp }}>
            {children}
        </GamificationContext.Provider>
    );
}

export function useGamification() {
    return useContext(GamificationContext);
}
