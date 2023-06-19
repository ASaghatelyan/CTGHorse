import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import { Alert, PermissionsAndroid } from 'react-native';
 
export default function App() {
 let getStoragePermission = async () => {
    let permissions = await PermissionsAndroid.requestMultiple(
      [
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      ],
      {
        title: 'Duofolio Storage Permission',
        message: 'Duofolio needs to access your storage'
      }
    );
  
    if (permissions['android.permission.READ_EXTERNAL_STORAGE'] === 'granted') {
      return;
    } else {
      Alert.alert(
        'Permission required',
        'Allow Duofolio to access your storage',
        [{ text: 'OK', onPress: async () => await getStoragePermission() }],
        { cancelable: false }
      );
    }
  }
useEffect(() => {
 ()=> getStoragePermission()

 
}, [ ])

  return (
    <Provider store={store}>
      <MainNAvigation />
    </Provider>
  );
}
