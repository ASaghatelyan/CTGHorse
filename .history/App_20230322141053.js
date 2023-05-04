import {SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default function App() {
  return (
    <Provider store={store}> 
      <MainNAvigation />
    </Provider>
  );
}
