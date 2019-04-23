import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native'
import {Header, Button, Icon} from 'react-native-elements';
import Content from './components/Content';
import UserList from './components/UserList';
import SideMenu from 'react-native-side-menu'
import Menu from './components/Menu'
import {NativeRouter, Route, Switch, Link } from "react-router-native";
        
        
const styles = StyleSheet.create({
    container: {
    flex: 1,
  },
  headerButton: {
    color: 'white',
    fontWeight: 'bold'
  },
  caption: {
          fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
      },
  welcome: {
          fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
  instructions: {
          textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
    });
    
export default class App extends Component {
          constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
    
    this.state = {
          isOpen: false,
        selectedItem: 'About',
      };
    }
  
  toggle() {
          this.setState({
            isOpen: !this.state.isOpen,
          });
        }
      
  updateMenuState(isOpen) {
          this.setState({ isOpen });
        }
      
        onMenuItemSelected = item =>
    this.setState({
          isOpen: true,
        selectedItem: item,
      });
  
  render() {
    const menu = <Menu onToggle={this.toggle} />;
    
        return (
          <NativeRouter>
          <SideMenu
            menu={menu}
            isOpen={this.state.isOpen}
            onChange={isOpen => this.updateMenuState(isOpen)}
          >
              <View style={styles.container}>
                <Header
                  leftComponent={
                    <Button
                      icon={<Icon name="menu" color="#ffffff" />}
                      backgroundColor="#03A9F4"
                      buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0
                      }}
                      onPress={this.toggle}
                    />
                  }
                  rightComponent={
                    <Link to="/">
                      <Icon name="home" color="#ffffff" />
                    </Link>
                  }
                />
              <Switch>
                <Route path="/" exact component={Content} />
                <Route path="/userlist" exact component={UserList} />
              </Switch>
            </View>
          </SideMenu>
        </NativeRouter>
        );
      }
}