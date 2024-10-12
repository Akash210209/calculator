// src/components/History.js
import React from 'react';

const History = ({ history }) => {
    const exportHistory = () => {
        const blob = new Blob([history.join('\n')], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'history.txt';
        a.click();
    };

    return (
        <div className="history">
            <h3>History</h3>
            <ul>
                {history.map((entry, index) => (
                    <li key={index}>{entry}</li>
                ))}
            </ul>
            <button onClick={exportHistory}>Export History</button>
        </div>
    );
};

export default History;
