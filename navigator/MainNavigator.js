import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import ExerciseExamplesScreen from '../screens/ExerciseExamplesScreen';
import SettingsScreen from '../screens/SettingScreen';
import MyWorkoutScreen from '../screens/MyWorkout';
import {Platform}  from 'react-native';

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
});

const ExerciseStack = createStackNavigator({
    ExerciseScreen: { screen: ExerciseScreen },
    ExerciseExamples: {screen:ExerciseExamplesScreen},
},
);

const MyWorkoutStack = createStackNavigator({
    MyWorkout: { screen: MyWorkoutScreen },
});

export default createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    MyWorkout: { screen: MyWorkoutStack },
    Exercises: { screen: ExerciseStack },
    Settings: { screen: SettingsStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if(routeName==='Exercises'){
            iconName = `dumbbell`;
            return <MaterialCommunityIcons name = {iconName} size={25} color={tintColor}/>
        }else{
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    mode: Platform.OS === 'ios' ? 'modal':'none',
  }
);
