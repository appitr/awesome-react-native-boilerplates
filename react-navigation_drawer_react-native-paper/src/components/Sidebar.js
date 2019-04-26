import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';

class SidebarSection extends Component {
    render() {
        return (
            <View>
                <Image source={{ uri: 'http://lorempixel.com/400/200/abstract/' }} style={{ height: 200 }} />
                <Button onPress={() => { this.props.navigation.navigate('Home'); }}>
                    <Text>Home</Text>
                </Button>
                <Button onPress={() => { this.props.navigation.navigate('Page1'); }}>
                    <Text>Page1</Text>
                </Button>
                <Button onPress={() => { this.props.navigation.navigate('Page2'); }}>
                    <Text>Page2</Text>
                </Button>
                <Button onPress={() => { this.props.navigation.navigate('Page3'); }}>
                    <Text>Page3</Text>
                </Button>
                <Button onPress={() => { this.props.navigation.navigate('Page4'); }}>
                    <Text>Page4</Text>
                </Button>
            </View>
        );
    }
}

export default SidebarSection;