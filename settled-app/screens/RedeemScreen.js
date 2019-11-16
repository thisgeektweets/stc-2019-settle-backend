import React, { Component } from 'react';
import QRCode from 'react-qr-code';

import { StyleSheet, View, TextInput, Text, Image, SafeAreaView } from 'react-native';

import { Button } from 'react-native-elements';

import { Notifications } from 'expo';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { ScrollView } from 'react-native-gesture-handler';

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
      <ScrollView>
      <View style={styles.container}>
        <Image
          style={{height: 200}}
          source={require('../assets/images/figbar.jpeg')}
        />
        <View>
        <View style={styles.header}>
          <Text style={styles.title}>Figbar</Text>
          <Text style={styles.expiry}>17/11/19 - 15:30 to 18:00</Text>
          <View style={styles.dealFloat}>
            <Text style={styles.dealPercent}>10%</Text>
            <Text style={styles.deal}>off pastries</Text>
          </View >
          </View>
          <View style={styles.content}>
            <Text>Figbar is a modern meeting place, where pre-theatre pick-me-ups shine and first dates don’t have to end.  
    It’s a place to eat, drink, and socialize after that relaxing sigh with the first bite of exactly
    what you’ve been craving.  We aim to amplify your sweet tooth and bring dessert into focus.

    Our menu is designed and created by Executive Pastry Chef Jaime Garbutt.</Text>
        </View>
        </View>
        {
          this.state.qrVis ?
            <View style={styles.padding}>
              <QRCode value={code} />
              <Text>Received Code: {code}</Text>
            </View>
          : 
          <View style={styles.padding}>
          <Button
            buttonStyle={styles.button}
            title="Redeem Code"
            onPress={this.toggleQR}
          />
          </View>
        }
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    content: {
      marginHorizontal: 20
    },
    container: {
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
      width: 300,
      justifyContent: 'center',
      backgroundColor: '#41B6A3',
      color: "#ffffff"
    },
    title: {
      fontSize: 36,
      paddingVertical: 10,
    },
    header: {
      marginHorizontal: 20,
      height: 100
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
      width: 120
    },
    dealPercent: {
      paddingTop: 5,
      color: '#ffffff',
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: "center",
    },
    deal: {
      paddingBottom: 5,
      color: '#ffffff',
      fontSize: 14,
      textAlign: "center",
      marginHorizontal: 5,
    },
    expiry: {
      paddingTop: 5,
      paddingBottom: 10,
      color: '#41B6A3',
      fontSize: 12,
    },
    padding: {
      paddingTop: 20,
      paddingBottom: 20
    }
});
