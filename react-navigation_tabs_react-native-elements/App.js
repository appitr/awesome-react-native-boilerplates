import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from './screens/Home';
import Gallery from './screens/Gallery';
import List from './screens/List';
import Contact from './screens/Contact';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: () => (
          <Icon name="home" size={20} />
        )
      },
    },
    Gallery: {
      screen: Gallery,
      navigationOptions: {
        tabBarLabel: "Gallery",
        tabBarIcon: () => (
          <Icon name="image" size={20} />
        )
      },
    },
    List: {
      screen: List,
      navigationOptions: {
        tabBarLabel: "List",
        tabBarIcon: () => (
          <Icon name="list" size={20} />
        )
      },
    },
    Contact: {
      screen: Contact,
      navigationOptions: {
        tabBarLabel: "Contact",
        tabBarIcon: () => (
          <Icon name="edit" size={20} />
        )
      },
    }
  },
);

export default createAppContainer(TabNavigator);