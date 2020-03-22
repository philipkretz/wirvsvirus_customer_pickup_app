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
        mobilePhone: '',
        password: '',
        passwordConfirm: '',
    };
  }

  save() {
    navigationRef.current?.navigate('DeliveryAddress', {});
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          style={styles.input}
          placeholder="E-Mail"
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <Input
          style={styles.input}
          placeholder="Handynummer"
          onChangeText={(mobilePhone) => this.setState({mobilePhone})}
          value={this.state.mobilePhone}
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
