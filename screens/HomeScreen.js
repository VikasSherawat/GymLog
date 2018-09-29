import React from 'react';
import { Button, Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Gym Home!</Text>
        </View>
      );
    }
}