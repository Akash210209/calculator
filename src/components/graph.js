// src/components/Graph.js
import React from 'react';
import Plot from 'react-plotly.js';
import { create, all } from 'mathjs';

const math = create(all);
const Graph = ({ equation }) => {
    const xValues = Array.from({ length: 100 }, (_, i) => i - 50); // x values from -50 to 49
    const yValues = xValues.map((x) => math.evaluate(equation.replace(/x/g, x))); // Calculate y based on the equation

    return (
        <Plot
            data={[
                {
                    x: xValues,
                    y: yValues,
                    type: 'scatter',
                    mode: 'lines',
                    marker: { color: 'blue' },
                },
            ]}
            layout={{ title: 'Graph of ' + equation }}
        />
    );
};

export default Graph;
