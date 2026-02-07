import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import NavigationBar from './components/NavigationBar';
import VisionView from './components/VisionView';
import YearView from './components/YearView';
import { yearData as initialData } from './data/goals.js';

function App() {
  const [data, setData] = useState(initialData);
  const [currentView, setCurrentView] = useState('today'); // 'vision', 'today', 'year'
  const [activeMonthId, setActiveMonthId] = useState('2026-02');

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('2026-goals-v1');
    if (saved) {
      // Merge saved data with initial structure to ensure new fields (like annual goals if added to data) work
      // For now simple load is enough
      setData(JSON.parse(saved));
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('2026-goals-v1', JSON.stringify(data));
  }, [data]);

  const handleUpdateItem = (monthId, trackId, itemId, updates) => {
    setData(prev => {
      const newData = { ...prev };
      const track = newData[monthId].tracks[trackId];
      const itemIndex = track.items.findIndex(i => i.id === itemId);

      if (itemIndex > -1) {
        track.items[itemIndex] = { ...track.items[itemIndex], ...updates };
      }
      return newData;
    });
  };

  const handleViewChange = (view) => {
    if (view === 'today') {
      setActiveMonthId('2026-02'); // Always reset to current real month
    }
    setCurrentView(view);
  };

  const handleMonthSelect = (monthId) => {
    setActiveMonthId(monthId);
    setCurrentView('today');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-orange-100 flex flex-col">

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto w-full">
        {currentView === 'today' && (
          <Dashboard
            yearData={data}
            monthId={activeMonthId}
            onUpdateItem={handleUpdateItem}
          />
        )}
        {currentView === 'vision' && (
          <VisionView
            yearData={data}
            currentMonthId={activeMonthId}
          />
        )}
        {currentView === 'year' && (
          <YearView
            currentMonthId={activeMonthId}
            onSelectMonth={handleMonthSelect}
          />
        )}
      </main>

      {/* Navigation */}
      <NavigationBar currentView={currentView} onViewChange={handleViewChange} />

    </div>
  );
}

export default App;
