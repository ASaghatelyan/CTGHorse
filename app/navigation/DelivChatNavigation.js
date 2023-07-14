 

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {chatNames} from 'app/constant/naviNames';

const Stack = createStackNavigator();

export default function DelivChatNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F5F5F5'},
      }}>
      {chatNames.map((item, index) => {
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

