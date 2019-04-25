import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import { Button, Icon } from "@ant-design/react-native";
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
                        Actions.tabs();
                    }}
                >
                    {/* <Icon name="home" /> */}
                    <Text>Tabs</Text>
                </Button>
                <Button
                    onPress={() => {
                        Actions.form();
                    }}
                >
                    {/* <Icon name="heart" /> */}
                    <Text>Form</Text>
                </Button>
                <Button
                    onPress={() => {
                        Actions.carousel();
                    }}
                >
                    {/* <Icon name="heart" /> */}
                    <Text>Carousel</Text>
                </Button>
                <Button
                    onPress={() => {
                        Actions.cards();
                    }}
                >
                    {/* <Icon name="heart" /> */}
                    <Text>Cards</Text>
                </Button>
            </View>
        );
    }
}

export default SidebarSection;
