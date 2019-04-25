import React, { Component } from 'react';
import { Image } from 'react-native';
import { Content, Text, Card, CardItem, Left, Thumbnail, Body, Button, Icon, Right } from 'native-base';

class ContentSection extends Component {
    render() {
        return (
            <Content paddler>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{ uri: 'http://lorempixel.com/420/320/people/' }} />
                            <Body>
                                <Text>NativeBase</Text>
                                <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{ uri: 'http://lorempixel.com/420/320/abstract/' }} style={{ height: 200, width: null, flex: 1 }} />
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>12 Likes</Text>
                            </Button>
                        </Left>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}

export default ContentSection;