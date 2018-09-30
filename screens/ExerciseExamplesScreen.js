import React from 'react';
import { Alert, Text, View } from 'react-native';

export default class ExerciseExamplesScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>{this.props.navigation.getParam('name','Default Value')}</Text>
        </View>
      );
    }
}