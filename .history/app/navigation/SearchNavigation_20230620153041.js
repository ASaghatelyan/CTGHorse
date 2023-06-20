import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {searchNames} from 'app/constant/naviNames';

const Stack = createStackNavigator();

export default function SearchNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F5F5F5'},
      }}>
      {searchNames.map((item, index) => {
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
