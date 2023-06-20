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
