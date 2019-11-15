import React, { Component } from 'react';
import QRCode from 'react-qr-code';

import { StyleSheet, View, TextInput, Button, Text, Image } from 'react-native';
import { Notifications } from 'expo';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const DEFAULT = "uniqueCodeXYZ"

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: require('../assets/images/figbar.jpeg'),
    business: 'Figbar',
    dealPercent: '10%',
    deal: 'off pastries',
    expiry: '17/11/19 - 15:30 to 18:00',
    location: 'Norwich',
  }
]

export default class RedeemScreen extends React.Component {
  state = {
    qrVis: false
  }

  toggleQR = () => {
    this.setState({ qrVis:true })
  }
  render() {
    let code = this.props.navigation.getParam('code', DEFAULT);
    return (
      <View style={styles.container}>
        <Image
          style={{height: 200}}
          source={require('../assets/images/figbar.jpeg')}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Figbar</Text>
          <Text>Figbar is a modern meeting place, where pre-theatre pick-me-ups shine and first dates don’t have to end.  
  It’s a place to eat, drink, and socialize after that relaxing sigh with the first bite of exactly
  what you’ve been craving.  We aim to amplify your sweet tooth and bring dessert into focus.

  Our menu is designed and created by Executive Pastry Chef Jaime Garbutt.</Text>
        </View>
        {
          this.state.qrVis ?
            <View>
              <QRCode value={code} />
              <Text>Received Code: {code}</Text>
            </View>
          : <Button
            backgroundColor='#41B6A3'
            title="Redeem Code"
            onPress={this.toggleQR}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    content: {
      marginHorizontal: 20
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
    },
    button: {
      backgroundColor: '#41B6A3',
      color: "#ffffff"
    },
    title: {
      fontSize: 36,
      paddingVertical: 10,
    },
});
