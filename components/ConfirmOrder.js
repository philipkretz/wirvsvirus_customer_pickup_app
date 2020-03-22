import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { navigationRef } from '../RootNavigation';

function Separator() {
  return (
    <View style={styles.separator}>
    </View>
  );
}

export default class ConfirmOrder extends React.Component {
  confirmDeliveration() {}

  addConflict() {}

  giveTip() {}


  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.paragraph}>
          Bitte bestätigen Sie, ob Sie die Sendung erhalten haben.
        </Text>
        <Text style={styles.paragraph}>
          Sendungs-ID: 7545685636353547
          Lieferdatum: 22. März 2020
        </Text>
        <Button
            title="Erhalt Bestätigen"
            style={styles.buttonLarge}
            large
            onPress={ () => this.confirmDeliveration() }
          />
          <Button
              title="Reklamieren"
              type="outline"
              style={styles.buttonLarge}
              large
              onPress={ () => this.addConflict() }
            />
            <Button
                title="Trinkgeld geben"
                type="outline"
                style={styles.buttonLarge}
                large
                onPress={ () => this.giveTip() }
              />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
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
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 0,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
