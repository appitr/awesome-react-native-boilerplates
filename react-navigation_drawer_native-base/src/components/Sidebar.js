import React, { Component } from "react";
import { Image } from "react-native";
import {
    Icon,
    Content,
    Container,
    Text,
    List,
    ListItem,
    Left,
    Right,
    Badge
} from "native-base";

const datas = [
    {
        name: "Home",
        route: "Home",
        icon: "home",
        bg: "#C5F442"
    },
    {
        name: "Gallery",
        route: "Gallery",
        icon: "image",
        bg: "#477EEA",
        types: "11"
    },
    {
        name: "List",
        route: "List",
        icon: "list",
        bg: "#DA4437",
        types: "4"
    },
    {
        name: "Contact",
        route: "Contact",
        icon: "contact",
        bg: "#C5F442",
        types: "5"
    }
];

class SidebarSection extends Component {
    render() {
        const { match, location, closeSidebar } = this.props;
        return (
            <Container>
                <Content>
                    <Image
                        source={{
                            uri: "http://lorempixel.com/400/200/abstract/"
                        }}
                        style={{ height: 200, width: null, flex: 1 }}
                    />
                    <List
                        dataArray={datas}
                        renderRow={data => (
                            <ListItem
                                button
                                noBorder
                                onPress={() =>
                                    this.props.navigation.navigate(data.route)
                                }
                            >
                                <Left>
                                    <Icon
                                        active
                                        name={data.icon}
                                        style={{
                                            color: "#777",
                                            fontSize: 26,
                                            width: 30
                                        }}
                                    />
                                    <Text>{data.name}</Text>
                                </Left>
                                {data.types && (
                                    <Right style={{ flex: 1 }}>
                                        <Badge
                                            style={{
                                                borderRadius: 3,
                                                height: 25,
                                                width: 30,
                                                backgroundColor: data.bg
                                            }}
                                        >
                                            <Text>{data.types}</Text>
                                        </Badge>
                                    </Right>
                                )}
                            </ListItem>
                        )}
                    />
                </Content>
            </Container>
        );
    }
}

export default SidebarSection;
