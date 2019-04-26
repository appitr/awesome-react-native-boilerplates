import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Home from "./screens/Home";
import Page1 from "./screens/Page1";
import Page2 from "./screens/Page2";
import Page3 from "./screens/Page3";
import Page4 from "./screens/Page4";
import Menu from "./components/Menu";
import SideMenu from "react-native-side-menu";
import { Button } from "react-native-paper";
import { NativeRouter, Route, Switch } from "react-router-native";

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        top: 5,
        padding: 10
    },
    container: {
        flex: 1,
        marginTop: 40
    }
});

export default class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen: false,
            selectedItem: "About"
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen });
    }

    onMenuItemSelected = item =>
        this.setState({
            isOpen: true,
            selectedItem: item
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
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/page1" exact component={Page1} />
                            <Route path="/page2" exact component={Page2} />
                            <Route path="/page3" exact component={Page3} />
                            <Route path="/page4" exact component={Page4} />
                        </Switch>
                    </View>
                    <Button
                        icon="menu"
                        onPress={this.toggle}
                        style={styles.button}
                    />
                </SideMenu>
            </NativeRouter>
        );
    }
}
