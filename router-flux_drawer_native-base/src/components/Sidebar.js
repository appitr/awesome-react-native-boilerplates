import React, { Component } from 'react';
import { Image } from 'react-native';
import { Button, Icon, Content, Container, Text, List, ListItem, Left, Right, Badge } from 'native-base';
import { Actions } from 'react-native-router-flux';

class SidebarSection extends Component {
    render() {
        const { match, location, closeSidebar } = this.props;
        return (
            <Container>
                <Content>
                    <Image source={{ uri: 'http://lorempixel.com/400/200/abstract/' }} style={{ height: 200, width: null, flex: 1 }} />
                    <ListItem
                        button
                        noBorder
                        onPress={() => Actions.home()}
                    >
                        <Left>
                            <Icon
                                active
                                name={'home'}
                                style={{ color: "#777", fontSize: 26, width: 30 }}
                            />
                            <Text>
                                Home
                            </Text>
                        </Left>
                    </ListItem>
                    <ListItem
                        button
                        noBorder
                        onPress={() => Actions.gallery()}
                    >
                        <Left>
                            <Icon
                                active
                                name={'image'}
                                style={{ color: "#777", fontSize: 26, width: 30 }}
                            />
                            <Text>
                                Gallery
                            </Text>
                        </Left>
                    </ListItem>
                    <ListItem
                        button
                        noBorder
                        onPress={() => Actions.list()}
                    >
                        <Left>
                            <Icon
                                active
                                name={'list'}
                                style={{ color: "#777", fontSize: 26, width: 30 }}
                            />
                            <Text>
                                List
                            </Text>
                        </Left>
                    </ListItem>
                    <ListItem
                        button
                        noBorder
                        onPress={() => Actions.contact()}
                    >
                        <Left>
                            <Icon
                                active
                                name={'contact'}
                                style={{ color: "#777", fontSize: 26, width: 30 }}
                            />
                            <Text>
                                Contact
                            </Text>
                        </Left>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

export default SidebarSection;