// src/components/UnitConverter.js
import React, { useState } from 'react';

const UnitConverter = () => {
    const [value, setValue] = useState('');
    const [unitFrom, setUnitFrom] = useState('meters');
    const [unitTo, setUnitTo] = useState('feet');
    const [result, setResult] = useState(null);

    const units = {
        meters: 1,
        feet: 3.281,
        kilometers: 0.001,
        miles: 0.000621371,
        grams: 1000,
        pounds: 2.20462,
        celsius: (val) => val * (9/5) + 32,
        fahrenheit: (val) => (val - 32) * (5/9),
    };

    const convertUnits = () => {
        const from = units[unitFrom];
        const to = units[unitTo];
        if (typeof from === 'function') {
            setResult(from(value));
        } else {
            setResult((value / from) * to);
        }
    };

    return (
        <div className="unit-converter">
            <h3>Unit Converter</h3>
            <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Value" />
            <select onChange={(e) => setUnitFrom(e.target.value)}>
                {Object.keys(units).map((unit) => (
                    <option key={unit} value={unit}>{unit}</option>
                ))}
            </select>
            <span>to</span>
            <select onChange={(e) => setUnitTo(e.target.value)}>
                {Object.keys(units).map((unit) => (
                    <option key={unit} value={unit}>{unit}</option>
                ))}
            </select>
            <button onClick={convertUnits}>Convert</button>
            {result !== null && <p>Result: {result}</p>}
        </div>
    );
};

export default UnitConverter;
