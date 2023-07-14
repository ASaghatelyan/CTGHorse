import { View, Text } from 'react-native'
import React from 'react'

export   function DelivProfileNavigation() {
  return (
    <View>
      <Text>DelivProfileNavigation</Text>
    </View>
  )
}

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {profileNames} from 'app/constant/naviNames';

const Stack = createStackNavigator();

export default function ProfileNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F5F5F5'},
      }}>
      {profileNames.map((item, index) => {
        return (
          <Stack.Screen
            name={item.name}
            component={item.component}
            key={index}
          />
        );
      })}
    </Stack.Navigator>
  );
}
