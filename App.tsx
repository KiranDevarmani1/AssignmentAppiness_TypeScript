/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react';

import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';


import LoginPage from './src/pages/loginPage';
import dashBoardPage from './src/pages/dashBoardPage';


const AppSwitchNavigator = createSwitchNavigator({
  LaunchScreen: { screen: LoginPage },
  dashBoardPage: { screen: dashBoardPage },

});
const AppContainer = createAppContainer(AppSwitchNavigator);

export default class App extends Component {
render() {

  return <AppContainer />;
}
}


