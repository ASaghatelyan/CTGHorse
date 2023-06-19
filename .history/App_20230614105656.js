import React from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import MyApp from 'app/screens/chatFolder/MyApp';

export default function App() {
  const pusher = Pusher.getInstance();

await pusher.init({
  apiKey: API_KEY,
  cluster: API_CLUSTER
});

await pusher.connect();
  return (
    // <Provider store={store}>
    //   {/* <MainNAvigation /> */}
    // </Provider>
      <MyApp/>
  );
}
