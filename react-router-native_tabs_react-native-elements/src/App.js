import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Header, withTheme } from "react-native-elements";
import Content from "./components/Content";
import UserList from "./components/UserList";
import { NativeRouter, Route, Switch, Link } from "react-router-native";

class App extends Component {
    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Header
                        placement="left"
                        leftComponent={
                            <Link to="/">
                                <Text style={styles.headerText}>Home</Text>
                            </Link>
                        }
                        rightComponent={
                            <Link to="/userlist">
                                <Text style={styles.headerText}>User List</Text>
                            </Link>
                        }
                    />
                    <Switch>
                        <Route path="/" exact component={Content} />
                        <Route path="/userlist" exact component={UserList} />
                    </Switch>
                </View>
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        paddingBottom: 10,
        backgroundColor: "#F5FCFF"
    },
    headerText: {
        color: "white",
        paddingRight: 40,
        paddingLeft: 40,
        fontSize: 20,
        borderBottomWidth: 3,
        borderBottomColor: 'white'
    }
});
export default App;
