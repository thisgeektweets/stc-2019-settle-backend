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
  TextInput
} from 'react-native';

import { MonoText } from '../components/StyledText';


export default class Preferences extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>Preferences</Text>
          <Button
            title='OK'
            onPress={() => this.props.navigation.navigate('Settings', {})}
            // onPress={login}
            color='#18365B'
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
    paddingLeft: 10
  },
});
