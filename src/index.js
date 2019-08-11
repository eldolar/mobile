import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './routes';
import configureStore from './store';
import NavigationService from './utilities/services/NavigationService';
import Mainn from './screens/Main';

const store = configureStore();

class AppEntryPoint extends React.Component {

  bootCheck(navigator) {
    NavigationService.AppSwitchNavigator = navigator;
    this.navigator = navigator;
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Routes  ref={nav => this.bootCheck(nav) }/>
        </View>
      </Provider>
    );
  }
}

export default AppEntryPoint;
