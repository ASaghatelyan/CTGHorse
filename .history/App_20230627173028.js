import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import {NewContract} from 'app/screens';
import ForegroundHandler from 'app/helper/ForegroundHandler';
import { requestUserPermission } from 'app/helper/NotificationService';
import { notificationListener } from 'app/helper/PushNotificationServices';

export default function App() {
  useEffect(() => {
    requestUserPermission()
    notificationListener()
  }, []);
  return (
    <Provider store={store}>
      <ForegroundHandler />
      <MainNAvigation />
    </Provider>
  );
}