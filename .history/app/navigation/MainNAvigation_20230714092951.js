import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StackNavigation from './StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import DeliveryTabNavigation from './DeliveryTabNavigation';
const Stack = createStackNavigator();
import {
  notificationListener,
  requestUserPermission,
} from 'app/helper/PushNotificationServices';
import ForegroundHandler from 'app/helper/ForegroundHandler';

export default function MainNAvigation() {
  React.useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
  return (
    <NavigationContainer>
       <ForegroundHandler navi />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="StackNavigation" component={StackNavigation} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="DeliveryTabNavigation" component={DeliveryTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
