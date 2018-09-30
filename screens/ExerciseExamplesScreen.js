import React from 'react';
import { ScrollView, Text, View,StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';

export default class ExerciseExamplesScreen extends React.Component {
  constructor(props){
    super(props);
    
  }
    render() {
      return (
        <ScrollView style={styles.container}>
          <Text>{this.props.navigation.getParam('id','Default Value')}</Text>
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
})