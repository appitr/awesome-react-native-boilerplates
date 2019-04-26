import React, { Component } from 'react';
import { Content, CardItem, Card, Text, Form, Item, Input, Button } from 'native-base';

class Contact extends Component {
    render() {
        return (
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
        );
    }
}

export default Contact;