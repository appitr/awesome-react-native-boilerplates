import React, { Component } from 'react';
import { Image, } from 'react-native';
import { Text, Card, CardItem, Left, Thumbnail, Body, Button, Icon, Right } from 'native-base';

class Home extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: 'http://lorempixel.com/420/320/people/' }} />
                        <Body>
                            <Text>Home</Text>
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
                        <Text>Comments</Text>
                    </Right>
                </CardItem>
            </Card>
        );
    }
}

export default Home;