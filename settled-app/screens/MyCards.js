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

import { Button } from 'react-native-elements';

import { MonoText } from '../components/StyledText';


export default class MyCards extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.white}></Text>
        </View>
        <Image
          style={styles.welcomeImage}
          source={require('./img/monzo.png')}
        />
        <Button
            title='Settings'
            onPress={() => this.props.navigation.navigate('Settings', {})}
            buttonStyle={styles.greenButton}
          />
      </View>
    )
  }
}

MyCards.navigationOptions = {
  header: null,
};

function login() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com'
  );
}


const styles = StyleSheet.create({
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
    width: 250,
    height: 160,
    resizeMode: 'contain',
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
    padding: 20
  },
});
