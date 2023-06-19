import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import { PermissionsAndroid } from 'react-native';
 
export default function App() {
  let requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission for bluetooth scanning granted');
        return true;
      } else {
        console.log('Location permission for bluetooth scanning revoked',granted);
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  }

useEffect(() => {
  
  requestLocationPermission()
 
}, [ ])

  return (
    <Provider store={store}>
      <MainNAvigation />
    </Provider>
  );
}
