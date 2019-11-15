import React, { Component } from 'react';
import QRCode from 'react-qr-code';

import { StyleSheet, View, TextInput, Button } from 'react-native';
import { Notifications } from 'expo';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class RedeemScreen extends React.Component {
  state = {
    text: 'uniqueCodeXYZ',
    notification:{},
    qrVis: false
  };

  async componentDidMount() {
    this.registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification,
    );
  }

  _handleNotification = (notification) => {
    this.setState({ notification });
  }

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS,
      );
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS,
        );
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      const token = await Notifications.getExpoPushTokenAsync();
      this.setState({ expoPushToken: token });
    } else {
      alert('Must use physical device for Push Notifications');
    }
  }

  toggleQR = () => {
    this.setState({ qrVis:true })
  }
  render() {
    let { data } = this.state.notification
    data = data === undefined ? 'uniqueCodeXYZ' : data
    return (
      <View style={styles.container}>
        {
          this.state.qrVis ?
            <QRCode
              value={data}
            />
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
