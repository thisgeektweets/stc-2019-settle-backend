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
  TextInput,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { Button } from 'react-native-elements';

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
        <View>
          <Text style={styles.white} />
        </View>
        <Button
          title="Sign in"
          onPress={() => this.props.navigation.navigate('Settings')}
          buttonStyle={styles.greenButton}
        />
        <View>
          <Text style={styles.white} />
        </View>
        <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('Settings')}
          buttonStyle={styles.blueButton}
        />
        <View style={styles.centre}>
          <Ionicons name="logo-facebook" size={40} color="#18365B" />
          <Ionicons name="logo-google" size={40} color="#18365B" />
        </View>
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
  centre: {
    justifyContent: 'center',
  },
  button: {
    width: 300,
    justifyContent: 'center',
    backgroundColor: '#41B6A3',
    color: "#ffffff"
  },
  container: {
    margin: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  greenButton: {
    paddingTop: 10,
    justifyContent: 'center',
    backgroundColor: '#41B6A3',
  },
  blueButton: {
    paddingTop: 10,
    justifyContent: 'center',
    backgroundColor: '#18365B',
  },
  welcomeImage: {
    width: 200,
    height: 160,
    resizeMode: 'contain',
    padding: 20,
    alignSelf: 'center',
  },
  textBox: {
    padding: 10,
    borderColor: '#18365B',
  },
  blueText: {
    color: '#18365B',
    paddingLeft: 10,
  },
});
