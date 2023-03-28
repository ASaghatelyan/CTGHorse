import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ChatScreen} from '../screens';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ChatScreen" component={ChatScreen} /> 
    </Stack.Navigator>
  );
}

import { View, Text } from 'react-native'
import React from 'react'

export default function ChatNavigation() {
  return (
    <View>
      <Text>ChatNavigation</Text>
    </View>
  )
}
