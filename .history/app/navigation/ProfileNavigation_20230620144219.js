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
let arr
const Stack = createStackNavigator();

export default function ProfileNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F5F5F5'},
      }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotByEmail" component={ForgotByEmail} />
      <Stack.Screen name="HorseRegister" component={HorseRegister} />
      <Stack.Screen name="MyHorses" component={MyHorses} />
      <Stack.Screen name="ChangeHorseInfo" component={ChangeHorseInfo} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="AccountInfo" component={AccountInfo} />
      <Stack.Screen name="AddNewCard" component={AddNewCard} />
      <Stack.Screen name="TransactionFilter" component={TransactionFilter} />
      <Stack.Screen name="MyFavorites" component={MyFavorites} />
      <Stack.Screen name="HorseInfo" component={HorseInfo} />
      <Stack.Screen name="OwnerProfile" component={OwnerProfile} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="HorseRegComplite" component={HorseRegComplite} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="MyBoughtenHorses" component={MyBoughtenHorses} />
      <Stack.Screen name="MyContracts" component={MyContracts} />
      <Stack.Screen name="NewContract" component={NewContract} />
      <Stack.Screen
        name="ViewAllTransactions"
        component={ViewAllTransactions}
      />
    </Stack.Navigator>
  );
}
