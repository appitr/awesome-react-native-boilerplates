import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Button, InputItem, List } from '@ant-design/react-native';

class FormScreen extends Component {

    constructor() {
        super();
        this.state = {
            value: '',
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            labelnum1: '',
            labelnum2: '',
            labelnum3: '',
            text: '',
            bankCard: '',
            phone: '',
            password: '',
            number: '',
        };
    }

    render() {
        return (
            <ScrollView
                style={{ flex: 1 }}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}
            >
                <List renderHeader={'Awesome Form'}>
                    <InputItem
                        clear
                        error
                        value={this.state.value}
                        onChange={(value) => {
                            this.setState({
                                value,
                            });
                        }}
                        extra={<Text>Choose with  ♡ </Text>}
                        placeholder="Panda..."
                    >
                        Favourite Animal
          </InputItem>
                    <InputItem
                        clear
                        value="Ant"
                        onChange={(value) => {
                            this.setState({
                                value,
                            });
                        }}
                        extra={<Text>Choose with ♡</Text>}
                        placeholder="Ant..."
                        editable={false}
                    >
                        Favourite Insect
          </InputItem>
                    <InputItem
                        clear
                        value="disabled"
                        onChange={(value) => {
                            this.setState({
                                value,
                            });
                        }}
                        extra={<Text>Choose with ♡</Text>}
                        placeholder="disabled"
                        disabled
                    >
                        Favourite Alien
          </InputItem>
                    <InputItem
                        clear
                        value={this.state.value1}
                        onChange={(value) => {
                            this.setState({
                                value1: value,
                            });
                        }}
                        placeholder="You should know I only like water creatures"
                    />
                    <InputItem
                        defaultValue="little golden one"
                        clear
                        placeholder="Shark..."
                    >
                        Favourite Fish
          </InputItem>
                    <InputItem
                        clear
                        placeholder="Lactobacillaceae..."
                        ref={(el) => (this.inputRef = el)}
                    >
                        Favourite Bacteria
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
                <List renderHeader={'Awesome Form 2'}>
                    <InputItem
                        clear
                        value={this.state.labelnum1}
                        onChange={(value) => {
                            this.setState({
                                labelnum1: value,
                            });
                        }}
                        labelNumber={2}
                        placeholder="Tulip..."
                    >
                        Flower
          </InputItem>
                    <InputItem
                        clear
                        value={this.state.labelnum2}
                        onChange={(value) => {
                            this.setState({
                                labelnum2: value,
                            });
                        }}
                        labelNumber={3}
                        placeholder="Sequoia..."
                    >
                        Tree
          </InputItem>
                    <InputItem
                        clear
                        value={this.state.labelnum3}
                        onChange={(value) => {
                            this.setState({
                                labelnum3: value,
                            });
                        }}
                        labelNumber={4}
                        placeholder="Blueberry..."
                    >
                        Fruit
          </InputItem>
                </List>
                <List renderHeader={'Awesome Form 3'}>
                    <InputItem
                        clear
                        error
                        value={this.state.text}
                        onChange={(value) => {
                            this.setState({
                                text: value,
                            });
                        }}
                        placeholder="login..."
                    >
                        login
          </InputItem>
                    <InputItem
                        clear
                        type="bankCard"
                        value={this.state.bankcard}
                        onChange={(value) => {
                            this.setState({
                                bankcard: value,
                            });
                        }}
                        placeholder="bankCard..."
                    >
                        Bank Card
          </InputItem>
                    <InputItem
                        clear
                        type="phone"
                        value={this.state.phone}
                        onChange={(value) => {
                            this.setState({
                                phone: value,
                            });
                        }}
                        placeholder="phone..."
                    >
                        Phone
          </InputItem>
                    <InputItem
                        clear
                        type="password"
                        value={this.state.password}
                        onChange={(value) => {
                            this.setState({
                                password: value,
                            });
                        }}
                        placeholder="password..."
                    >
                        Password
          </InputItem>
                    <InputItem
                        clear
                        type="number"
                        value={this.state.number}
                        onChange={(value) => {
                            this.setState({
                                number: value,
                            });
                        }}
                        placeholder="number..."
                    >
                        Number
          </InputItem>
                </List>
            </ScrollView>
        );
    }
}

export default FormScreen;