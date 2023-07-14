import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import {NewContract} from 'app/screens';
import ForegroundHandler from 'app/helper/ForegroundHandler';
import Toast from 'react-native-toast-message';

import {
  notificationListener,
  requestUserPermission,
} from 'app/helper/PushNotificationServices';
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

  const showToast = () => {
    console.log('ttttt');
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }
  useEffect(() => {
     setTimeout(() => {
      
     }, 2000);
  
    return () => {
       
    }
  }, [ ])
  
  return (
    <>
      <Provider store={store}>
      <Toast /> 
        <ForegroundHandler />
        <MainNAvigation />
      </Provider>
    </>
  );
}
