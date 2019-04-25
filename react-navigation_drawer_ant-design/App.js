import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import React from 'react';
import Form from './screens/Form';
import Tabs from './screens/Tabs';
import Carousel from './screens/Carousel';
import Cards from './screens/Cards';
import Sidebar from './components/Sidebar';

const DrawerNavigator = createDrawerNavigator(
  {
    Form: { screen: Form },
    Tabs: { screen: Tabs },
    Carousel: { screen: Carousel },
    Cards: { screen: Cards }
  },
  {
    initialRouteName: "Tabs",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <Sidebar {...props} />
  }
);

const StackNavigator = createStackNavigator(
  {
    Drawer: { screen: DrawerNavigator }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none",
  }
);

export default createAppContainer(StackNavigator);