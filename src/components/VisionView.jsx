import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { annualGoals } from '../data/goals';
import clsx from 'clsx';

const VisionView = ({ yearData, currentMonthId }) => {
    // Logic for "Daily Advisor"
    const recommendation = useMemo(() => {
        const currentMonth = yearData[currentMonthId];
        if (!currentMonth) return "Focus on the present.";

        // Find all incomplete items
        const incompleteItems = [];
        Object.values(currentMonth.tracks).forEach(track => {
            track.items.forEach(item => {
                const isDone = item.type === 'check' ? item.completed : item.current >= item.target;
                if (!isDone) {
                    incompleteItems.push({ track: track.title, text: item.text, trackId: track.id });
                }
            });
        });

        if (incompleteItems.length === 0) {
            return {
                title: "All Caught Up!",
                text: "You've crushed this month. Maybe take a rest or plan ahead?",
                trackId: null
            };
        }

        // Pick random item
        const randomItem = incompleteItems[Math.floor(Math.random() * incompleteItems.length)];
        return {
            title: `Focus on ${randomItem.track}`,
            text: randomItem.text,
            trackId: randomItem.trackId
        };
    }, [yearData, currentMonthId]);

    return (
        <div className="max-w-md mx-auto min-h-screen bg-stone-50 p-6 pb-24 font-sans text-stone-900">

            {/* Header / Advisor */}
            <header className="pt-8 mb-12">
                <h1 className="text-xs font-bold uppercase tracking-widest opacity-40 mb-4">Daily Guidance</h1>
                <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                    <h2 className="font-serif text-2xl font-bold mb-2 text-stone-800">
                        {recommendation.title}
                    </h2>
                    <p className="text-stone-600 leading-relaxed">
                        "{recommendation.text}"
                    </p>
                </div>
            </header>

            {/* Annual Visions */}
            <section className="space-y-12">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-stone-300 flex-1" />
                    <span className="text-xs font-serif italic text-stone-400">2026 Vision</span>
                    <div className="h-px bg-stone-300 flex-1" />
                </div>

                {Object.values(annualGoals).map(goal => (
                    <motion.div
                        key={goal.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center px-4"
                    >
                        <div className={clsx("inline-block w-12 h-1 mb-6 rounded-full", goal.color.replace('bg-', 'bg-').replace('text-', 'bg-').split(' ')[0])} />
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-3 opacity-60">{goal.subtitle}</h3>
                        <h2 className="font-serif text-3xl font-bold mb-4">{goal.title}</h2>
                        <p className="text-stone-600 leading-relaxed font-serif text-lg italic">
                            {goal.description}
                        </p>
                    </motion.div>
                ))}
            </section>

            {/* Footer */}
            <div className="mt-20 text-center opacity-30 text-xs">
                System 2026
            </div>
        </div>
    );
};

export default VisionView;
