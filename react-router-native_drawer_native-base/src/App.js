import React, { Component } from "react";
import { Container, Content, Drawer } from "native-base";
import { NativeRouter, Route } from "react-router-native";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./screens/Home";
import Gallery from "./screens/Gallery";
import List from "./screens/List";
import Contact from "./screens/Contact";

class App extends Component {
    closeSidebar = () => {
        this.drawer._root.close();
    };
    openDrawer = () => {
        this.drawer._root.open();
    };

    render() {
        return (
            <NativeRouter>
                <Drawer
                    ref={ref => {
                        this.drawer = ref;
                    }}
                    content={<Sidebar closeSidebar={this.closeSidebar} />}
                    onClose={() => this.closeSidebar()}
                >
                    <Container>
                        <Header drawer={this.openDrawer} />
                        <Content>
                            <Route exact path="/" component={Home} />
                            <Route path="/gallery" component={Gallery} />
                            <Route path="/list" component={List} />
                            <Route path="/contact" component={Contact} />
                        </Content>
                    </Container>
                </Drawer>
            </NativeRouter>
        );
    }
}

export default App;
