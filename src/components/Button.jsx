import React from 'react';
import { twMerge } from 'tailwind-merge';

export function Button({
    children,
    variant = 'primary',
    fullWidth = false,
    className,
    ...props
}) {
    const baseStyles = "h-14 px-6 rounded-xl font-semibold text-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 active:bg-blue-800",
        secondary: "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 active:bg-emerald-700",
        outline: "border-2 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50",
        ghost: "text-slate-500 hover:text-slate-700 hover:bg-slate-50",
        danger: "bg-red-50 text-red-600 hover:bg-red-100"
    };

    return (
        <button
            className={twMerge(
                baseStyles,
                variants[variant],
                fullWidth && "w-full",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
