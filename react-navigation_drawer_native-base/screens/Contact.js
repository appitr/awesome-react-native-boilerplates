import React, { Component } from 'react';
import { Right, Container, Header, Left, Icon, Body, Content, Title, CardItem, Card, Text, Form, Item, Input, Button } from 'native-base';

class Contact extends Component {
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
                        <Title>Contact</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Card>
                        <CardItem header>
                            <Text>Form</Text>
                        </CardItem>
                        <CardItem cardBody>
                            <Form>
                                <Item>
                                    <Input placeholder="Name" />
                                </Item>
                                <Item>
                                    <Input placeholder="Surname" />
                                </Item>
                                <Item>
                                    <Input placeholder="Website" />
                                </Item>
                                <Item>
                                    <Input placeholder="Message" />
                                </Item>
                                <Item>
                                    <Input placeholder="Phone" />
                                </Item>
                            </Form>
                        </CardItem>
                        <CardItem footer>
                                <Button>
                                    <Text>Send</Text>
                                </Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default Contact;