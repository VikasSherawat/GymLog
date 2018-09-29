import React from 'react';
import MainNavigator from './navigator/MainNavigator';
import { View } from 'react-native';
import Sample from './Sample';

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator/>
    );
  }
}