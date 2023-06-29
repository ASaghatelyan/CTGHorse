import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import {NewContract} from 'app/screens';
import ForegroundHandler from 'app/helper/ForegroundHandler'; 
import { notificationListener,requestUserPermission } from 'app/helper/PushNotificationServices';
import messaging from '@react-native-firebase/messaging';

export default function App() {
  useEffect(() => {
    requestUserPermission()
    notificationListener()
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alerr.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
  
  }, []);
  return (
    <Provider store={store}>
      <ForegroundHandler />
      <MainNAvigation />
    </Provider>
  );
}
