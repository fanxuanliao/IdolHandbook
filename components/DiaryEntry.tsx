import React, { useState } from 'react';

type DiaryEntryProps = {
    onSave: (entry: string) => void;
};

const DiaryEntry: React.FC<DiaryEntryProps> = ({ onSave }) => {
    const [entry, setEntry] = useState('');

    const handleSave = async () => {
        const response = await fetch('/api/diary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: entry }),
        });

        if (response.ok) {
            onSave(entry);
        } else {
            console.error('Failed to save entry');
        }
    };

    return (
        <div className="flex flex-col h-full w-full p-5 bg-gray-50 bg-grid-pattern bg-20px rounded">
            <textarea
                className="flex-grow w-full p-2 rounded resize-none outline-none placeholder-gray-400 bg-transparent"
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder="寫下今天的心情..."
            ></textarea>
            <button className="mt-3 p-2 bg-gray-400 text-white rounded" onClick={handleSave}>儲存</button>
        </div>
    );
};

export default DiaryEntry;
