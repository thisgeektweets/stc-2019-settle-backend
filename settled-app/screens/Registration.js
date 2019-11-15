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

import { MonoText } from '../components/StyledText';

export default class Registration extends React.Component {
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
          onPress={() => this.props.navigation.navigate('Main')}
          color="#41B6A3"
        />
        <View>
          <Text style={styles.white} />
        </View>
        <Button
          title="Sign in with Google"
          onPress={() => this.props.navigation.navigate('Main')}
            // onPress={login}
          color="#18365B"
        />
        <View>
          <Text style={styles.white} />
        </View>
        <Button
          title="Sign in with Facebook"
          onPress={() => this.props.navigation.navigate('Main')}
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
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // borderBottomWidth: '1',
  },
  blueText: {
    color: '#18365B',
    paddingLeft: 10,
  },
});
