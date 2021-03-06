import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Registration from '../screens/Registration';
import PushScreen from '../screens/PushScreen';
import BarCodeScannerScreen from '../screens/BarCodeScannerScreen';
import RedeemScreen from '../screens/RedeemScreen';
import ModalScreen from '../screens/ModalScreen';
import AddCard from '../screens/AddCard.js';
import PreferencesScreen from '../screens/Preferences.js';
import MyCards from '../screens/MyCards.js';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// DefaultHome -> Login
// Login -> Settings
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    QRCode: RedeemScreen,
    Scan: BarCodeScannerScreen,
    Preferences: PreferencesScreen,
  },
  config,
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-search'
          : 'md-search'
      }
    />
  ),
};

HomeStack.path = '';

// List of Companies
const MyOffers = createStackNavigator(
  {
    Links: RedeemScreen,
  },
  config,
);

MyOffers.navigationOptions = {
  tabBarLabel: 'MyOffers',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="tag-heart" />
  ),
};

MyOffers.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    AddCard,
    MyCards,
  },
  config,
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} />
  ),
};

const BizStack = createStackNavigator(
  {
    Notification: PushScreen,
  },
  config,
);

BizStack.navigationOptions = {
  tabBarLabel: 'Business',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-business' : 'md-business'} />
  ),
};

BizStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  MyOffers,
  SettingsStack,
  BizStack,
});

tabNavigator.path = '';

export default tabNavigator;
