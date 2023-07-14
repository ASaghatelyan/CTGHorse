import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {deliveriProfileNames} from 'app/constant/naviNames';

const Stack = createStackNavigator();

export default function DelivProfileNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F5F5F5'},
      }}>
      {deliveriProfileNames.map((item, index) => {
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
