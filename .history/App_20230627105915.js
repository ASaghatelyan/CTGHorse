import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import {NewContract} from 'app/screens';
import ForegroundHandler from 'app/helper/ForegroundHandler';
import { requestUserPermission } from 'app/helper/NotificationService';

export default function App() {
  useEffect(() => {
    requestUserPermission()
  }, []);
  return (
    <Provider store={store}>
      {/* <ForegroundHandler /> */}
      <MainNAvigation />
    </Provider>
  );
}
