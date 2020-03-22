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

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        isLoggedIn: false,
        user: '',
        password: '',
    };
  }

  register() {
    navigationRef.current?.navigate('Register', {});
  }

  login() {
    this.setState({isLoggedIn: true});
  }

  newOrder() {
    //Alert.alert('Credentials', `${this.state.email} + ${this.state.password}`);
    navigationRef.current?.navigate('DeliveryAddress', {});
  }

  confirmOrder() {
    //Alert.alert('Credentials', `${this.state.email} + ${this.state.password}`);
    navigationRef.current?.navigate('ConfirmOrder', {});
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
      {!this.state.isLoggedIn &&
        <React.Fragment>
          <Input
            style={styles.input}
            placeholder="E-Mail / Handynummer"
            onChangeText={(user) => this.setState({user})}
            value={this.state.user}
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
            </React.Fragment>
          }
          {this.state.isLoggedIn &&
            <React.Fragment>
              <Button
                  title="Neue Bestellung aufgeben"
                  style={styles.buttonLarge}
                  type="outline"
                  large
                  onPress={ () => this.newOrder() }
                />
                <Button
                    title="Erhalt bestätigen"
                    style={styles.buttonLarge}
                    type="outline"
                    large
                    onPress={ () => this.confirmOrder() }
                  />
                </React.Fragment>
              }
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
  buttonLarge: {
    width: 350,
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
