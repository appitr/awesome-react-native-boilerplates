import React from "react";
import { View } from "react-native";
import { Button, SearchBar, WhiteSpace } from "@ant-design/react-native";
import Content from "../components/Content";

const Home = () => (
    <View style={{ flex: 1 }}>
        <SearchBar placeholder="Search" />
        <WhiteSpace />
        <Button>Start</Button>
        <WhiteSpace />
        <Content />
    </View>
);

export default Home;
