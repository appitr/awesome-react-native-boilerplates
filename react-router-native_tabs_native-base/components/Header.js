import React, { Component } from 'react';
import { Header, Left, Right, Body, Title, Button, Icon } from 'native-base';
import { withRouter } from "react-router-native";

const pages = {
    '/': 'Home',
    '/list': 'List',
    '/gallery': 'Gallery',
    '/contact': 'Contact',
};

class HeaderSection extends Component {
    render() {
        const { match, location, history } = this.props;
        return (
            <Header hasSegment>
                <Left>
                    <Button transparent onPress={()=> this.props.history.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title align="center">{pages[location.pathname]}</Title>
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

export default withRouter(HeaderSection);