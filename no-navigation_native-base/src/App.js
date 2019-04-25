import React, { Component } from 'react';
import { Container } from 'native-base';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer />
      </Container>
    );
  }
}

export default App;