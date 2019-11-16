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

import {CheckBox} from 'react-native-elements';

import { MonoText } from '../components/StyledText';

export default class Preferences extends React.Component {
  state = {
    restaurants: false,
    coffee: false,
    lunches: false,
    gifts: false,
    experiences: false,
  }

  check = (name, value) => {
    this.setState({[name]: value})
  }

  render() {
    return (
      <View style={styles.container}>
          <Text></Text>
          <Text>Preferences - Tell us what you like! :-)</Text>
          <Text></Text>

          <CheckBox
            title='Resturants'
            checked={this.state.restaurants}
            onPress={() => this.check('restaurants', !this.state.restaurants)}          
          />
          <CheckBox
            title='Coffee'
            checked={this.state.coffee}
            onPress={() => this.check('coffee', !this.state.coffee)}          
          />
          <CheckBox
            title='Lunches'
            checked={this.state.lunches}
            onPress={() => this.check('lunches', !this.state.lunches)}             />
          <CheckBox
            title='Gifts'
            checked={this.state.gifts}
            onPress={() => this.check('gifts', !this.state.gifts)}   
          />
          <CheckBox
            title='Experiences'
            checked={this.state.experiences}
            onPress={() => this.check('experiences', !this.state.experiences)}             />
          <Button
            title='Save'
            onPress={() => this.props.navigation.navigate('Settings', {})}
            // onPress={login}
            color='#41B6A3'
          />
        </View>
    )
  }
}

Preferences.navigationOptions = {
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
    // backgroundColor: '#fff',
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
