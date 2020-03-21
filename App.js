import * as React from 'react';
import { Text, View, StyleSheet, Button, Separator } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { navigationRef } from './RootNavigation';

import Constants from 'expo-constants';

// You can import from local files
import Login from './components/Login';
import Register from './components/Register';
import Order from './components/Order';
import WaitForOrder from './components/WaitForOrder';
import ConfirmOrder from './components/ConfirmOrder';
import RateOrder from './components/RateOrder';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
          <Stack.Screen name="Order" component={Order} options={{headerShown: false}} />
          <Stack.Screen name="WaitForOrder" component={WaitForOrder} options={{headerShown: false}} />
          <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} options={{headerShown: false}} />
          <Stack.Screen name="RateOrder" component={RateOrder} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
