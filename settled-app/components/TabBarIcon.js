import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  if (props.name === 'tag-heart') {
    return (
      <MaterialCommunityIcons
        name={props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
