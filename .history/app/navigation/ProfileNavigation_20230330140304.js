import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileScreen, SignIn, HorseRegister, MyHorses} from '../screens';

const Stack = createStackNavigator();

export default function ProfileNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="HorseRegister" component={HorseRegister} />
      <Stack.Screen name="MyHorses" component={MyHorses} />
    </Stack.Navigator>
  );
}
