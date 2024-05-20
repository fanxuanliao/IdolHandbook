import React from 'react';
import Calendar from '../components/Calendar';
import DiaryEntry from '../components/DiaryEntry';

const App: React.FC = () => {
  const handleSelectDate = (date: Date) => {
    console.log("Selected date:", date);
  };

  const handleSaveEntry = (entry: string) => {
    console.log(entry);
  };

  return (
    <div className="flex w-full h-screen">
      <div className="flex-1 p-5">
        <Calendar onSelectDate={handleSelectDate} />
      </div>
      <div className="w-1/2 p-5">
        <DiaryEntry onSave={handleSaveEntry} />
      </div>
    </div>
  );
};

export default App;
