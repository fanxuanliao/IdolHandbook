import React from 'react';
import './App.css';
import Calendar from './Calendar';
import DiaryEntry from './DiaryEntry';

const App: React.FC = () => {

  return (
    <div className="app-container">
      <Calendar onSelectDate={handleSelectDate} />
      <DiaryEntry onSave={handleSaveEntry} />
    </div>
  );
};

// Handle select date
const handleSelectDate = (date: Date) => {
  console.log("Selected date:", date);
};

const handleSaveEntry = (entry: String) => {
  console.log(entry);
};
export default App;