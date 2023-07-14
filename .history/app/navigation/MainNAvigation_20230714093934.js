import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import StackNavigation from './StackNavigation';
import TabNavigation from './TabNavigation';
import DeliveryTabNavigation from './DeliveryTabNavigation';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();
 
export default function MainNAvigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="StackNavigation" component={StackNavigation} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="DeliveryTabNavigation" component={DeliveryTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
