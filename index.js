//Import library for Creating component
import React from 'react';
//import ReactNative from 'react-native';
import { Text, AppRegistry, View } from 'react-native';
import AlbumHeader from './src/components/album-header';
import AlbumBody from './src/components/album-body';

//Create a component

const App = () => {
    return (
        <View>
        <AlbumHeader headerText={'Albums'}/>
        <AlbumBody />
        </View>
        
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
