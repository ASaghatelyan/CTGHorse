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
