import React from 'react';
import {ScrollView, StyleSheet } from 'react-native';
import ExerciseExamples from '../constants/exerciseExample';
import ExerciseInfo from '../components/ExerciseInfo';
export default class ExerciseExamplesScreen extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      examples: [],
    }
    this.getExerciseExampleList = this.getExerciseExampleList.bind(this);
    this.mapExampleListToComponent = this.mapExampleListToComponent.bind(this);
  }

  getExerciseExampleList(exerciseId) {
    const examples = ExerciseExamples.filter(exercise => exerciseId === exerciseId).map(exercise => exercise.examples)[0];
    if(examples){
      this.setState({
        examples:examples,
      })
    }
  }
  componentDidMount(){
    this.getExerciseExampleList(1);
  }


  mapExampleListToComponent(){
    console.log("updating component")
    return this.state.examples.map(exercise=><ExerciseInfo exercise={exercise}/>)
  }

  render() {
    let items = this.state.examples;
    return (
      <ScrollView style={styles.container}>
        { items.map(exercise=><ExerciseInfo key={exercise.id} exercise={exercise}/> )}
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