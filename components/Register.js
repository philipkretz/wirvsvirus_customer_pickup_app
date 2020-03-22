import * as React from 'react';
import { Alert, Text, View, Image, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements'
import { navigationRef } from '../RootNavigation';
import Icon from 'react-native-vector-icons/FontAwesome';
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
        passwordConfirm: '',
    };
  }

  save() {
    Alert.alert('Credentials', `${this.state.email} + ${this.state.password}`);
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
          Registrieren
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
        <Input
          style={styles.input}
          placeholder="Passwort bestätigen"
          secureTextEntry={true}
          onChangeText={(passwordConfirm) => this.setState({passwordConfirm})}
          value={this.state.passwordConfirm}
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
