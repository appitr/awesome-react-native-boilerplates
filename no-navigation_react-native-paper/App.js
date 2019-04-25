import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Colors, FAB, withTheme } from 'react-native-paper';
import Content from './components/Content';
import ActionBar from './components/ActionBar';

class App extends Component {
  static title = 'Appbar';
  state = {
    visible: true,
  };

  render() {
    return (
      <View style={styles.container}>
        <Content />
        <ActionBar/>
        <FAB icon="reply" onPress={() => { Alert.alert('Material Design'); }} style={styles.fab} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 8,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 28,
  },
});

export default withTheme(App);
