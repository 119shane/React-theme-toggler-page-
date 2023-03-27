
import React from 'react'

import './App.css';
import ElectionTrump from './ElectionTrump';

import { ThemeContextProvider } from './context/themeContext';

function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
      <ElectionTrump/>
    </ThemeContextProvider>
    </div>
  );
}

export default App;
