import React from 'react';
import {
  Modal, TouchableHighlight, Text, View, Button, StyleSheet
} from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import { BarCodeScanner } from 'expo-barcode-scanner';

const API = 'https://polar-earth-61926.herokuapp.com/api/notifications'

export default class PushScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: {},
    };
  }

  async componentDidMount(){
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
