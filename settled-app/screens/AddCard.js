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
  TextInput
} from 'react-native';

import {
    Button
} from 'react-native-elements';

import { MonoText } from '../components/StyledText';


export default class Card1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.welcomeImage}
          source={require('./img/pendent-logo.png')}
        />

        <View style={styles.header}>
            <Text style={styles.title}>Add Card</Text>
          </View>

        <TextInput
          style={styles.textBox}
          placeholder='Card Number'
          autoCapitalize="none"
          placeholderTextColor='grey'
        />
        <TextInput
          style={styles.textBox}
          placeholder='CVC'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='grey'
        />
        <TextInput
          style={styles.textBox}
          placeholder='Name on Card'
          autoCapitalize="none"
          placeholderTextColor='grey'
        />
        <TextInput
          style={styles.textBox}
          placeholder='Address'
          autoCapitalize="none"
          placeholderTextColor='grey'
        />
        <Button
          title='Submit'
          onPress={() => this.props.navigation.navigate('Settings', {})}
          buttonStyle={styles.greenButton}
        />
    </View>
    )
  }
}

Card1.navigationOptions = {
  header: null,
};

function login() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com'
  );
}


const styles = StyleSheet.create({
    header: {
        padding: 20,
    },
    title: {
        color: '#18365B',
        fontSize: 20,
        fontWeight: 'bold',
      },
    subtitle: {
        color: '#18365B',
        fontSize: 16,
        paddingVertical: 10,
    },
   greenButton: {
    paddingTop: 10,
    justifyContent: 'center',
    backgroundColor: '#41B6A3',
    },
  container: {
    margin: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
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
  },
  blueText: {
    color: '#18365B',
    paddingLeft: 10
  },
});
