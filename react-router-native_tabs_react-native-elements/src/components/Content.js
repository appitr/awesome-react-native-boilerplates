import React, { Component } from "react";
import { View } from "react-native";
import { Card, Button, Icon, SearchBar, Divider, } from "react-native-elements";

class Content extends Component {
    state = {
        search: ""
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <View style={{ backgroundColor: "white", flex: 1 }}>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    platform="ios"
                />
                <Card
                    title="HELLO WORLD"
                >
                    <Button
                        icon={<Icon name="code" color="#ffffff" />}
                        backgroundColor="#03A9F4"
                        buttonStyle={{
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0
                        }}
                        title="VIEW NOW"
                    />
                </Card>
                <Divider style={{ backgroundColor: "#eeeeee", margin: 10 }} />
            </View>
        );
    }
}

export default Content;
