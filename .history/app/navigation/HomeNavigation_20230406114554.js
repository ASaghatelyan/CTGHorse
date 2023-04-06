import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, HorseInfo, OwnerProfile} from '../screens';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HorseInfo" component={HorseInfo} />
      <Stack.Screen name="OwnerProfile" component={OwnerProfile} />
    </Stack.Navigator>
  );
}
