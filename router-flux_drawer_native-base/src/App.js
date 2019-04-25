import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { Tabs, Scene, Router, Overlay, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';
import Home from './screens/Home';
import Gallery from './screens/Gallery';
import List from './screens/List';
import Contact from './screens/Contact';
import TabIcon from './components/TabIcon';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <Router>
        <Overlay key="overlay">
          <Modal key="modal" hideNavBar>
            <Lightbox key="lightbox">
              <Stack key="root" hideNavBar titleStyle={{ alignSelf: 'center' }}>
                <Drawer
                  hideNavBar
                  key="drawer"
                  contentComponent={Sidebar}
                  drawerIcon={() => (
                    <Icon name={'menu'} />
                  )}
                  drawerWidth={200}>
                  <Scene hideNavBar>
                    <Tabs
                      key="tabbar"
                      backToInitial
                      onTabOnPress={() => {
                        console.log('Back to initial and also print this');
                      }}
                      swipeEnabled
                      tabBarStyle={styles.tabBarStyle}
                      activeBackgroundColor="rgba(255, 0, 0, 0.5)"
                    >
                      <Scene
                        key="home"
                        component={Home}
                        title="Home"
                        icon={TabIcon}
                        iconName={'home'}
                      />
                      <Scene
                        key="gallery"
                        component={Gallery}
                        title="Gallery"
                        icon={TabIcon}
                        iconName={'image'}
                      />
                      <Scene
                        key="list"
                        component={List}
                        title="List"
                        tabBarLabel="List"
                        icon={TabIcon}
                        iconName={'list'}
                      />
                      <Scene
                        key="contact"
                        component={Contact}
                        title="Contact"
                        icon={TabIcon}
                        iconName={'contact'}
                      />
                    </Tabs>
                  </Scene>
                </Drawer>
              </Stack>
            </Lightbox>
          </Modal>
        </Overlay>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    backgroundColor: '#ecf0f1',
  },
});

export default App;