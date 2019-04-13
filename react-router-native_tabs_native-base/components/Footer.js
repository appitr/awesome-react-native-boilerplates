import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Footer, FooterTab, Button, Icon, Badge, Text } from 'native-base';
import { withRouter } from "react-router-native";

class FooterSection extends Component {
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button onPress={() => this.props.history.push('/')} vertical>
                        <Icon name="home" />
                        <Text>Home</Text>
                    </Button>
                    <Button onPress={() => this.props.history.push('/gallery')} vertical>
                        <Icon name="photos" />
                        <Text>Gallery</Text>
                    </Button>
                    <Button onPress={() => this.props.history.push('/list')} vertical>
                        <Icon name="list" />
                        <Text>List</Text>
                    </Button>
                    <Button onPress={() => this.props.history.push('/contact')} vertical badge>
                        <Badge><Text>52</Text></Badge>
                        <Icon name="contact" />
                        <Text>Contact</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        height: '100%',
        paddingTop: 10,
    },
});

export default withRouter(FooterSection);