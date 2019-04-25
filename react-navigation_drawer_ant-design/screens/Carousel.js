import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Carousel, WingBlank, Flex, Button, Icon } from '@ant-design/react-native';

class CarouselScreen extends Component {
    onHorizontalSelectedIndexChange(index) {
        console.log('horizontal change to', index);
    }
    onVerticalSelectedIndexChange(index) {
        console.log('vertical change to', index);
    }
    render() {
        return (
            <View>
                <WingBlank style={{ marginTop: 25, marginBottom: 10 }}>
                    <Flex>
                        <Flex align="start" >
                            <Button size="small" onPress={() => this.props.navigation.openDrawer()}>
                                <Icon name='menu' />
                            </Button>
                        </Flex>
                    </Flex>
                </WingBlank>
                <View style={{ paddingHorizontal: 15 }}>
                    <Text>horizontal</Text>
                    <Carousel
                        style={styles.wrapper}
                        selectedIndex={2}
                        autoplay
                        infinite
                        afterChange={this.onHorizontalSelectedIndexChange}
                    >
                        <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
                            <Text>Carousel 1</Text>
                        </View>
                        <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
                            <Text>Carousel 2</Text>
                        </View>
                        <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
                            <Text>Carousel 3</Text>
                        </View>
                        <View style={[styles.containerHorizontal, { backgroundColor: 'aqua' }]}>
                            <Text>Carousel 4</Text>
                        </View>
                        <View style={[styles.containerHorizontal, { backgroundColor: 'fuchsia' }]}>
                            <Text>Carousel 5</Text>
                        </View>
                    </Carousel>
                    <Text>Carousel will adjust height based on content</Text>
                    {/* <Text>{React.Children.count(this.props.children)}</Text> */}
                </View>
                <View style={{ paddingHorizontal: 15 }}>
                    <Text>vertical</Text>
                    <Carousel
                        style={styles.wrapper}
                        selectedIndex={2}
                        autoplay
                        infinite
                        afterChange={this.onVerticalSelectedIndexChange}
                        vertical
                    >
                        <View style={[styles.containerVertical, { backgroundColor: 'red' }]}>
                            <Text>Carousel 1</Text>
                        </View>
                        <View style={[styles.containerVertical, { backgroundColor: 'blue' }]}>
                            <Text>Carousel 2</Text>
                        </View>
                        <View style={[styles.containerVertical, { backgroundColor: 'yellow' }]}>
                            <Text>Carousel 3</Text>
                        </View>
                        <View style={[styles.containerVertical, { backgroundColor: 'aqua' }]}>
                            <Text>Carousel 4</Text>
                        </View>
                        <View style={[styles.containerVertical, { backgroundColor: 'fuchsia' }]}>
                            <Text>Carousel 5</Text>
                        </View>
                    </Carousel>
                    <Text>Use the height of the first child as the height of the Carousel</Text>
                    {/* <Text>{React.Children.count(this.props.children)}</Text> */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
    },
    containerHorizontal: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    containerVertical: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    text: {
        color: '#fff',
        fontSize: 36,
    },
});

export default CarouselScreen;