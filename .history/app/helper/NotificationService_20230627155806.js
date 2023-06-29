import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);

    getTokenFcm();
  }
}

const getTokenFcm = async () => {
  try {
    // const fcmtoken = await AsyncStorage.getItem('fcmtoken');
    // const unsubscribe = messaging().onMessage(async remoteMessage => {
    //   console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    // });

    messaging().sendToDevice(
      [], // device fcm tokens...
      {
        data: {
          owner: JSON.stringify(owner),
          user: JSON.stringify(user),
          picture: JSON.stringify(picture),
        },
      },
      {
        // Required for background/quit data-only messages on iOS
        contentAvailable: true,
        // Required for background/quit data-only messages on Android
        priority: 'high',
      },
    );

    // const fcmtoken = await messaging().getToken();
    // console.log(fcmtoken,'ffffffggggg');
    // try {
    //   if (fcmtoken) {
    //     console.log('token new generate', fcmtoken);
    //     await AsyncStorage.setItem('fcmtoken', fcmtoken);
    //   }
    // } catch (error) {
    //   console.log(error, 'errrrorrr');
    // }
  } catch (e) {
    console.log(e);
  }
};
