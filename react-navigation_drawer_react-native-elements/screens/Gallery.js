import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Platform } from 'react-native';
import colors from '../config/colors';
import { PricingCard, Text, Header, Icon } from 'react-native-elements';

class Pricing extends Component {
    render() {
        return (
            <View>
            <Header
                statusBarProps={{ barStyle: 'light-content' }}
                barStyle="light-content"
                leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                centerComponent={{ text: 'Gallery', style: { color: '#fff' } }}
                containerStyle={{
                    backgroundColor: '#3D6DCC',
                    justifyContent: 'space-around',
                }}
            />
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.hero}>
                    <Icon color="white" name="games" size={62} />
                    <Text style={styles.heading}>Pricing</Text>
                </View>
                <PricingCard
                    color={colors.primary}
                    title="Free"
                    price="$0"
                    info={['1 User', 'Basic Support', 'All Core Features']}
                    button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                />
                <PricingCard
                    color={colors.secondary}
                    title="Starter"
                    price="$19"
                    info={['10 Users', 'Basic Support', 'All Core Features']}
                    button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                />
                <PricingCard
                    color={colors.secondary2}
                    title="Enterprise"
                    price="$49"
                    info={['100 Users', 'One on One Support', 'All Core Features']}
                    button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                />
                </ScrollView>
            </View>

        );
    }
}

Pricing.navigationOptions = {
    title: 'Pricing',
};

const styles = StyleSheet.create({
    hero: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        backgroundColor: colors.primary2,
    },
    heading: {
        color: 'white',
        marginTop: 10,
        fontSize: 22,
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 5,
        fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : null,
        color: '#27ae60',
    },
    subtitleText: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
        color: '#34495e',
    },
    viewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Pricing;
