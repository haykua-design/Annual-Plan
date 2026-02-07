import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { yearData } from '../data/goals';

const YearView = ({ currentMonthId, onSelectMonth }) => {
    const months = [
        "2026-01", "2026-02", "2026-03", "2026-04",
        "2026-05", "2026-06", "2026-07", "2026-08",
        "2026-09", "2026-10", "2026-11", "2026-12"
    ];

    return (
        <div className="max-w-md mx-auto min-h-screen bg-stone-50 p-6 pb-24 font-sans text-stone-900">

            <header className="pt-8 mb-8">
                <h1 className="text-4xl font-serif font-black tracking-tighter mb-2">2026</h1>
                <p className="text-stone-500 text-sm uppercase tracking-widest">Year Overview</p>
            </header>

            <div className="grid grid-cols-2 gap-4">
                {months.map((mId, index) => {
                    const monthData = yearData[mId];
                    const isCurrent = mId === currentMonthId;
                    const isPast = mId < currentMonthId;
                    const isFuture = mId > currentMonthId;

                    return (
                        <motion.div
                            key={mId}
                            whileHover={{ y: -2 }}
                            onClick={() => onSelectMonth(mId)}
                            className={clsx(
                                "p-4 rounded-2xl border transition-colors flex flex-col justify-between h-32 relative overflow-hidden",
                                isCurrent ? "bg-stone-900 text-white border-stone-900 shadow-lg" : "bg-white border-stone-200",
                                !isCurrent && "hover:border-stone-400 cursor-pointer",
                                isFuture && "bg-stone-50 opacity-80", // Future style: slightly diff bg
                                isPast && "text-stone-400"
                            )}
                        >
                            <div className="flex justify-between items-start z-10 relative">
                                <span className={clsx("text-xs font-bold uppercase tracking-widest", isCurrent ? "text-stone-400" : "text-stone-400")}>
                                    {monthData ? monthData.monthName.substring(0, 3) : "N/A"}
                                </span>
                                {isPast && <span className="text-stone-300">✓</span>}
                            </div>

                            <div className="z-10 relative">
                                <h3 className={clsx("font-serif font-bold text-lg leading-tight", isCurrent ? "text-white" : "text-stone-800")}>
                                    {monthData ? monthData.shortTheme || monthData.theme : "TBD"}
                                </h3>
                            </div>

                            {/* Decorative Number */}
                            <div className={clsx(
                                "absolute -bottom-4 -right-2 text-6xl font-serif font-bold opacity-[0.05] pointer-events-none",
                                isCurrent ? "text-white" : "text-black"
                            )}>
                                {index + 1}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

        </div>
    );
};

export default YearView;
