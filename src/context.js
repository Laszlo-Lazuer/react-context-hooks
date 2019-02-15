import React from 'react';

export const ThemeContext = React.createContext('light')
export class ThemeProvider extends React.Component {
  state= {theme: 'light'}


  toggleTheme = () => {
    this.setState(({theme}) => ({
      theme: theme === 'light' ? 'dark' : 'light',
    }))
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <button onClick={this.toggleTheme}>toggle theme</button>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }

}

export const LanguageContext = React.createContext('en');

export class LanguageProvider extends React.Component {
  state= {language: 'en'}


  toggleLanguage = () => {
    this.setState(({language}) => ({
      language: language === 'en' ? 'es' : 'en',
    }))
  }

  render() {
    return (
      <LanguageContext.Provider value={this.state.language}>
        <button onClick={this.toggleLanguage}>toggle Language</button>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}

export function AppProviders({children}) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </LanguageProvider>
  )
}
