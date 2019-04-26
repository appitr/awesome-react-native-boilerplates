import React from "react";
import { Text, View } from "react-native";
import { Icon, TabBar } from "@ant-design/react-native";
import Tabs from "./Tabs";
import Form from "./Form";
import Carousel from "./Carousel";
import Cards from "./Cards";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "redTab"
        };
    }

    renderContent(pageText) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    backgroundColor: "white"
                }}
            >
                <Text style={{ margin: 50 }}>{pageText}</Text>
            </View>
        );
    }

    onChangeTab(tabName) {
        this.setState({
            selectedTab: tabName
        });
    }

    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="#f5f5f5"
            >
                <TabBar.Item
                    title="Cards"
                    icon={<Icon name="home" />}
                    selected={this.state.selectedTab === "blueTab"}
                    onPress={() => this.onChangeTab("blueTab")}
                >
                    <Cards />
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon name="ordered-list" />}
                    title="Tabs"
                    badge={2}
                    selected={this.state.selectedTab === "redTab"}
                    onPress={() => this.onChangeTab("redTab")}
                >
                    <Tabs />
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon name="like" />}
                    title="Form"
                    selected={this.state.selectedTab === "greenTab"}
                    onPress={() => this.onChangeTab("greenTab")}
                >
                    <Form />
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon name="user" />}
                    title="Carousel"
                    selected={this.state.selectedTab === "yellowTab"}
                    onPress={() => this.onChangeTab("yellowTab")}
                >
                    <Carousel />
                </TabBar.Item>
            </TabBar>
        );
    }
}

export default Home;
