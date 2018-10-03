import React from 'react';
import { Text, View } from 'react-native';

export default class MyWorkoutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>My WorkOut Plan</Text>
      </View>
    );
  }
}