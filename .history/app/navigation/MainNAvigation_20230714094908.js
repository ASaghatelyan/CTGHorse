import   React,{useER} from 'react';

import StackNavigation from './StackNavigation';
import TabNavigation from './TabNavigation';
import DeliveryTabNavigation from './DeliveryTabNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
const Stack = createStackNavigator();

 
export default function MainNAvigation() {
   // dispatch({
      //   type: 'SET_TOASTMESS',
      //   payload: notification,
      // });
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
