import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { navigationRef } from '../RootNavigation';

function Separator() {
  return (
    <View style={styles.separator}>
    </View>
  );
}

export default class WaitForOrder extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Ihre Bestellung wurde aufgenommen.
          Der Händler meldet sich bald bei Ihnen zurück und bespricht mit Ihnen die weiteren Details zur Auslieferung.
        </Text>
        <Image
          style={styles.waitForOrderLogo}
          width={240}
          height={320}
          source={require('../assets/lilly.jpg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  waitForOrderLogo: {
    resizeMode: 'stretch',
    borderWidth: 1,
    borderColor: '#777777',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
    height: '100%',
  },
  separator: {
    marginVertical: 12,
  },
  input: {
      marginTop: 10,
      width: 300,
  },
  button: {
    width: 200,
    padding: 10,
    marginTop: 50,
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 60,
    marginTop: 0,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
