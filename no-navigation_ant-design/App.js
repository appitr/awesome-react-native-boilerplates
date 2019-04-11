import React, { Component } from 'react';
import { View } from 'react-native';
import { WhiteSpace, Provider } from '@ant-design/react-native';
import enUS from '@ant-design/react-native/es/locale-provider/en_US';
import Home from './screens/Home';

class App extends Component {
  render() {
    return (
      <View>
        <WhiteSpace size="xl" />
        <Provider locale={enUS}>
          <Home />
        </Provider>
      </View>
    );
  }
}

export default App;