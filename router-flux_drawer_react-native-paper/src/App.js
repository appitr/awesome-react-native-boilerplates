import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
    Tabs,
    Scene,
    Router,
    Overlay,
    Modal,
    Drawer,
    Stack,
    Lightbox
} from "react-native-router-flux";
import Home from "./screens/Home";
import Page1 from "./screens/Page1";
import Page2 from "./screens/Page2";
import Page3 from "./screens/Page3";
import Page4 from "./screens/Page4";
import Sidebar from "./components/Sidebar";
import TabIcon from "./components/TabIcon";

class App extends Component {
    render() {
        return (
            <Router>
                <Overlay key="overlay">
                    <Modal key="modal" hideNavBar>
                        <Lightbox key="lightbox">
                            <Stack
                                key="root"
                                hideNavBar
                                titleStyle={{ alignSelf: "center" }}
                            >
                                <Drawer
                                    hideNavBar
                                    key="drawer"
                                    contentComponent={Sidebar}
                                    drawerIcon={() => <Icon name={"menu"} />}
                                    drawerWidth={200}
                                >
                                    <Scene hideNavBar>
                                        <Tabs
                                            key="tabbar"
                                            backToInitial
                                            onTabOnPress={() => {
                                                console.log(
                                                    "Back to initial and also print this"
                                                );
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
                                                iconName={"home"}
                                            />
                                            <Scene
                                                key="page1"
                                                component={Page1}
                                                title="Page1"
                                                icon={TabIcon}
                                                iconName={"image"}
                                            />
                                            <Scene
                                                key="page2"
                                                component={Page2}
                                                title="Page2"
                                                icon={TabIcon}
                                                iconName={"image"}
                                            />
                                            <Scene
                                                key="page3"
                                                component={Page3}
                                                title="Page3"
                                                icon={TabIcon}
                                                iconName={"image"}
                                            />
                                            <Scene
                                                key="page4"
                                                component={Page4}
                                                title="Page4"
                                                icon={TabIcon}
                                                iconName={"image"}
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
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 100,
        backgroundColor: "#ecf0f1"
    }
});

export default App;
