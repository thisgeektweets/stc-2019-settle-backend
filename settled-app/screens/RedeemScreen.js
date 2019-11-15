import React, { Component } from 'react';
import QRCode from 'react-qr-code';

import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { Notifications } from 'expo';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const DEFAULT = "uniqueCodeXYZ"

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
        {
          this.state.qrVis ?
            <View>
              <QRCode value={code} />
              <Text>Received Code: {code}</Text>
            </View>
          : <Button
            title="Redeem Code"
            onPress={this.toggleQR}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});
