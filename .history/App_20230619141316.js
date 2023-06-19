import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import { PermissionsAndroid } from 'react-native';
 
export default function App() {
  let isFilePermissionGranted = async () => {
    try {
        const readPermission = await askPermission(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            "RNAudioVideoTools App Read Permission",
            "In order to save your media, We need permission to access your phone folder"
        );
        const writePermission = await askPermission(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            "RNAudioVideoTools App Write Permission",
            "In order to save your media, We need permission to access your phone folder"
        );
        return readPermission === PermissionsAndroid.RESULTS.GRANTED
            && writePermission === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        return null;
    }
}

useEffect(() => {
  
  isFilePermissionGranted()
 
}, [ ])

  return (
    <Provider store={store}>
      <MainNAvigation />
    </Provider>
  );
}
