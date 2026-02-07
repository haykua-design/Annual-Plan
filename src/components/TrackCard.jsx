import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus, Minus, ChevronRight } from 'lucide-react';
import clsx from 'clsx'; // Simple conditional class utility if not installed, can use template literals. Assuming installed per command.

const TrackCard = ({ track, onUpdateItem }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Calculate progress
    const totalItems = track.items.length;
    const completedItems = track.items.filter(item => {
        if (item.type === 'check') return item.completed;
        if (item.type === 'counter') return item.current >= item.target;
        return false;
    }).length;

    const progressPercent = Math.round((completedItems / totalItems) * 100);

    return (
        <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={() => !isExpanded && setIsExpanded(true)}
            className={clsx(
                "relative rounded-3xl p-6 cursor-pointer overflow-hidden group select-none transition-all duration-300",
                "bg-white border border-neutral-200",
                isExpanded ? "col-span-1 row-span-2 shadow-2xl z-20 scale-[1.02]" : "hover:shadow-lg hover:-translate-y-1"
            )}
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] font-serif text-9xl leading-none select-none pointer-events-none text-black">
                {track.id}
            </div>

            {/* Header */}
            <motion.div layout="position" className="relative z-10 flex justify-between items-start mb-4">
                <div>
                    <span className={clsx("inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2", track.color)}>
                        {track.subtitle}
                    </span>
                    <h2 className="font-serif text-3xl font-bold leading-tight text-neutral-900">{track.title}</h2>
                </div>

                {/* Progress Ring (Mini) */}
                <div className="flex flex-col items-end">
                    <span className="text-3xl font-serif font-bold">{progressPercent}%</span>
                </div>
            </motion.div>

            {/* Expanded Content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mt-6 space-y-4"
                    >
                        {track.items.map(item => (
                            <div key={item.id} className="bg-neutral-50 rounded-xl p-3 flex items-center justify-between border border-neutral-100">

                                {/* Item Text */}
                                <span className={clsx("text-sm font-medium flex-1 mr-4", item.completed && "line-through opacity-50")}>
                                    {item.text}
                                </span>

                                {/* Controls */}
                                {item.type === 'check' ? (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onUpdateItem(track.id, item.id, { completed: !item.completed });
                                        }}
                                        className={clsx(
                                            "w-8 h-8 rounded-full flex items-center justify-center transition-colors border-2",
                                            item.completed
                                                ? "bg-black border-black text-white"
                                                : "bg-transparent border-gray-300 hover:border-black"
                                        )}
                                    >
                                        {item.completed && <Check size={16} />}
                                    </button>
                                ) : (
                                    <div className="flex items-center gap-2 bg-white rounded-full p-1 border border-gray-200" onClick={e => e.stopPropagation()}>
                                        <button
                                            onClick={() => onUpdateItem(track.id, item.id, { current: Math.max(0, item.current - 1) })}
                                            className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                                        >
                                            <Minus size={12} />
                                        </button>
                                        <span className="font-mono text-sm w-8 text-center">{item.current}/{item.target}</span>
                                        <button
                                            onClick={() => onUpdateItem(track.id, item.id, { current: item.current + 1 })}
                                            className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800"
                                        >
                                            <Plus size={12} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Close Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsExpanded(false);
                            }}
                            className="w-full py-3 mt-4 text-xs font-bold uppercase tracking-widest text-center opacity-40 hover:opacity-100 transition-opacity"
                        >
                            Close
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Collapsed Hint */}
            {!isExpanded && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute bottom-6 right-6 opacity-30 group-hover:opacity-100 transition-opacity"
                >
                    <ChevronRight />
                </motion.div>
            )}
        </motion.div>
    );
};

export default TrackCard;
