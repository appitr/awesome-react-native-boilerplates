import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const ActionBar = () => (
    <Appbar style={styles.bottom}>
        <Appbar.Action icon="archive" onPress={() => { }} />
        <Appbar.Action icon="mail" onPress={() => { }} />
        <Appbar.Action icon="label" onPress={() => { }} />
        <Appbar.Action icon="delete" onPress={() => { }} />
    </Appbar>
);

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    }
});

export default ActionBar;