import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { Button, Icon } from '@ant-design/react-native';

class SidebarSection extends Component {
    render() {
        return (
            <View>
                <Image source={{ uri: 'http://lorempixel.com/400/200/abstract/' }} style={{ height: 200}} />
                <Button
                onPress={() => { this.props.navigation.navigate('Tabs');}}>
                    <Icon name='heart' />
                    <Text>Tabs</Text>
                </Button>
                <Button onPress={() => { this.props.navigation.navigate('Form');}}>
                    <Icon name='heart' />
                    <Text>Form</Text>
                </Button>
                <Button onPress={() => { this.props.navigation.navigate('Carousel'); }}>
                    <Icon name='heart' />
                    <Text>Carousel</Text>
                </Button>
                <Button onPress={() => { this.props.navigation.navigate('Cards'); }}>
                    <Icon name='heart' />
                    <Text>Cards</Text>
                </Button>
            </View>
        );
    }
}

export default SidebarSection;