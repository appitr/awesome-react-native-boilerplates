import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Header } from "react-native-elements";
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
                                <Text>Home</Text>
                            </Link>
                        }
                        rightComponent={
                            <Link to="/userlist">
                                <Text>User List</Text>
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
        marginTop: 25,
        padding: 10,
        backgroundColor: "#F5FCFF"
    },
    header: {
        fontSize: 20
    }
});
export default App;
