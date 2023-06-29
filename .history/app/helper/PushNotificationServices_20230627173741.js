import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging'; 

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
        console.log('ddddddfgbgfx bcfx');
        getTokenFcm()
    }
}

const getTokenFcm = async () => {
    try {
      const fcmtoken = await AsyncStorage.getItem('fcmtoken');
      if (!fcmtoken) {
        console.log(fcmtoken);
        const fcmtoken = await messaging().getToken();
        try {
          if (fcmtoken) {
            console.log('token new generate', fcmtoken);
            await AsyncStorage.setItem('fcmtoken', fcmtoken);
          }
        } catch (error) {
          console.log(error, 'errrrorrr');
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  
export const notificationListener = async() =>{
console.log('ddddsss');
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
        console.log("backgrund state",remoteMessage.notification)
    });
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );
                console.log("remote message",remoteMessage.notification)
            }
        })
}
