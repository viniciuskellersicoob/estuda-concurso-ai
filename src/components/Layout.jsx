import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Layout({ children, className }) {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-200">
            <div
                className={twMerge(
                    "w-full min-h-screen bg-white dark:bg-slate-950 flex flex-col transition-colors duration-200",
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}
