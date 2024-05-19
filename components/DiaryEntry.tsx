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
        <div className="flex flex-col h-full w-full p-5">
            <textarea
                className="flex-grow w-full p-2 border border-gray-300 rounded resize-none outline-none placeholder-gray-400"
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder="寫下今天的心情..."
            ></textarea>
            <button className="mt-3 p-2 bg-green-500 text-white rounded" onClick={handleSave}>儲存</button>
        </div>
    );
};

export default DiaryEntry;
