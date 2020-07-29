import React, { Component } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import Container from './Container';
import PageContent from './PageContent';

class App extends Component {
  render() {
    return (
      <>
        <Container>
          <PageContent>
            <Navbar />
            <Form />
          </PageContent>
        </Container>
      </>
    );
  }
}

export default App;
