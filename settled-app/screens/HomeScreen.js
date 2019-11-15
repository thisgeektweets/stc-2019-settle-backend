import React, { Component } from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import { Header, Card, Button } from 'react-native-elements';

import Constants from 'expo-constants';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: require('../assets/images/figbar.jpeg'),
    business: 'Figbar',
    dealPercent: '10%',
    deal: 'off pastries',
    expiry: '17/11/19 - 15:30 to 18:00',
    location: 'Norwich'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    image: require('../assets/images/strangers.jpg'),
    business: 'Strangers',
    dealPercent: '20%',
    deal: 'off any coffee',
    expiry: '18/11/19 - 11:00 to 14:00',
    location: 'Norwich'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    image: require('../assets/images/cafepure.jpeg'),
    business: 'Pure Cafe',
    dealPercent: '5%',
    deal: 'off your first order',
    expiry: '17/11/19 - 11:00 to 21:00',
    location: 'Norwich'
  },
];

function Item({ business, image, dealPercent, deal, expiry, location, navigate}) {
  return (
    <TouchableOpacity onPress={() => navigate('QRCode', {})}>
      <Card image={image} style={styles.item} containerStyle={styles.item}>
        <Text style={styles.title}>{business}</Text>
        <View style={styles.dealFloat}>
          <Text style={styles.dealPercent}>{dealPercent}</Text>
          <Text style={styles.deal}>{deal}</Text>
        </View>
        <Text style={styles.expiry}>Expires: {expiry}</Text>
        <Text style={styles.location}>{location}</Text>
      </Card>
    </TouchableOpacity>
  );
}


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA} 
          renderItem={({ item }) => <Item  navigate={navigate} business={item.business} image={item.image} dealPercent={item.dealPercent} deal={item.deal} location={item.location} expiry={item.expiry} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff', 
  },
  item: {
    borderRadius: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 10,
    shadowOpacity: 0.4,
    shadowRadius: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  dealFloat: {
    backgroundColor: '#41B6A3',
    position: "absolute",
    right: 10,
    paddingTop: 5,
    paddingBottom: 5,
    color: '#18365B',
    fontSize: 24,
    fontWeight: "bold",
    borderRadius: 10,
  },
  title: {
    paddingTop: 5,
    paddingBottom: 5,
    color: '#18365B',
    fontSize: 24,
    fontWeight: "bold",
  },
  dealPercent: {
    paddingTop: 20,
    paddingBottom: 5,
    color: '#18365B',
    fontSize: 24,
    fontWeight: 'bold'
  },
  deal: {
    paddingTop: 20,
    paddingBottom: 5,
    color: '#18365B',
    fontSize: 18
  },
  expiry: {
    paddingTop: 5,
    paddingBottom: 10,
    color: '#41B6A3',
    fontSize: 12
  },
  location: {
    paddingBottom: 10,
    color: '#777777',
    fontSize: 12
  }
});


HomeScreen.navigationOptions = {
  header: null,
};


