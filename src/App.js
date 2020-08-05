import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import Container from './Container';
import PageContent from './PageContent';

const App = () => {
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
};

export default App;
