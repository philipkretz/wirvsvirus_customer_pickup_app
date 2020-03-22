import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { navigationRef } from '../RootNavigation';

function Separator() {
  return (
    <View style={styles.separator}>
    </View>
  );
}

export default class DeliveryAddress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        address1: 'Musterstraße 5',
        address2: '',
        postcode: '22049',
        city: 'Hamburg',
    };
  }

  saveAddress() {
    navigationRef.current?.navigate('Order', {});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          An welche Adresse soll geliefert werden?
        </Text>
        <Input
          style={styles.input}
          placeholder="Adresszeile 1"
          onChangeText={(address1) => this.setState({address1})}
          value={this.state.address1}
        />
        <Input
          style={styles.input}
          placeholder="Adresszeile 2"
          onChangeText={(address2) => this.setState({address2})}
          value={this.state.address2}
        />
        <Input
          style={styles.input}
          placeholder="PLZ"
          onChangeText={(postcode) => this.setState({postcode})}
          value={this.state.postcode}
        />
        <Input
          style={styles.input}
          placeholder="Ort"
          onChangeText={(city) => this.setState({city})}
          value={this.state.city}
        />
        <Button
            title="Bestellen"
            style={styles.button}
            large
            onPress={ () => this.saveAddress() }
          />
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
