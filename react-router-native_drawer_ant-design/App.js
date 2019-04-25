import React, { Component } from 'react';
import { Provider, Button, Drawer, List, WhiteSpace, Flex, WingBlank, Icon } from '@ant-design/react-native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route } from "react-router-native";
import enUS from '@ant-design/react-native/es/locale-provider/en_US';
import Form from './screens/Form';
import Tabs from './screens/Tabs';
import Carousel from './screens/Carousel';
import Cards from './screens/Cards';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {    
    return (
      <NativeRouter>
        <Provider locale={enUS}>
          <Drawer
            sidebar={(
              <Sidebar drawer={() => { this.drawer.closeDrawer()}} />
            )}
            position="left"
            open={false}
            drawerRef={el => (this.drawer = el)}
            onOpenChange={this.onOpenChange}
            drawerBackgroundColor="#ccc"
            drawerWidth={200}
          >
            <WingBlank style={{ marginTop: 25, marginBottom: 10 }}>
              <Flex>
                <Flex align="start" >
                  <Button size="small" onPress={() => this.drawer && this.drawer.openDrawer()}>
                    <Icon name='menu' />
                  </Button>
                </Flex>
              </Flex>
            </WingBlank>
            <ScrollView>
              <Route exact path="/" component={Tabs} />
              <Route path="/form" component={Form} />
              <Route path="/carousel" component={Carousel} />
              <Route path="/cards" component={Cards} />
            </ScrollView>
          </Drawer>
        </Provider>
      </NativeRouter>

    );
  }
}

export default App;