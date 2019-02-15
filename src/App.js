import React, { useContext } from 'react';
import './App.css';

import { ThemeContext, LanguageContext } from './context';

import TestComponent from './component/test';

export default function App() {
  const language = useContext(LanguageContext);
  const theme = useContext(ThemeContext);
    return (
      <React.Fragment>
        <br />
        <div>{language} and {theme}</div>
        <h3>test</h3>
        <TestComponent />
      </React.Fragment>
    );
}
