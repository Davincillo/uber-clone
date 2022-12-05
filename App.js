import React from 'react';
import { Stylesheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';

// 1} Set up redux

export default function App() {
    return (
        <Provider store={store}>
            <HomeScreen/>
        </Provider>
    );


}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        aligIntems: 'center',
        justifyContent: 'center',
    },

});