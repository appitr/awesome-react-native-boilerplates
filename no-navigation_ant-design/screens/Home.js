import React from 'react';
import { View } from 'react-native';
import { DatePicker, List, Pagination, Picker, SearchBar, WhiteSpace } from '@ant-design/react-native';
import Content from '../components/Content';

const Home = () => (
    <View style={{flex:1}}>
        <SearchBar placeholder="Search" />
        <WhiteSpace />
        <Content />
    </View>
);

export default Home;