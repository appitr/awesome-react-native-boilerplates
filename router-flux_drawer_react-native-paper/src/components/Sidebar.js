import React, { Component } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";
import { Actions } from "react-native-router-flux";

class SidebarSection extends Component {
    render() {
        return (
            <View>
                <Image
                    source={{ uri: "http://lorempixel.com/400/200/abstract/" }}
                    style={{ height: 200 }}
                />
                <Button
                    onPress={() => {
                        Actions.home();
                    }}
                >
                    <Text>Home</Text>
                </Button>
                <Button
                    onPress={() => {
                        Actions.page1();
                    }}
                >
                    <Text>Page1</Text>
                </Button>
                <Button
                    onPress={() => {
                        Actions.page2();
                    }}
                >
                    <Text>Page2</Text>
                </Button>
                <Button
                    onPress={() => {
                        Actions.page3();
                    }}
                >
                    <Text>Page3</Text>
                </Button>
                <Button
                    onPress={() => {
                        Actions.page4();
                    }}
                >
                    <Text>Page4</Text>
                </Button>
            </View>
        );
    }
}

export default SidebarSection;
