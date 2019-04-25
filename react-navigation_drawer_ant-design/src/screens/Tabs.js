import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { Tabs, WingBlank, Flex, Button, Icon } from "@ant-design/react-native";

const renderContent = (tab, index) => {
    const style = {
        paddingVertical: 40,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        backgroundColor: "#ddd"
    };
    const content = [1, 2, 3, 4, 5, 6, 7, 8].map(i => {
        return (
            <View key={index + "_" + i} style={style}>
                <Text>
                    {tab.title} - {i}
                </Text>
            </View>
        );
    });
    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>{content}</ScrollView>
    );
};

class TabsScreen extends Component {
    render() {
        const tabs = [
            { title: "First Tab" },
            { title: "Second Tab" },
            { title: "Third Tab" }
        ];
        const tabs2 = [
            { title: "Shark" },
            { title: "Whale" },
            { title: "Koi" },
            { title: "Tuna" },
            { title: "Crab" },
            { title: "Squid" },
            { title: "Jellyfish" },
            { title: "Star" },
            { title: "Grampus" }
        ];
        const style = {
            alignItems: "center",
            justifyContent: "center",
            height: 150,
            backgroundColor: "#fff"
        };
        return (
            <View style={{ flex: 1 }}>
                <WingBlank style={{ marginTop: 25, marginBottom: 10 }}>
                    <Flex>
                        <Flex align="start">
                            <Button
                                size="small"
                                onPress={() =>
                                    this.props.navigation.openDrawer()
                                }
                            >
                                <Icon name="menu" />
                            </Button>
                        </Flex>
                    </Flex>
                </WingBlank>
                <Tabs tabs={tabs}>
                    <View style={style}>
                        <Text>Content of First Tab</Text>
                    </View>
                    <View style={style}>
                        <Text>Content of Second Tab</Text>
                    </View>
                    <View style={style}>
                        <Text>Content of Third Tab</Text>
                    </View>
                </Tabs>
                <View style={{ flex: 2 }}>
                    <Tabs tabs={tabs2} initialPage={1} tabBarPosition="top">
                        {renderContent}
                    </Tabs>
                </View>
            </View>
        );
    }
}

export default TabsScreen;
