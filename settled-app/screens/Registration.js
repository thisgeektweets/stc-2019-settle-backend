import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
} from 'react-native';

import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { MonoText } from '../components/StyledText';

const API = 'https://polar-earth-61926.herokuapp.com/api/notifications';

export default class Registration extends React.Component {
  async componentDidMount() {
    this.registerForPushNotificationsAsync();
  }

  async registerForPushNotificationsAsync() {
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
      const body = { token };
      return fetch(`${API}/register`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
    }
    alert('Must use physical device for Push Notifications');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.welcomeImage}
          source={require('./img/pendent-logo.png')}
        />
        <Text style={styles.blueText}>Please register below...</Text>
        <TextInput
          style={styles.textBox}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.textBox}
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.textBox}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.textBox}
          placeholder="Phone Number"
          autoCapitalize="none"
          placeholderTextColor="grey"
        />
        <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('Settings')}
          color="#41B6A3"
        />
        <View>
          <Text style={styles.white} />
        </View>
        <Button
          title="Sign in with Google"
          onPress={() => this.props.navigation.navigate('Settings')}
            // onPress={login}
          color="#18365B"
        />
        <View>
          <Text style={styles.white} />
        </View>
        <Button
          title="Sign in with Facebook"
          onPress={() => this.props.navigation.navigate('Settings')}
            // onPress={login}
          color="#41B6A3"
        />
      </View>
    );
  }
}

Registration.navigationOptions = {
  header: null,
};

function login() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com',
  );
}


const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  greenButton: {
    color: '#41B6A3',
    padding: 20,
  },
  blueButton: {
    color: '#18365B',
    padding: 20,
  },
  welcomeImage: {
    width: 200,
    height: 160,
    resizeMode: 'contain',
    // marginTop: 3,
    // marginLeft: 10,
    padding: 20,
    alignSelf: 'center',
  },
  textBox: {
    padding: 20,
    borderColor: '#a9a3a3',
    // shadowColor: 'grey',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // borderBottomWidth: '1',
  },
  blueText: {
    color: '#18365B',
    paddingLeft: 10,
  },
});
