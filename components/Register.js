import * as React from 'react';
import { Alert, Text, View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements'
import { navigationRef } from '../RootNavigation';
function Separator() {
  return (
    <View style={styles.separator}>
    </View>
  );
}

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: '',
        address: '',
        firstName: '',
        lastName: '',
    };
  }

  save() {
    Alert.alert('Credentials', `${this.state.firstName} + ${this.state.lastName} + ${this.state.address} + ${this.state.email} + ${this.state.password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Registrieren
        </Text>

        <Separator />
        <Input
          style={styles.input}
          placeholder="Vorname"
          onChangeText={(firstName) => this.setState({firstName})}
          value={this.state.firstName}
        />
        <Input
          style={styles.input}
          placeholder="Nachname"
          onChangeText={(lastName) => this.setState({lastName})}
          value={this.state.lastName}
        />
        <Input
          style={styles.input}
          placeholder="Lieferadresse"
          onChangeText={(address) => this.setState({address})}
          value={this.state.address}
        />
        <Input
          style={styles.input}
          placeholder="E-Mail"
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <Input
          style={styles.input}
          placeholder="Passwort"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button
            title="Speichern"
            style={styles.button}
            large
            onPress={ () => this.save() }
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
    backgroundColor: '#4fdbffff',
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
    backgroundColor: '#4fdbffff',
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
