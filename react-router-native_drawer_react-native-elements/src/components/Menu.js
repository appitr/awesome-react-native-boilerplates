import React from "react";
import { Dimensions, StyleSheet, ScrollView, Text } from "react-native";

import { Link } from "react-router-native";
const window = Dimensions.get("window");

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: "pink",
        padding: 20
    },
    item: {
        paddingTop: 5
    }
});

export default function Menu({ onToggle }) {
    return (
        <ScrollView scrollsToTop={false} style={styles.menu}>
            <Link onPress={onToggle} to="/" style={styles.item}>
                <Text>Content</Text>
            </Link>
            <Link onPress={onToggle} to="/userlist" style={styles.item}>
                <Text>Userlist</Text>
            </Link>
        </ScrollView>
    );
}
