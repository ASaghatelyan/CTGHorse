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
  HorseRegComplite,
  Privacy,
  Terms,
} from '../screens';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F5F5F5'},
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotByEmail" component={ForgotByEmail} />
      <Stack.Screen name="ConfirmCode" component={ConfirmCode} />
      <Stack.Screen name="ResetPass" component={ResetPass} />
      <Stack.Screen name="PassUpdated" component={PassUpdated} />
      <Stack.Screen name="FirstLogin" component={FirstLogin} />
      <Stack.Screen name="HorseRegister" component={HorseRegister} />
      <Stack.Screen name="HorseRegComplite" component={HorseRegComplite} />
      <Stack.Screen name="HorseRegComplite" component={HorseRegComplite} />
    </Stack.Navigator>
  );
}
