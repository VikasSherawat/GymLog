import React from 'react';
import { Alert, Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default class ExerciseScreen extends React.Component {
  _onPressButton() {
    Alert.alert("hi");
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row} >
          <TouchableHighlight style={styles.cell} onPress={this._onPressButton}>
            <View>
              <Text>Chest</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.cell} onPress={this._onPressButton}>
            <View>
              <Text>Back</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.cell} onPress={this._onPressButton}>
            <View>
              <Text>Shoulder</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.row} >
          <TouchableHighlight style={styles.cell} onPress={this._onPressButton}>
            <View>
              <Text>Biceps</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.cell} onPress={this._onPressButton}>
            <View>
              <Text>Abs</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.cell} onPress={this._onPressButton}>
            <View>
              <Text>Triceps</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.row} >
          <TouchableHighlight style={styles.cell} onPress={this._onPressButton}>
            <View>
              <Text>Legs</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.cell} onPress={this._onPressButton}>
            <View>
              <Text>Forearms</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.cell} onPress={this._onPressButton}>
            <View>
              <Text>Cardio</Text>
            </View>
          </TouchableHighlight>
        </View>
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
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:1,
  },
  cellWhite: {
    flex: 1,
    backgroundColor: 'white',
  },
  cellGreen: {
    flex: 1,
    backgroundColor: 'green',
  },

});