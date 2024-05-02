import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

type CalendarProps = {
    onSelectDate: (date: Date) => void;
};

const Calendar: React.FC<CalendarProps> = () => {
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
    const paddingDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Set padding days for the first week

    return (
        <div className="calendar-container">
            <div className="controls">
                <button className="month-switch" onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}>
                    {'<'}
                </button>
                <span className="month-label">{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</span>
                <button className="month-switch" onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}>
                    {'>'}
                </button>
            </div>
            <div className="weekdays grid grid-cols-7 gap-4">
                {weekdays.map((weekday, index) => (
                    <div className="weekday" key={index}>{`${weekday}`}</div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-4">
                {[...Array(paddingDays)].map((_, index) => (
                    <div key={index} className="day padding"></div>
                ))}
                {days.map((day, index) => (
                    <div className="day" key={index}>
                        {day.getDate()}
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Calendar;
