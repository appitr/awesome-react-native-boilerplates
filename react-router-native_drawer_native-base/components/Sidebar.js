import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Button, Icon, Content, Container, Text } from 'native-base';
import { withRouter } from "react-router-native";

class SidebarSection extends Component {
    render() {
        const {closeSidebar } = this.props;
        return (
            <Container>
                <Content>
                    <Image source={{ uri: 'http://lorempixel.com/400/200/abstract/' }} style={{ height: 200, width: null, flex: 1 }} />
                    <Button style={styles.button} block warning onPress={() => { closeSidebar(); this.props.history.push('/'); }}>
                        <Icon name="home" />
                        <Text>Home</Text>
                    </Button>
                    <Button style={styles.button} block onPress={() => { closeSidebar(); this.props.history.push('/gallery'); }}>
                        <Icon name="photos" />
                        <Text>Gallery</Text>
                    </Button>
                    <Button style={styles.button} block success onPress={() => { closeSidebar(); this.props.history.push('/list'); }}>
                        <Icon name="list" />
                        <Text>List</Text>
                    </Button>
                    <Button style={styles.button} block info onPress={() => { closeSidebar(); this.props.history.push('/contact'); }}>
                        <Icon name="contact" />
                        <Text>Contact</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        justifyContent: "flex-start",
    },
});

export default withRouter(SidebarSection);