//Import library for Creating component
import React from 'react';
//import ReactNative from 'react-native';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

//Create a component

const App = () => {
    return (
        <Header />
        // <Text>Some Text here</Text>
    );
};

//Render it to device
AppRegistry.registerComponent('album', () => App);






/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
