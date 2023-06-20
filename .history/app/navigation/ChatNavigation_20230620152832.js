import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ChatScreen, OpenChat} from '../screens';
import { chatNames } from 'app/constant/naviNames';

const Stack = createStackNavigator();

export default function ChatNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F5F5F5'},
      }}>
        {chatNames.map((item,index)=>{return  <Stack.Screen name={item.name} component={item.component} />})}
     
 
    </Stack.Navigator>
  );
}
