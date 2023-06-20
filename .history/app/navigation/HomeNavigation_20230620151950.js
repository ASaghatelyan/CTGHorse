import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  HorseInfo,
  OwnerProfile,
  PaymentMethod,
  PayedComplite,
  CardMethod,
  OpenChat,
} from '../screens';
import { homeNames } from 'app/constant/naviNames';
 
const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        {homeNames.map((item,index)=>{
          return  <Stack.Screen name={item.name} component={item.component} />
        })}
     
      <Stack.Screen name="HorseInfo" component={HorseInfo} />
      <Stack.Screen name="OwnerProfile" component={OwnerProfile} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="PayedComplite" component={PayedComplite} />
      <Stack.Screen name="CardMethod" component={CardMethod} />
      <Stack.Screen name="OpenChat" component={OpenChat} />
    </Stack.Navigator>
  );
}
