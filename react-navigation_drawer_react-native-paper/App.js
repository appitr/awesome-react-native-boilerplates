import React from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import Home from './screens/Home';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Page3 from './screens/Page3';
import Page4 from './screens/Page4';
import Sidebar from './components/Sidebar';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: Home },
    Page1: { screen: Page1 },
    Page2: { screen: Page2 },
    Page3: { screen: Page3 },
    Page4: { screen: Page4 },
  },
  {
    initialRouteName: "Home",
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