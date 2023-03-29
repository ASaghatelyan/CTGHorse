import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileScreen,SignIn} from '../screens';

const Stack = createStackNavigator();

export default function ProfileNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
