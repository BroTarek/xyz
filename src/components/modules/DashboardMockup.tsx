"use client";

import React from "react";

export const DashboardMockup = () => {
    return (
        <div className="relative w-full h-full bg-slate-50 dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col shadow-2xl">
            {/* Top Bar */}
            <div className="h-10 border-b border-slate-200 dark:border-slate-800 flex items-center px-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto w-32 h-4 bg-slate-200 dark:bg-slate-800 rounded-full" />
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-16 border-r border-slate-200 dark:border-slate-800 p-3 flex flex-col gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-full aspect-square bg-slate-200 dark:bg-slate-800 rounded-lg" />
                    ))}
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
                    <div className="flex gap-4">
                        <div className="flex-1 h-32 glass border border-white/20 rounded-xl p-4 flex flex-col justify-between">
                            <div className="w-1/2 h-4 bg-primary/20 rounded" />
                            <div className="w-3/4 h-8 bg-primary/40 rounded" />
                        </div>
                        <div className="flex-1 h-32 glass border border-white/20 rounded-xl p-4 flex flex-col justify-between">
                            <div className="w-1/2 h-4 bg-blue-500/20 rounded" />
                            <div className="w-3/4 h-8 bg-blue-500/40 rounded" />
                        </div>
                    </div>

                    <div className="flex-1 glass border border-white/20 rounded-xl p-6 flex flex-col gap-4">
                        <div className="w-1/4 h-6 bg-slate-200 dark:bg-slate-800 rounded" />
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800" />
                                <div className="flex-1 flex flex-col gap-2">
                                    <div className="w-1/3 h-3 bg-slate-200 dark:bg-slate-800 rounded" />
                                    <div className="w-1/4 h-2 bg-slate-100 dark:bg-slate-800 rounded" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-primary to-blue-500 opacity-20 blur-2xl -z-10" />
        </div>
    );
};
