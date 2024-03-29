import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import {useSelector, useDispatch} from 'react-redux';
import { Notifier, Easing } from 'react-native-notifier';


const ForegroundHandler = ( ) => {
  let dispatch = useDispatch();
  let config = useSelector(store => store.config);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(remoteMessage => {
      const {notification, messageId} = remoteMessage;
      let count = config.notificationCount + 1;
      console.log(notification, 'erlkfhjn');
      dispatch({
        type: 'SET_CONFIG',
        payload: {notificationCount: count},
      });
      // dispatch({
      //   type: 'SET_TOASTMESS',
      //   payload: notification,
      // });
      Notifier.showNotification({
        title: notification.title,
        description: notification.body,
        duration: 0,
        showAnimationDuration: 800,
        showEasing: Easing.bounce,
        onHidden: () => console.log('Hidden'),
        onPress: () => console.log(navigation),
        hideOnPress: false,
      });
      console.log(config.notificationCount, 'config.notificationCount');
      if (Platform.OS == 'ios') {
        PushNotificationIOS.addNotificationRequest({
          id: messageId,
          body: notification.body,
          title: notification.title,
          sound: 'default',
        });
      } else {
        PushNotification.localNotification({
          channelId: 'your-channel-id',
          id: messageId,
          body: 'android body',
          title: 'android notif title',
          soundName: 'default',
          vibrate: true,
          playSound: true,
        });
      }
    });
    return unsubscribe;
  }, []);
  return null;
};

export default ForegroundHandler;
