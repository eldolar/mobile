import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './screens/Main';
import About from './screens/About';

const RootStact = createStackNavigator(
  {
    Main: { screen: (props) => <Main {...props}/> },
    About: { screen: (props) => <About {...props}/> },
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const AppStackNavigator = createAppContainer(RootStact);
export default AppStackNavigator;
