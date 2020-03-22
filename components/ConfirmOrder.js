import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { navigationRef } from '../RootNavigation';

function Separator() {
  return (
    <View style={styles.separator}>
    </View>
  );
}

export default class ConfirmOrder extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Bitte bestätigen Sie, ob Sie die Sendung erhalten haben.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
