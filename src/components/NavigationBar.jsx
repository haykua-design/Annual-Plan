import React from 'react';
import { Compass, LayoutDashboard, Calendar } from 'lucide-react';
import clsx from 'clsx';

const NavItem = ({ icon: Icon, label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={clsx(
            "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-200",
            isActive ? "text-black" : "text-neutral-400 hover:text-neutral-600"
        )}
    >
        <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
        <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
    </button>
);

const NavigationBar = ({ currentView, onViewChange }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-neutral-200 flex justify-around items-center px-6 pb-4 z-50 max-w-md mx-auto">
            <NavItem
                icon={Compass}
                label="Vision"
                isActive={currentView === 'vision'}
                onClick={() => onViewChange('vision')}
            />
            <NavItem
                icon={LayoutDashboard}
                label="Today"
                isActive={currentView === 'today'}
                onClick={() => onViewChange('today')}
            />
            <NavItem
                icon={Calendar}
                label="Year"
                isActive={currentView === 'year'}
                onClick={() => onViewChange('year')}
            />
        </div>
    );
};

export default NavigationBar;
