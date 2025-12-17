import React from 'react';
import { BookOpen, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Header({ title = "EstudaConcurso AI" }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-950 sticky top-0 z-10 transition-colors">
            <div className="flex items-center gap-2">
                <div className="bg-blue-600 p-2 rounded-lg text-white">
                    <BookOpen size={20} />
                </div>
                <h1 className="text-lg font-bold text-slate-800 dark:text-white tracking-tight">{title}</h1>
            </div>

            <button
                onClick={toggleTheme}
                className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg transition-colors"
                aria-label="Alternar tema"
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        </header>
    );
}
