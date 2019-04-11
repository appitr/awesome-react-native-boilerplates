import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, WhiteSpace, WingBlank } from '@ant-design/react-native';

const Content = () => (
    <View style={{flex: 1, justifyContent: 'center'}}>
        <WingBlank size="lg">
            <Card>
                <Card.Header
                    title="I need a superhero"
                    thumbStyle={{ width: 20, height: 20 }}
                    thumb="http://lorempixel.com/420/320/people/"
                />
                <Card.Body>
                    <View style={{ flex: 1}}>
                        <Image
                        source={{ uri: 'http://lorempixel.com/420/320/abstract/' }}
                        style={{ height: 300 }}
                        />
                        <Text style={{ marginLeft: 16 }}>Card Content</Text>
                    </View>
                </Card.Body>
            </Card>
        </WingBlank>
    </View>
);

export default Content;