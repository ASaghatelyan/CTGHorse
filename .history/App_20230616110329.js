import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import MyApp from 'app/screens/chatFolder/MyApp';
import {Pusher} from '@pusher/pusher-websocket-react-native';
import pusherConfig from './pusher.json';

export default function App() {

 

  return (
    <Provider store={store}>
      <MainNAvigation /> 
    </Provider>
  );
}
