import './App.css';
// src/App.js
// src/App.js
import React, { useState } from 'react';
import Calculator from './components/calculator';
import ThemeToggle from './components/themetoggle';
import './components/calculator.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
  };

    return (
      // <div style={{width:"100%"}} className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className='App'>
            {/* <ThemeToggle toggleTheme={toggleTheme} /> */}
            <Calculator />
        </div>
    );
};

export default App;
