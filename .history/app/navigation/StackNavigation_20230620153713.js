import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  GetStarted,
  SignIn,
  SignUp,
  ForgotByEmail,
  ConfirmCode,
  ResetPass,
  PassUpdated,
  FirstLogin,
  HorseRegister, 
  Privacy,
  Terms,
  HorseRegComplite,
} from '../screens';
import { stackNames } from 'app/constant/naviNames';
const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F5F5F5'},
      }}>
        {stackNames.map((item,index)=>{
          return <Stack.Screen name="Splash" component={Splash} />
        })}
      
    
    </Stack.Navigator>
  );
}
