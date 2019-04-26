import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import {
    Button,
    InputItem,
    List,
    WingBlank,
    Flex,
    Icon
} from "@ant-design/react-native";

class FormScreen extends Component {
    constructor() {
        super();
        this.state = {
            value: "",
            value1: "",
            value2: "",
            value3: "",
            value4: "",
            labelnum1: "",
            labelnum2: "",
            labelnum3: "",
            text: "",
            bankCard: "",
            phone: "",
            password: "",
            number: ""
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
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
                <ScrollView
                    style={{ flex: 1 }}
                    automaticallyAdjustContentInsets={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps={"handled"}
                >
                    <List renderHeader={"Awesome Form"}>
                        <InputItem
                            clear
                            value={this.state.value}
                            onChange={value => {
                                this.setState({
                                    value
                                });
                            }}
                            extra={<Text>Choose with ♡ </Text>}
                            placeholder="Animanl"
                        >
                            Fav Animal
                        </InputItem>
                        <InputItem
                            clear
                            value="Ant"
                            onChange={value => {
                                this.setState({
                                    value
                                });
                            }}
                            extra={<Text>Choose with ♡</Text>}
                            placeholder="Insect"
                            editable={false}
                        >
                            Fav Insect
                        </InputItem>
                        <InputItem
                            clear
                            value="disabled"
                            onChange={value => {
                                this.setState({
                                    value
                                });
                            }}
                            placeholder="disabled"
                            disabled
                        >
                            Fav Alien
                        </InputItem>
                        <InputItem
                            clear
                            value={this.state.value1}
                            onChange={value => {
                                this.setState({
                                    value1: value
                                });
                            }}
                            placeholder="You should know I only like water creatures"
                        />
                        <InputItem
                            defaultValue="little golden"
                            error
                            clear
                            placeholder="Fish"
                        >
                            Fav Fish
                        </InputItem>
                        <InputItem
                            clear
                            defaultValue="Lactobacillaceae..."
                            ref={el => (this.inputRef = el)}
                        >
                            Fav Bacteria
                        </InputItem>
                        <List.Item>
                            <Button
                                onPress={() => {
                                    this.inputRef.focus();
                                }}
                                type="primary"
                            >
                                Submit
                            </Button>
                        </List.Item>
                    </List>
                    <List renderHeader={"Awesome Form 2"}>
                        <InputItem
                            clear
                            error
                            value={this.state.text}
                            onChange={value => {
                                this.setState({
                                    text: value
                                });
                            }}
                            placeholder="login"
                        >
                            login
                        </InputItem>
                        <InputItem
                            clear
                            type="bankCard"
                            value={this.state.bankcard}
                            onChange={value => {
                                this.setState({
                                    bankcard: value
                                });
                            }}
                            placeholder="bankCard"
                        >
                            Bank Card
                        </InputItem>
                        <InputItem
                            clear
                            type="phone"
                            value={this.state.phone}
                            onChange={value => {
                                this.setState({
                                    phone: value
                                });
                            }}
                            placeholder="phone"
                        >
                            Phone
                        </InputItem>
                        <InputItem
                            clear
                            type="password"
                            value={this.state.password}
                            onChange={value => {
                                this.setState({
                                    password: value
                                });
                            }}
                            placeholder="password"
                        >
                            Password
                        </InputItem>
                        <InputItem
                            clear
                            type="number"
                            value={this.state.number}
                            onChange={value => {
                                this.setState({
                                    number: value
                                });
                            }}
                            placeholder="number"
                        >
                            Number
                        </InputItem>
                    </List>
                </ScrollView>
            </View>
        );
    }
}

export default FormScreen;
