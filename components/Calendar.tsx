import React, { useState } from 'react';

type CalendarProps = {
    onSelectDate: (date: Date) => void;
};

const Calendar: React.FC<CalendarProps> = ({ onSelectDate }) => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    const getDaysInMonth = (month: number, year: number): Date[] => {
        const days: Date[] = [];
        const date = new Date(year, month, 1);
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    };

    const days = getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear());
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDay();
    const paddingDaysBefore = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    const paddingDaysAfter = lastDayOfMonth === 0 ? 0 : 7 - lastDayOfMonth;

    return (
        <div className="p-5 border border-gray-300 rounded max-w-lg mx-auto">
            <div className="flex justify-between items-center mb-5">
                <span className="font-bold flex-grow text-center">
                    {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
                </span>
                <div className="flex gap-2">
                    <button className="bg-gray-300 p-2 rounded" onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}>
                        {'<'}
                    </button>
                    <button className="bg-gray-300 p-2 rounded" onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}>
                        {'>'}
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-2 mb-2">
                {weekdays.map((weekday, index) => (
                    <div className="p-2 text-center" key={index}>{weekday}</div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
                {[...Array(paddingDaysBefore)].map((_, index) => (
                    <div key={index} className="p-2"></div>
                ))}
                {days.map((day, index) => (
                    <div className="p-2 text-center border border-gray-200 rounded" key={index}>
                        {day.getDate()}
                    </div>
                ))}
                {[...Array(paddingDaysAfter)].map((_, index) => (
                    <div key={index} className="p-2"></div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
