import React from 'react';
import { motion } from 'framer-motion';
import TrackCard from './TrackCard';

const Dashboard = ({ yearData, monthId, onUpdateItem }) => {
    const currentMonth = yearData[monthId];

    if (!currentMonth) return <div className="p-10">Month not found</div>;

    return (
        <div className="max-w-md mx-auto min-h-screen bg-neutral-50 p-6 font-sans text-neutral-900 pb-20">

            {/* Header */}
            <header className="mb-10 pt-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-baseline justify-between mb-2">
                        <h1 className="text-5xl font-serif font-black tracking-tighter text-neutral-900">
                            {currentMonth.monthName}
                        </h1>
                        <span className="text-sm font-mono text-neutral-400">2026</span>
                    </div>
                    <div className="h-px w-full bg-neutral-200 mb-4" />
                    <h2 className="text-lg font-medium text-neutral-600 uppercase tracking-widest leading-relaxed">
                        {currentMonth.theme}
                    </h2>
                </motion.div>
            </header>

            {/* Review Section (if available) */}
            {currentMonth.review && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-10 bg-white p-8 rounded-3xl border border-stone-200 shadow-sm relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-200 via-emerald-200 to-cyan-200" />
                    <h3 className="font-serif text-2xl font-bold mb-4 text-stone-900">Monthly Review</h3>
                    <p className="font-serif italic text-lg text-stone-700 mb-6 leading-relaxed">
                        "{currentMonth.review.summary}"
                    </p>
                    <div className="space-y-4 text-sm text-stone-600 leading-relaxed font-sans">
                        <p>{currentMonth.review.text}</p>
                        <div className="bg-stone-50 p-4 rounded-xl border border-stone-100">
                            <span className="font-bold text-xs uppercase tracking-widest text-stone-400 block mb-2">Advice for Next Month</span>
                            <p className="font-medium text-stone-800">{currentMonth.review.advice}</p>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                {Object.values(currentMonth.tracks).map((track, index) => (
                    <TrackCard
                        key={track.id}
                        track={track}
                        onUpdateItem={(trackId, itemId, updates) => onUpdateItem(monthId, trackId, itemId, updates)}
                    />
                ))}
            </div>

            {/* Footer Quote or Progress */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-16 text-center"
            >
                <p className="text-xs text-neutral-400 font-serif italic">
                    "Focus on the process, not the outcome."
                </p>
            </motion.footer>

        </div>
    );
};

export default Dashboard;
