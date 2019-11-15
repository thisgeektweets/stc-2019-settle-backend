import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Registration from '../screens/Registration.js';

const AuthStack = createStackNavigator({ SignIn: Registration });
// import AuthNavigator from
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Auth: AuthStack,
    Main: MainTabNavigator,
  }, {
    initialRouteName: 'Auth',
  }),
);
