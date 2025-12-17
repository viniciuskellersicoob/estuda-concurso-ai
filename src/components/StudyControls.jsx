import React from 'react';
import { Button } from './Button';

export function StudyControls({
    onNext,
    onPrevious,
    onSubmit,
    showSubmit = false,
    hasNext = true,
    hasPrevious = false,
    loading = false
}) {
    return (
        <div className="fixed bottom-0 left-0 right-0 px-4 py-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 shadow-lg flex items-center justify-between z-20">
            <div className="flex-1 mr-2">
                {hasPrevious && (
                    <Button
                        variant="ghost"
                        onClick={onPrevious}
                        disabled={loading}
                        className="w-full"
                    >
                        Anterior
                    </Button>
                )}
            </div>

            <div className="flex-[2]">
                {showSubmit ? (
                    <Button
                        variant="primary"
                        fullWidth
                        onClick={onSubmit}
                        disabled={loading}
                        className="bg-green-600 hover:bg-green-700 shadow-green-600/20"
                    >
                        Responder
                    </Button>
                ) : (
                    hasNext && (
                        <Button
                            variant="primary"
                            fullWidth
                            onClick={onNext}
                            disabled={loading}
                        >
                            Proxima
                        </Button>
                    )
                )}
            </div>
        </div>
    );
}
