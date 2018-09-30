import React from 'react';
import { Alert, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import ExerciseList from '../constants/exercises';

export default class ExerciseScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      exercises: ExerciseList,
    }
    this._onPressButton = this._onPressButton.bind(this);
    this.renderExercises = this.renderExercises.bind(this);
    this.createRows = this.createRows.bind(this);
    this._mapEachExercisesToTouchable = this._mapEachExercisesToTouchable.bind(this);
  }
  _onPressButton(name) {
    // Alert.alert("calling component")
    this.props.navigation.navigate('ExerciseExamples',{name})
  }

  _mapEachExercisesToTouchable(index) {
    return this.state.exercises
      .filter(exercise => exercise.id <= 3 * index && exercise.id > 3 * (index - 1))
      .map(exercise => {
        return (<TouchableHighlight key={exercise.id} style={styles.cell} onPress={() => this._onPressButton(exercise.name)}>
          <View>
            <Text>{exercise.name}</Text>
          </View>
        </TouchableHighlight>)
      });
  }
  renderExercises() {
    let exercises = []
    for (let index = 1; index < 4; index++) {
      exercises.push(this.createRows(index));
    }
    return exercises;
  }

  createRows(index) {
    return (
      <View key={index} style={styles.row} >
        {this._mapEachExercisesToTouchable(index)}
      </View>);
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderExercises()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    margin: 1,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    marginRight: 1,
  },
});