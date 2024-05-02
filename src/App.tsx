import React from 'react';
import './App.css';
import Calendar from './Calendar';

const App: React.FC = () => {

  return (
    <div className="app-container">
      <Calendar onSelectDate={handleSelectDate} />
      <div className="diary-container">
        {/* 這裡放置你的日記編輯元件或內容 */}
      </div>
    </div>
  );
};

// Handle select date
const handleSelectDate = (date: Date) => {
  console.log("Selected date:", date);
};

export default App;
