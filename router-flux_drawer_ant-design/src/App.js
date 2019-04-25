import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Provider, Icon } from "@ant-design/react-native";
import enUS from "@ant-design/react-native/es/locale-provider/en_US";
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
import Form from "./screens/Form";
import TabsScene from "./screens/Tabs";
import Carousel from "./screens/Carousel";
import Cards from "./screens/Cards";
import Sidebar from "./components/Sidebar";
import TabIcon from "./components/TabIcon";

class App extends Component {
    render() {
        return (
            <Provider locale={enUS}>
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
                                        drawerIcon={() => (
                                            <Icon name={"menu"} />
                                        )}
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
                                                    key="form"
                                                    component={Form}
                                                    title="Form"
                                                    icon={TabIcon}
                                                    iconName={"home"}
                                                />
                                                <Scene
                                                    key="tabs"
                                                    component={TabsScene}
                                                    title="Tabs"
                                                    icon={TabIcon}
                                                    iconName={"edit"}
                                                />
                                                <Scene
                                                    key="carousel"
                                                    component={Carousel}
                                                    title="Carousel"
                                                    icon={TabIcon}
                                                    iconName={"menu"}
                                                />
                                                <Scene
                                                    key="cards"
                                                    component={Cards}
                                                    title="Cards"
                                                    icon={TabIcon}
                                                    iconName={"form"}
                                                />
                                            </Tabs>
                                        </Scene>
                                    </Drawer>
                                </Stack>
                            </Lightbox>
                        </Modal>
                    </Overlay>
                </Router>
            </Provider>
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
