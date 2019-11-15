import React from 'react';
import {
  Modal, TouchableHighlight, Text, View, Button, StyleSheet
} from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import { BarCodeScanner } from 'expo-barcode-scanner';

const API = 'https://polar-earth-61926.herokuapp.com/api'

export default class PushScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expoPushToken: 'AAAAdPhKkwY:APA91bHkJ66eO8fykRafhn_S9Ml3ZRwY4JpS1SleVvUahCITwTrtpSX2lgTDEryK6SHCBujq4benKvSyhiPZXqA2ART-sW0058so7UAHlpOYlAEjA022wAiT_u5wPwM95kOSRtA8RVuJ',
      notification: {},
    };
  }

  async componentDidMount(){
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
      const body = { token }
      return fetch(`${API}/register`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

    } else {
      alert('Must use physical device for Push Notifications');
    }
  }

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
  sendPushNotification = async () => {
    const message = {
      company: 'Figbar',
      code: 'FIBGAR10',
      body: '10% Off for pastries',
    };
    const response = await fetch(`${API}/push`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    const data = response._bodyInit;
    console.log(`Status & Response ID-> ${JSON.stringify(data)}`);
  }

  render() {
    const { navigate } = this.props.navigation;
    const code = this.props.navigation.getParam('code', 'UNSET');
    const scanned = this.props.navigation.getParam('scanned', false);
    if (this.state.notification.data) {
      let foundCode = this.state.notification.data.code
      navigate('Links', { code: foundCode })
    }
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          {scanned ?
            <Text>
              CODE:
              {code}
            </Text>
          : null}
        </View>
        <Button
          title="Scan Customer Code"
          onPress={() => navigate('Scan', {})}
        />
        <Button
          title="Send 10% Discount Deal"
          onPress={() => this.sendPushNotification()}
        />
      </View>
    );
  }
}
