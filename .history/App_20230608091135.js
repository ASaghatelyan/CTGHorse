import {
  StyleSheet,
  Dimensions,
  Button,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
 
 
export default function App() {
  return (
    <Provider store={store}>
      <MainNAvigation />
    </Provider>
  );
}

 