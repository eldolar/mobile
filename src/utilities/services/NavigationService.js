import { NavigationActions } from 'react-navigation';

const store = {
  AppStackNavigator: null,
  AppSwitchNavigator: null,
  AppTabNavigator: null,
};

export function navigateTo(navigator, screen, params) {
  if (!params) params = {};

  if (this.navigator) {
    const action = NavigationActions.navigate({
      routeName: screen,
      params,
    });
    navigator.dispatch(action);
  }
}

export function navigateSwitchTo(screen, params) {
  navigateTo(store.AppSwitchNavigator, screen, params);
}

export function navigateStackTo(screen, params) {
  navigateTo(store.AppStackNavigator, screen, params);
}

export default store;
