import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const Content = () => (
    <Card>
        <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={props => <Avatar.Icon {...props} icon="folder" />}
        />
        <Card.Cover
            source={{ uri: "http://lorempixel.com/420/320/abstract/" }}
        />
        <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
        </Card.Actions>
    </Card>
);

export default Content;
