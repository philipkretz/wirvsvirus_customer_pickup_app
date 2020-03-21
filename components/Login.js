import * as React from 'react';
import { Alert, Text, View, StyleSheet, Image, TextInput } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { navigationRef } from '../RootNavigation';

function Separator() {
  return (
    <View style={styles.separator}>
    </View>
  );
}

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: '',
    };
  }

  register() {
    navigationRef.current?.navigate('Register', {});
  }

  login() {
    Alert.alert('Credentials', `${this.state.email} + ${this.state.password}`);
    navigationRef.current?.navigate('Order', {});
  }

  render() {
    return (
      <View style={styles.container}>
          <Image
            style={{marginBottom: 20}}
            width={140}
            height={130}
            source={require('../assets/logo.png')}
            />

          <Text style={styles.paragraph}>
              Kunden-App
          </Text>
        <Separator />
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
            title="Anmelden"
            style={styles.button}
            large
            onPress={ () => this.login() }
          />
          <Separator />
          <Button
              title="Registrieren"
              style={styles.button}
              type="outline"
              large
              onPress={ () => this.register() }
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
