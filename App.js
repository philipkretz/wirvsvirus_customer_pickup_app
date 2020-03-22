import * as React from 'react';
import { Text, View, StyleSheet, Button, Separator } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { navigationRef } from './RootNavigation';

import Constants from 'expo-constants';

// You can import from local files
import Home from './components/Home';
import Register from './components/Register';
import Order from './components/Order';
import DeliveryAddress from './components/DeliveryAddress';
import Payment from './components/Payment';
import WaitForOrder from './components/WaitForOrder';
import ConfirmOrder from './components/ConfirmOrder';
import RateOrder from './components/RateOrder';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false, title: 'Start'}} />
          <Stack.Screen name="Register" component={Register} options={{headerShown: true, title: 'Registrieren'}} />
          <Stack.Screen name="Order" component={Order} options={{headerShown: true, title: 'Einkaufszettel'}} />
          <Stack.Screen name="DeliveryAddress" component={DeliveryAddress} options={{headerShown: true, title: 'Adresse'}} />
          <Stack.Screen name="Payment" component={Payment} options={{headerShown: true, title: 'Bezahlung'}} />
          <Stack.Screen name="WaitForOrder" component={WaitForOrder} options={{headerShown: true, title: 'Warten auf Bestellung'}} />
          <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} options={{headerShown: true, title: 'Erhalt bestätigen'}} />
          <Stack.Screen name="RateOrder" component={RateOrder} options={{headerShown: true, title: 'Bewerten Sie Ihre Bestellung'}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
