import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchScreen,Filter,HorseInfo,FilterDetiles} from '../screens';

const Stack = createStackNavigator();

export default function SearchNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="HorseInfo" component={HorseInfo} />
      <Stack.Screen name="FilterDetiles" component={FilterDetiles} />
    </Stack.Navigator>
  );
}
