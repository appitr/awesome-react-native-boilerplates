import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class SidebarSection extends Component {
    render() {
        return (
            <View>
                <Image source={{ uri: 'http://lorempixel.com/400/200/abstract/' }} style={{ height: 200 }} />
                <Button onPress={() => { this.props.navigation.navigate('Home'); }}
                    icon={
                        <Icon
                            name="menu"
                            size={15}
                            color="white"
                        />
                    }
                    title="Home"
                />
                <Button onPress={() => { this.props.navigation.navigate('Gallery'); }}
                    icon={
                        <Icon
                            name="menu"
                            size={15}
                            color="white"
                        />
                    }
                    title="Gallery" />
                <Button onPress={() => { this.props.navigation.navigate('List'); }}
                    icon={
                        <Icon
                            name="menu"
                            size={15}
                            color="white"
                        />
                    }
                    title="List" />
                <Button onPress={() => { this.props.navigation.navigate('Contact'); }}
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