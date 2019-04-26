import React, { Component } from "react";
import { Image, View } from "react-native";
import {
    Body,
    Title,
    Right,
    DeckSwiper,
    Content,
    Text,
    Card,
    CardItem,
    Container,
    Header,
    Left,
    Icon,
    Button
} from "native-base";

const images = [
    {
        text: "Picture One",
        name: "One",
        image: "http://lorempixel.com/420/320/"
    },
    {
        text: "Picture Two",
        name: "One",
        image: "http://lorempixel.com/420/321/"
    },
    {
        text: "Picture Three",
        name: "One",
        image: "http://lorempixel.com/420/322/"
    },
    {
        text: "Picture Four",
        name: "One",
        image: "http://lorempixel.com/420/323/"
    },
    {
        text: "Picture Five",
        name: "One",
        image: "http://lorempixel.com/420/324/"
    },
    {
        text: "Picture Six",
        name: "One",
        image: "http://lorempixel.com/420/325/"
    }
];
class Gallery extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.openDrawer()}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Gallery</Title>
                    </Body>
                    <Right />
                </Header>
                <View>
                    <DeckSwiper
                        dataSource={images}
                        renderItem={item => (
                            <Content padder>
                                <Card style={{ elevation: 3 }}>
                                    <CardItem cardBody>
                                        <Image
                                            style={{ height: 300, flex: 1 }}
                                            source={{ uri: item.image }}
                                        />
                                    </CardItem>
                                    <CardItem footer>
                                        <Text>Swipe {item.text}</Text>
                                    </CardItem>
                                </Card>
                            </Content>
                        )}
                    />
                </View>
            </Container>
        );
    }
}

export default Gallery;
