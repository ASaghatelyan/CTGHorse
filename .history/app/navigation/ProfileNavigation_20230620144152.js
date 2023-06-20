import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ProfileScreen,
  SignIn,
  HorseRegister,
  MyHorses,
  ChangeHorseInfo,
  EditProfile,
  ChangePassword,
  AccountInfo,
  AddNewCard,
  ViewAllTransactions,
  TransactionFilter,
  MyFavorites,
  HorseInfo,
  OwnerProfile,
  PaymentMethod,
  HorseRegComplite,
  Privacy,
  SignUp,
  ForgotByEmail,
  MyBoughtenHorses,
  MyContracts,
  NewContract,
} from '../screens';

const Stack = createStackNavigator();

export default function ProfileNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F5F5F5'},
      }}>
      <Stack.Screen name=, component={SignIn} />
      <Stack.Screen name=, component={ProfileScreen} />
      <Stack.Screen name=, component={SignUp} />
      <Stack.Screen name=, component={ForgotByEmail} />
      <Stack.Screen name=, component={HorseRegister} />
      <Stack.Screen name=, component={MyHorses} />
      <Stack.Screen name=, component={ChangeHorseInfo} />
      <Stack.Screen name=, component={EditProfile} />
      <Stack.Screen name=, component={ChangePassword} />
      <Stack.Screen name=, component={AccountInfo} />
      <Stack.Screen name=, component={AddNewCard} />
      <Stack.Screen name=, component={TransactionFilter} />
      <Stack.Screen name=, component={MyFavorites} />
      <Stack.Screen name=, component={HorseInfo} />
      <Stack.Screen name=, component={OwnerProfile} />
      <Stack.Screen name=, component={PaymentMethod} />
      <Stack.Screen name=, component={HorseRegComplite} />
      <Stack.Screen name=, component={Privacy} />
      <Stack.Screen name=, component={MyBoughtenHorses} />
      <Stack.Screen name=, component={MyContracts} />
      <Stack.Screen name=, component={NewContract} />
      <Stack.Screen
        name="ViewAllTransactions"
        component={ViewAllTransactions}
      />
    </Stack.Navigator>
  );
}
