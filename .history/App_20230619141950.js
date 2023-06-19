import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import { AudioRecorder } from 'app/components';
 
export default function App() {
  return (
    <Provider store={store}>
      {/* <MainNAvigation /> */}
      <AudioRecorder/>
    </Provider>
  );
}
