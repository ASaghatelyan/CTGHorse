import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ChatScreen, OpenChat} from '../screens';

const Stack = createStackNavigator();

export default function ChatNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F5F5F5'},
      }}>
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="OpenChat" component={OpenChat} />
    </Stack.Navigator>
  );
}
