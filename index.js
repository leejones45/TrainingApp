// Import a library to help create a component
import React from 'react';
import { AppRegistry, View, YellowBox } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//This is to disable the React lifecycle depreciate warnings until
//React Native sort out the issue
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires'
]);

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Lee & Lyndseys Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
