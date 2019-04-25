import React from "react";
import { View, Text, Image } from "react-native";
import { Card, WhiteSpace, WingBlank } from "@ant-design/react-native";

const Content = () => (
    <View style={{ flex: 1, justifyContent: "center" }}>
        <WingBlank size="lg">
            <Card>
                <Card.Header
                    title="This is title"
                    thumbStyle={{ width: 30, height: 30 }}
                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                    extra="this is extra"
                />
                <Card.Body>
                    <View style={{ height: 42 }}>
                        <Text style={{ marginLeft: 16 }}>Card Content</Text>
                        <Image
                            source={{
                                uri: "http://lorempixel.com/420/320/abstract/"
                            }}
                            style={{ height: 300 }}
                        />
                    </View>
                </Card.Body>
                <Card.Footer
                    content="footer content"
                    extra="footer extra content"
                />
            </Card>
        </WingBlank>
    </View>
);

export default Content;
