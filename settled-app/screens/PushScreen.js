import React from 'react';
import {
  Modal, TouchableHighlight, Text, View, Button, StyleSheet
} from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import { BarCodeScanner } from 'expo-barcode-scanner';

export default class PushScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expoPushToken: '',
      notification: {},
    };
  }

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
  sendPushNotification = async () => {
    const message = {
      to: this.state.expoPushToken,
      sound: 'default',
      title: 'New Deal For Figbar',
      body: '10% Off for pastries',
      data: { data: 'FIBGAR10' },
    };
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
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
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>
            Origin:
            {this.state.notification.origin}
          </Text>
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
