import React, { Component } from "react";
import { Image, View } from "react-native";
import { Button, Icon } from "react-native-elements";

class SidebarSection extends Component {
    render() {
        return (
            <View style={{ textAlign: "left" }}>
                <Image
                    source={{ uri: "http://lorempixel.com/400/200/abstract/" }}
                    style={{ height: 200 }}
                />
                <Button
                    onPress={() => {
                        this.props.navigation.navigate("Home");
                    }}
                    icon={<Icon name="home" size={15} color="white" />}
                    title="Home"
                />
                <Button
                    onPress={() => {
                        this.props.navigation.navigate("Gallery");
                    }}
                    title="Gallery"
                />
                <Button
                    onPress={() => {
                        this.props.navigation.navigate("List");
                    }}
                    title="List"
                />
                <Button
                    onPress={() => {
                        this.props.navigation.navigate("Contact");
                    }}
                    title="Contact"
                />
            </View>
        );
    }
}

export default SidebarSection;
