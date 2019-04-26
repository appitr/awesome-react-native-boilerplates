import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Scene, Router, Stack } from "react-native-router-flux";
import Home from "./screens/Home";
import Gallery from "./screens/Gallery";
import List from "./screens/List";
import Contact from "./screens/Contact";
import TabIcon from "./components/TabIcon";

class App extends Component {
    render() {
        return (
            <Router>
                <Stack tabs={true}>
                    <Scene
                        key="Home"
                        component={Home}
                        title="Settings"
                        icon={TabIcon}
                        iconName={"home"}
                    />
                    <Scene
                        key="Gallery"
                        component={Gallery}
                        title="Pricing"
                        icon={TabIcon}
                        iconName={"favorite"}
                    />
                    <Scene
                        key="List"
                        component={List}
                        title="List"
                        icon={TabIcon}
                        iconName={"favorite"}
                    />
                    <Scene
                        key="Contact"
                        component={Contact}
                        title="Forms"
                        icon={TabIcon}
                        iconName={"favorite"}
                    />
                </Stack>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 100,
        backgroundColor: "#ecf0f1"
    }
});

export default App;
