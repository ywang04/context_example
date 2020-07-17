import React, { Component } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import ThemeProvider from './contexts/ThemeProvider';

class App extends Component {
  render() {
    return (
      <>
        <ThemeProvider>
          <Navbar />
          <Form />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
