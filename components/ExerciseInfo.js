import React from 'react';
import {Text,StyleSheet} from 'react-native';
import Touchable from 'react-native-platform-touchable';
export default class ExerciseInfo extends React.Component {
    render(){
        return (
            <Touchable style = {styles.option}>
                <Text>
                    {this.props.exercise.name}
                </Text>
            </Touchable>
        );
    }
}

const styles = StyleSheet.create({
    option: {
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 25,
        paddingVertical: 25,
        flex:1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#EDEDED'
    }
});