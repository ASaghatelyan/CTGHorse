import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import {NewContract} from 'app/screens';
import ForegroundHandler from 'app/helper/ForegroundHandler';
import {
  notificationListener,
  requestUserPermission,
} from 'app/helper/PushNotificationServices';
import {NotifierWrapper} from 'react-native-notifier';
import {NavigationContainer} from '@react-navigation/native';

import Echo from 'laravel-echo';
import StackNavigation from 'app/navigation/StackNavigation';
import TabNavigation from 'app/navigation/TabNavigation';
import DeliveryTabNavigation from 'app/navigation/DeliveryTabNavigation';
import {createStackNavigator} from '@react-navigation/stack'; 
import { Text } from 'react-native';
const Stack = createStackNavigator();
window._ = require('lodash');
window.Pusher = require('pusher-js');

export default function App() {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
  const Stack = createStackNavigator();
  const navigationRef = React.createRef();
  window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'a1ddbc653c1b9f25b042',
    cluster: 'ap2',
    encrypted: true,
  });

  return (
    <Provider store={store}>
 
      <NavigationContainer>
        <ForegroundHandler />
        <NotifierWrapper>
        <Stack.Screen name="StackNavigation" component={StackNavigation} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="DeliveryTabNavigation" component={DeliveryTabNavigation} />
        </NotifierWrapper>
      </NavigationContainer>
    </Provider>
  );
}
