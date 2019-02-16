import React, { useContext } from 'react';
import './App.css';

import { ThemeContext, LanguageContext } from './context';

import TestComponent from './component/test';

export default function App() {
  const language = useContext(LanguageContext);
  const theme = useContext(ThemeContext);
    return (
      <div className="wrapper">
        <br />
        <div>{language} and {theme}</div>
        <h3>Nested Component State test</h3>
        <TestComponent />
      </div>
    );
}
