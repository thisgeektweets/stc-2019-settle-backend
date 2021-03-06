import React, { Component } from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';



import {
  SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity, Platform
} from 'react-native';

import { Header, Card, Button } from 'react-native-elements';

import Constants from 'expo-constants';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

function Item({
  business, image, dealPercent, deal, redeemed, expiry, location, navigate, code,
}) {
  return (
    <TouchableOpacity onPress={() => navigate('QRCode', { code })}>
      <Text>  </Text>
      <Card image={image} style={styles.item} containerStyle={styles.item}>
        <Text style={styles.title}>{business}</Text>
        <View style={styles.dealFloat}>
          <Text style={styles.dealPercent}>{dealPercent}</Text>
          <Text style={styles.deal}>{deal}</Text>
        </View>
        <Text style={styles.redeemed}>{redeemed} redeemed</Text>
        <Text style={styles.expiry}>Expires: {expiry}</Text>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name={Platform.OS === 'ios' ? 'ios-pin' : 'md-pin'} size={15} color="#777777"/>
          <Text style={styles.location}>  {location}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const figbar = {
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  image: require('../assets/images/figbar.jpeg'),
  business: 'Figbar',
  dealPercent: '10%',
  deal: 'off pastries',
  redeemed: '22 out of 30',
  expiry: '17/11/19 - 15:30 to 18:00',
  location: 'Norwich',
};

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: 'uniqueCodeXYZ1',
      found: false,
      notification: {},
      offers: [
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          image: require('../assets/images/strangers.jpg'),
          business: 'Strangers',
          dealPercent: '20%',
          deal: 'off any coffee',
          redeemed: '26 out of 50',
          expiry: '18/11/19 - 11:00 to 14:00',
          location: 'Norwich',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          image: require('../assets/images/cafepure.jpeg'),
          business: 'Pure Cafe',
          dealPercent: '5%',
          deal: 'off traybakes',
          redeemed: '4 out of 15',
          expiry: '17/11/19 - 11:00 to 21:00',
          location: 'Norwich',
        },
      ],
    };
  }

  async componentDidMount() {
    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification,
    );
  }

  _handleNotification = (notification) =>{
    this.setState({ notification });
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.found === false && this.state.notification.data) {
      const foundCode = this.state.notification.data.code;
      this.setState({
        offers: [figbar, ...this.state.offers],
        code: foundCode,
        found: true
      });
    }
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.offers}
          renderItem={({ item }) => <Item navigate={navigate} code={this.state.code} business={item.business} image={item.image} dealPercent={item.dealPercent} deal={item.deal} location={item.location} redeemed={item.redeemed}  expiry={item.expiry} />}
          keyExtractor={(item) => item.id}
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
    bottom: 10,
  },
  dealFloat: {
    backgroundColor: '#41B6A3',
    position: 'absolute',
    top: 10,
    right: 10,
    bottom: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 24,
    fontWeight: 'bold',
    borderRadius: 10,
    width: 120,
  },
  title: {
    paddingTop: 5,
    paddingBottom: 5,
    color: '#18365B',
    fontSize: 24,
    fontWeight: 'bold',
  },
  dealPercent: {
    paddingTop: 15,
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  deal: {
    paddingBottom: 5,
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  expiry: {
    paddingTop: 5,
    paddingBottom: 10,
    color: '#41B6A3',
    fontSize: 12,
  },
  location: {
    paddingBottom: 10,
    color: '#777777',
    fontSize: 12,
  },
  image: {
    borderRadius: 10,
  },
  redeemed: {
    paddingTop: 5,
    color: '#41B6A3',
    fontSize: 14,
    fontWeight: 'bold'
  }
});


HomeScreen.navigationOptions = {
  header: null,
};
