import React, { Component } from 'react';
import { Header, Left, Right, Body, Title, Button, Icon } from 'native-base';

class HeaderSection extends Component {
    render() {
        return (
            <Header hasSegment>
                <Left>
                    <Button transparent>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title align="center">Segments</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name="search" />
                    </Button>
                </Right>
            </Header>
        );
    }
}

export default HeaderSection;