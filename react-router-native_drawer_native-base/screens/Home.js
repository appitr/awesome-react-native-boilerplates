import React, { Component } from 'react';
import { Image, } from 'react-native';
import { Text, Card, CardItem, Left, Thumbnail, Body, Button, Icon, Right } from 'native-base';
import { Link } from "react-router-native";

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
                        <Link to="/list" underlayColor="#f0f4f7">
                            <Text>List</Text>
                        </Link>
                    </Right>
                </CardItem>
            </Card>
        );
    }
}

export default Home;