import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import JobScreen from '../screens/JobScreen';
import TimestampScreen from '../screens/TimestampScreen';
import ProfileScreen from '../screens/ProfileScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
  ),
};

HomeStack.path = '';
const JobStack = createStackNavigator(
  {
    Job: JobScreen,
  },
  config
);
JobStack.navigationOptions = {
  tabBarLabel: 'Job',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-list-box' : 'md-list-box'} />
  ),
};
const TimestampStack = createStackNavigator(
  {
    Timestamp: TimestampScreen,
  },
  config
);

TimestampStack.navigationOptions = {
  tabBarLabel: 'Timestamp',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-pin' : 'md-pin'} />
  ),
};

TimestampStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  JobStack,
  TimestampStack,
  ProfileStack,
});

tabNavigator.path = '';

export default tabNavigator;
