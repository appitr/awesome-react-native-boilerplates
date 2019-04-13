import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Button, Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

class SidebarSection extends Component {
    render() {
        return (
            <View>
                <Image source={{ uri: 'http://lorempixel.com/400/200/abstract/' }} style={{ height: 200}} />
                <Button onPress={() => { Actions.tabs(); }}>
                    <Icon name='form' />
                    <Text>Tabs</Text>
                </Button>
                <Button onPress={() => { Actions.form(); }}>
                    <Icon name='menu' />
                    <Text>Form</Text>
                </Button>
                <Button onPress={() => { Actions.carousel(); }}>
                    <Icon name='form' />
                    <Text>Carousel</Text>
                </Button>
                <Button onPress={() => { Actions.cards(); }}>
                    <Icon name='menu' />
                    <Text>Cards</Text>
                </Button>
            </View>
        );
    }
}

export default SidebarSection;