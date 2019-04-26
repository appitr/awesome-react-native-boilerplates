import React from "react";
import { Dimensions, StyleSheet, ScrollView, Text } from "react-native";

import { Link } from "react-router-native";
const window = Dimensions.get("window");

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: "lightgrey",
        padding: 20,
        marginTop: 40
    },
    item: {
        paddingTop: 5
    }
});

export default function Menu({ onToggle }) {
    return (
        <ScrollView scrollsToTop={false} style={styles.menu}>
            <Link onPress={onToggle} to="/" style={styles.item}>
                <Text>Home</Text>
            </Link>
            <Link onPress={onToggle} to="/page1" style={styles.item}>
                <Text>Page1</Text>
            </Link>
            <Link onPress={onToggle} to="/page2" style={styles.item}>
                <Text>Page2</Text>
            </Link>
            <Link onPress={onToggle} to="/page3" style={styles.item}>
                <Text>Page3</Text>
            </Link>
            <Link onPress={onToggle} to="/page4" style={styles.item}>
                <Text>Page4</Text>
            </Link>
        </ScrollView>
    );
}
