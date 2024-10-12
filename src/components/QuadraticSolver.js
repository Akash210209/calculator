// src/components/QuadraticSolver.js
import React, { useState } from 'react';

const QuadraticSolver = () => {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [roots, setRoots] = useState(null);

    const calculateRoots = () => {
        const A = parseFloat(a);
        const B = parseFloat(b);
        const C = parseFloat(c);
        
        const discriminant = B * B - 4 * A * C;
        
        if (discriminant > 0) {
            const root1 = (-B + Math.sqrt(discriminant)) / (2 * A);
            const root2 = (-B - Math.sqrt(discriminant)) / (2 * A);
            setRoots(`Roots are real and different: ${root1.toFixed(2)}, ${root2.toFixed(2)}`);
        } else if (discriminant === 0) {
            const root = -B / (2 * A);
            setRoots(`Roots are real and the same: ${root.toFixed(2)}`);
        } else {
            setRoots("Roots are complex and different.");
        }
    };

    return (
        <div className="quadratic-solver">
            <h2>Quadratic Solver</h2>
            <input
                type="number"
                placeholder="Enter a"
                value={a}
                onChange={(e) => setA(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter b"
                value={b}
                onChange={(e) => setB(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter c"
                value={c}
                onChange={(e) => setC(e.target.value)}
            />
            <button onClick={calculateRoots}>Calculate Roots</button>
            {roots && <div>{roots}</div>}
        </div>
    );
};

export default QuadraticSolver;
