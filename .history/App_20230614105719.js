import React, { useEffect } from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import MyApp from 'app/screens/chatFolder/MyApp';
import {Pusher} from '@pusher/pusher-websocket-react-native';

export default function App() {
  const pusher = Pusher.getInstance();

  const a = async () => {
    await pusher.init({
      apiKey: API_KEY,
      cluster: API_CLUSTER,
    });

    await pusher.connect();
  };
  useEffect
  return (
    // <Provider store={store}>
    //   {/* <MainNAvigation /> */}
    // </Provider>
    <MyApp />
  );
}
