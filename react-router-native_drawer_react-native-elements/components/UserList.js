import React, { Component } from "react";
import { ScrollView } from "react-native";
import { ListItem } from "react-native-elements";

const list = [
    {
        name: "Amy Farha",
        avatar_url: "http://lorempixel.com/420/320/people/1",
        subtitle: "Vice President"
    },
    {
        name: "Chris Jackson",
        avatar_url: "http://lorempixel.com/420/321/people/2",
        subtitle: "Vice Chairman"
    },
    {
        name: "Chris Jackson",
        avatar_url: "http://lorempixel.com/420/322/people/3",
        subtitle: "Vice Chairman"
    },
    {
        name: "Chris Jackson",
        avatar_url: "http://lorempixel.com/420/323/people/4",
        subtitle: "Vice Chairman"
    }
];

class UserList extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
                {list.map((l, i) => (
                    <ListItem
                        key={i}
                        leftAvatar={{ source: { uri: l.avatar_url } }}
                        title={l.name}
                        subtitle={l.subtitle}
                    />
                ))}
            </ScrollView>
        );
    }
}

export default UserList;
