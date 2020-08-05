import React, { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

const Container = props => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('english');

  const toggleTheme = () => setDarkMode(darkMode => !darkMode);

  const changeLanguage = e => setLanguage(e.target.value);
  // this.setState(prevState => ({ ...prevState, language: e.target.value }));

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
      }}
    >
      <LanguageContext.Provider value={{ language, changeLanguage }}>
        {props.children}
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Container;

// export const withLanguageContext = Component => props => (
//   <LanguageContext.Consumer>
//     {value => <Component languageContext={value} {...props} />}
//   </LanguageContext.Consumer>
// );
