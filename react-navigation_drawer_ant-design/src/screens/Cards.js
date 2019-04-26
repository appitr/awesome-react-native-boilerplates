import React, { Component } from "react";
import { Text, View } from "react-native";
import {
    Card,
    WhiteSpace,
    WingBlank,
    Flex,
    Button,
    Icon
} from "@ant-design/react-native";

class CardsScreen extends Component {
    render() {
        return (
            <View>
                <WingBlank style={{ marginTop: 25, marginBottom: 10 }}>
                    <Flex>
                        <Flex align="start">
                            <Button
                                size="small"
                                onPress={() =>
                                    this.props.navigation.openDrawer()
                                }
                            >
                                <Icon name="menu" />
                            </Button>
                        </Flex>
                    </Flex>
                </WingBlank>
                <Card>
                    <Card.Header
                        title="This is title"
                        thumbStyle={{ width: 30, height: 30 }}
                        thumb="http://lorempixel.com/420/320/abstract/1/"
                        extra="this is extra"
                    />
                    <Card.Body>
                        <View style={{ height: 42 }}>
                            <Text style={{ marginLeft: 16 }}>Card Content</Text>
                        </View>
                    </Card.Body>
                    <Card.Footer
                        content="footer content"
                        extra="footer extra content"
                    />
                </Card>
                <WhiteSpace size="lg" />
                <Card>
                    <Card.Header
                        title="This is title"
                        thumbStyle={{ width: 30, height: 30 }}
                        thumb="http://lorempixel.com/420/320/abstract/2/"
                        extra="this is extra"
                    />
                    <Card.Body>
                        <View style={{ height: 42 }}>
                            <Text style={{ marginLeft: 16 }}>Card Content</Text>
                        </View>
                    </Card.Body>
                    <Card.Footer
                        content="footer content"
                        extra="footer extra content"
                    />
                </Card>
                <WhiteSpace size="lg" />
                <Card>
                    <Card.Header
                        title="This is title"
                        thumbStyle={{ width: 30, height: 30 }}
                        thumb="http://lorempixel.com/420/320/abstract/3/"
                        extra="this is extra"
                    />
                    <Card.Body>
                        <View style={{ height: 42 }}>
                            <Text style={{ marginLeft: 16 }}>Card Content</Text>
                        </View>
                    </Card.Body>
                    <Card.Footer
                        content="footer content"
                        extra="footer extra content"
                    />
                </Card>
            </View>
        );
    }
}

export default CardsScreen;
