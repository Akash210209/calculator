// src/components/Statistics.js
import React, { useState } from 'react';

const Statistics = () => {
    const [numbers, setNumbers] = useState('');
    const [mean, setMean] = useState(null);
    const [stdDev, setStdDev] = useState(null);

    const calculateStatistics = () => {
        const numArray = numbers.split(',').map(Number);
        const avg = numArray.reduce((a, b) => a + b, 0) / numArray.length;
        const variance = numArray.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / numArray.length;
        const stdDevValue = Math.sqrt(variance);
        setMean(avg);
        setStdDev(stdDevValue);
    };

    return (
        <div className="statistics">
            <h3>Statistics</h3>
            <input type="text" value={numbers} onChange={(e) => setNumbers(e.target.value)} placeholder="Enter numbers (comma separated)" />
            <button onClick={calculateStatistics}>Calculate</button>
            {mean !== null && <p>Mean: {mean}</p>}
            {stdDev !== null && <p>Standard Deviation: {stdDev}</p>}
        </div>
    );
};

export default Statistics;
