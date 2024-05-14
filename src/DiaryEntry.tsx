
import React, { useState } from 'react';
import './DiaryEntry.scss';


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
        <div className="diary-container">
            <textarea
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder="寫下今天的心情..."
            ></textarea>
            <div>
                <button onClick={handleSave}>儲存</button>
            </div>
        </div>
    );
};

export default DiaryEntry;