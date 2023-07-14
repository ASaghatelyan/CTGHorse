import { View, Text } from 'react-native'
import React from 'react'

export default function DelivHomeNavigation() {
  return (
    <View>
      <Text>DelivHomeNavigation</Text>
    </View>
  )
}

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack'; 
import {homeNames} from 'app/constant/naviNames';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {homeNames.map((item, index) => {
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
