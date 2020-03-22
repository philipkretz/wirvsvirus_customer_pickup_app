import * as React from 'react';
import { Alert, Text, ScrollView, View, StyleSheet, Image, Picker } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { navigationRef } from '../RootNavigation';

function Separator() {
  return (
    <View style={styles.separator}>
    </View>
  );
}

const segmentsData = [
  { 'id': '1', 'label': 'Arzneimittel' },
  { 'id': '2', 'label': 'Lebensmittel' },
  { 'id': '3', 'label': 'weitere Konsumgüter' },
];

const storesData = [
  { 'id': '1', 'label': 'Buchenapotheke' },
  { 'id': '2', 'label': 'Apotheke an der Linde' },
  { 'id': '3', 'label': 'Dr. Mustermann' },
];

export default class Order extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      segmentsData: segmentsData,
      storesData: storesData,
      segment: 1,
      currentArticle: '',
      amount: '1',
      store: 1,
      articles: [],
    };
  }

  onChangeSegment(item) {
    this.setState({ segment: item });
  }

  onChangeStore(item) {
    this.setState({ store: item });
  }

  addToList() {
    if (this.state.segment == null || this.state.store == null) {
      Alert.alert('Bitte wählen Sie zuerst einen Bereich und einen Laden aus.');
      return;
    }

    let article = this.state.currentArticle;
    this.state.articles.push(article);
    this.state.currentArticle = '';
    Alert.alert('Einkaufsliste', `${this.state.amount}x ${article} wurde der Einkaufsliste hinzugefügt!`);
  }

  sendOrder() {
    navigationRef.current?.navigate('WaitForOrder', {});
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.paragraph}>
            Schreiben Sie hier Ihren Einkaufszettel und bestellen Sie.
          </Text>
          <View style={styles.rowPicker}>
            <Text style={styles.labelPicker}>
              Bereich:
            </Text>
            <Picker
              style={styles.picker}
              selectedValue={this.state.segment }
              onValueChange={(item) => this.onChangeSegment(item)}>
              {this.state.segmentsData.map((v)=>{
                 return <Picker.Item label={v.label} value={v.id} key={v.id} />
                })}
          </Picker>
        </View>
        <View style={styles.rowPicker}>
          <Text style={styles.labelPicker}>
            Laden:
          </Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.store }
            onValueChange={(index) => this.onChangeStore(index)}>
            { this.state.storesData.map( (v)=>{
               return <Picker.Item label={v.label} value={v.id} key={v.id} />
              })}
          </Picker>
        </View>
        <View style={styles.rowArticle}>
            <Text style={styles.labelAmount}>
              Anzahl:
            </Text>
            <Input
              style={styles.numberInput}
              containerStyle={styles.numberInput}
              value={this.state.amount}
              keyboardType='numeric'
              onChangeText={(amount) => this.setState({amount:amount})}
            />
            <Input
              style={styles.inputArticle}
              containerStyle={styles.inputArticle}
              placeholder='freie Artikelbezeichnung'
              value={this.state.currentArticle}
              onChangeText={(article) => this.setState({currentArticle:article})}
            />
          </View>
          <Button
              style={styles.button}
              title='Zur Liste hinzufügen'
              onPress={ () => this.addToList() }
              large
            />
          <Button
              style={styles.button}
              title='Bestellung abschicken'
              onPress={ () => this.sendOrder() }
              type='outline'
              large
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
  inputArticle: {
      marginTop: 10,
      width: 150,
      flex: 3,
  },
  rowPicker: {
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flex: 3,
      flexDirection: 'row',
      marginTop: 10,
      textAlign: 'left',
      marginBottom: 120,
  },
  rowArticle: {
      flex: 5,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginTop: -20,
      marginBottom: 0,
  },
  numberInput: {
      flex: 1,
      marginTop: 10,
      width: 50,
  },
  picker: {
      width: 150,
      marginTop: -80,
      flex: 3,
  },
  button: {
    width: 350,
    padding: 10,
    marginTop: 10,
    marginBottom: 0,
    textAlign: 'center',
  },
  labelPicker: {
    flex: 1,
    width: 100,
    textAlign: 'left',
    marginTop: 19,
    marginBottom: 0,
    fontSize: 14,
    fontWeight: 'bold',
  },
  labelAmount: {
    flex: 1,
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 'bold',
    width: 80,
    marginTop: 21,
    height: 30,
  },
  paragraph: {
    width: 300,
    textAlign: 'left',
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'normal',
  },
});
