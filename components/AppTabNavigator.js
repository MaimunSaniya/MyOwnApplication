import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Workout from '../screens/Workout';
import Progress from '../screens/Progress';

export const AppTabNavigator = createBottomTabNavigator({
  Progress: {
    screen: Progress,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../progress.gif')}
          style={{ width: 90, height: 30}}
        />
      ),
      tabBarLabel: 'Progress',
    },
  },
  Workout: {
    screen: Workout,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../workout.gif')}
          style={{ width: 85, height: 30}}
        />
      ),
      tabBarLabel: 'Workout',
    },
  },
});
