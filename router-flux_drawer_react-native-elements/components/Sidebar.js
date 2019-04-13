import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class SidebarSection extends Component {
    render() {
        return (
            <View>
                <Image source={{ uri: 'http://lorempixel.com/400/200/abstract/' }} style={{ height: 200 }} />
                <Button onPress={() => { Actions.home(); }}
                    icon={
                        <Icon
                            name="menu"
                            size={15}
                            color="white"
                        />
                    }
                    title="Home"
                />
                <Button onPress={() => { Actions.gallery(); }}
                    icon={
                        <Icon
                            name="menu"
                            size={15}
                            color="white"
                        />
                    }
                    title="Gallery" />
                <Button onPress={() => { Actions.list(); }}
                    icon={
                        <Icon
                            name="menu"
                            size={15}
                            color="white"
                        />
                    }
                    title="List" />
                <Button onPress={() => { Actions.contact(); }}
                    icon={
                        <Icon
                            name="menu"
                            size={15}
                            color="white"
                        />
                    }
                    title="Contact" />
            </View>
        );
    }
}

export default SidebarSection;