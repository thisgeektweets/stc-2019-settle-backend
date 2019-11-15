import * as WebBrowser from 'expo-web-browser';
import React from 'react';


import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import {
  View,
} from 'react-native';

export default function AddCard() {
  return (
    <View>
        <FormLabel>Sort Code</FormLabel>
        <FormInput onChangeText={someFunction}/>
        <FormValidationMessage>Error message</FormValidationMessage>

        <FormLabel>Acount Number</FormLabel>
        <FormInput onChangeText={someFunction}/>
        <FormValidationMessage>Error message</FormValidationMessage>

    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};



