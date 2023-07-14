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
window._ = require('lodash');
window.Pusher = require('pusher-js');

export default function App() {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);

  window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'a1ddbc653c1b9f25b042',
    cluster: 'ap2',
    encrypted: true,
  });

  return (
    <Provider store={store}>
      
      <ForegroundHandler />
      <NotifierWrapper>
        <MainNAvigation />
      </NotifierWrapper>
    </Provider>
  );
}
