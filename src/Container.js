import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

export default class Container extends Component {
  state = {
    isDarkMode: false,
    language: 'english',
  };
  toggleTheme = () => {
    this.setState(c => ({ isDarkMode: !c.isDarkMode }));
  };
  changeLanguage = e => {
    this.setState({ language: e.target.value });
    // this.setState(prevState => ({ ...prevState, language: e.target.value }));
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          toggleTheme: this.toggleTheme,
        }}
      >
        <LanguageContext.Provider
          value={{ ...this.state, changeLanguage: this.changeLanguage }}
        >
          {this.props.children}
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export const withLanguageContext = Component => props => (
  <LanguageContext.Consumer>
    {value => <Component languageContext={value} {...props} />}
  </LanguageContext.Consumer>
);
