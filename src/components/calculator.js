// src/components/Calculator.js
import React, { useState } from 'react';
import { create, all } from 'mathjs';
import Graph from './graph';
import History from './history';
import UnitConverter from './unitconverter';
import Statistics from './statistics';
import QuadraticSolver from './QuadraticSolver';

const math = create(all);

const Calculator = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const [memory, setMemory] = useState(0);
    const [showGraph, setShowGraph] = useState(false);
    const [equation, setEquation] = useState('');

    const handleClick = (value) => {
        setInput(input + value);
    };

    const calculateResult = () => {
        try {
            const result = math.evaluate(input);
            setHistory([...history, `${input} = ${result}`]);
            setInput(result.toString());
            setEquation(input);
        } catch (error) {
            setInput('Error');
        }
    };

    const clearInput = () => {
        setInput('');
    };

    const memoryStore = () => {
        setMemory(parseFloat(input));
    };

    const memoryRecall = () => {
        setInput(input + memory);
    };

    const memoryClear = () => {
        setMemory(0);
    };

    // Define the memory subtract function
    const memorySubtract = () => {
        setMemory(memory - parseFloat(input));
    };

    return (
        <div className="calculator-container">
            <div className="calculator">
                <input type="text" value={input} readOnly />
                <div className="buttons">
                    {/* Existing buttons */}
                    {/* Add your existing buttons here */}
                    <button onClick={() => handleClick('1')}>1</button>
                    <button onClick={() => handleClick('2')}>2</button>
                    <button onClick={() => handleClick('3')}>3</button>
                    <button onClick={() => handleClick('+')}>+</button>
                    <button onClick={() => handleClick('4')}>4</button>
                    <button onClick={() => handleClick('5')}>5</button>
                    <button onClick={() => handleClick('6')}>6</button>
                    <button onClick={() => handleClick('-')}>-</button>
                    <button onClick={() => handleClick('7')}>7</button>
                    <button onClick={() => handleClick('8')}>8</button>
                    <button onClick={() => handleClick('9')}>9</button>
                    <button onClick={() => handleClick('*')}>*</button>
                    <button onClick={() => handleClick('0')}>0</button>
                    <button onClick={() => handleClick('/')}>/</button>
                    <button onClick={() => handleClick('%')}>%</button>
                    <button onClick={clearInput}>C</button>
                    <button onClick={calculateResult}>=</button>
                    {/* Scientific Functions */}
                    <button onClick={() => handleClick('sin(')}>sin</button>
                    <button onClick={() => handleClick('cos(')}>cos</button>
                    <button onClick={() => handleClick('tan(')}>tan</button>
                    <button onClick={() => handleClick('log(')}>log</button>
                    <button onClick={() => handleClick('ln(')}>ln</button>
                    <button onClick={() => handleClick('exp(')}>exp</button>
                    <button onClick={() => handleClick('sqrt(')}>√</button>
                    <button onClick={() => handleClick(')')}>)</button>
                    {/* Memory Functions */}
                    <button onClick={memoryStore}>M+</button>
                    <button onClick={memoryRecall}>MR</button>
                    <button onClick={memoryClear}>MC</button>
                    <button onClick={memorySubtract}>M-</button> {/* Memory Subtract Button */}
                </div>
                <History history={history} />
            </div>
            <div className="additional-features">
                <UnitConverter />
                <Statistics />
                <QuadraticSolver />
            </div>
            {showGraph && <Graph equation={equation} />}
        </div>
    );
};

export default Calculator;
