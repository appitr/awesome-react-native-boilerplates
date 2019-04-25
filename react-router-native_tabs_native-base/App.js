import React, { Component } from 'react';
import {Container, Content } from 'native-base';
import { NativeRouter, Route } from "react-router-native";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import Gallery from './screens/Gallery';
import List from './screens/List';
import Contact from './screens/Contact';

class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Container>
          <Header />
          <Content>
            <Route exact path="/" component={Home} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/list" component={List} />
            <Route path="/contact" component={Contact} />
          </Content>
          <Footer />
        </Container>
      </NativeRouter>
    );
  }
}

export default App;