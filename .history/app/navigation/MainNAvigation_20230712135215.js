import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StackNavigation from './StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import DeliveryTabNavigation from './DeliveryTabNavigation';
const Stack = createStackNavigator();
DeliveryTabNavigation
export default function MainNAvigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="StackNavigation" component={StackNavigation} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
