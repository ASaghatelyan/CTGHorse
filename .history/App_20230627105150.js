import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import {NewContract} from 'app/screens';
 
import ForegroundHandler from 'app/helper/ForegroundHandler';

export default function App() {
  return (
    <Provider store={store}>
      {/* <ForegroundHandler /> */}
      <MainNAvigation />
    </Provider>
  );
}
