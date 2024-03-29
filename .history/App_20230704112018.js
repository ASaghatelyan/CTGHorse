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
import Echo from 'laravel-echo';
window._ = require('lodash');
export default function App() {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
  window.Echo = new Echo({
    broadcaster: 'pusher',
     key: process.env.MIX_PUSHER_APP_KEY,
     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
     encrypted: true
 });
  return (
    <Provider store={store}>
      <ForegroundHandler />
      <MainNAvigation />
    </Provider>
  );
}
