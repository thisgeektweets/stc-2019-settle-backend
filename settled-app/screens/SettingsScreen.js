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


export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.welcomeImage}
          source={require('./img/pendent-logo.png')}
        />
        <Text></Text>
          <Button
            title='Add Card'
            onPress={() => this.props.navigation.navigate('AddCard', {})}
            buttonStyle={styles.greenButton}
          />
        <Text></Text>
          <Button
            title='My Cards'
            onPress={() => this.props.navigation.navigate('MyCards', {})}
            buttonStyle={styles.greenButton}
          />
          <Text></Text>
          <Button
            title='Preferences'
            onPress={() => this.props.navigation.navigate('Preferences', {})}
            buttonStyle={styles.greenButton}
          />
        </View>
    )
  }
}

Settings.navigationOptions = {
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
