import React from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import MyApp from 'app/screens/chatFolder/MyApp';

export default function App() {
  return (
    // <Provider store={store}>
    //   {/* <MainNAvigation /> */}
    // </Provider>
      <MyApp/>
  );
}
