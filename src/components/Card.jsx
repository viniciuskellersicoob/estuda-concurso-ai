import React from 'react';
import { twMerge } from 'tailwind-merge';

export function Card({ title, description, icon: Icon, onClick, className }) {
    return (
        <div
            onClick={onClick}
            className={twMerge(
                "bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all active:scale-[0.98] cursor-pointer hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md",
                className
            )}
        >
            <div className="flex items-start justify-between mb-4">
                {Icon && (
                    <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-xl">
                        <Icon size={24} />
                    </div>
                )}
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">{title}</h3>
            {description && <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{description}</p>}
        </div>
    );
}
