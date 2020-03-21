import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Login from './components/Login';
import Register from './components/Register';
import Order from './components/Order';
import WaitForOrder from './components/WaitForOrder';
import ConfirmOrder from './components/ConfirmOrder';
import RateOrder from './components/RateOrder';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          #wirvsvirus
        </Text>
        <Text style={styles.paragraph}>
          Pickup App
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
