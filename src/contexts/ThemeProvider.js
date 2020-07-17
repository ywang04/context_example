import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeProvider extends Component {
  state = {
    isDarkMode: true,
  };
  render() {
    return <ThemeContext.Provider value={{...this.state, tastesLikeChicken: true}}>{this.props.children}</ThemeContext.Provider>;
  }
}

export default ThemeProvider;
