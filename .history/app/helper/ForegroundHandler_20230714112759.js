import React, {useEffect} from 'react';
import {Platform, StyleSheet, View, Text, SafeAreaView} from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import {useSelector, useDispatch} from 'react-redux';
import {Notifier, Easing} from 'react-native-notifier';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'orange',
  },
  container: {
    padding: 20,
  },
  title: {color: 'white', fontWeight: 'bold'},
  description: {color: 'white'},
});

const ForegroundHandler = ({navigation}) => {
  let dispatch = useDispatch();
  let config = useSelector(store => store.config);

  const CustomComponent = ({title, description}) => (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </SafeAreaView>
  );

  useEffect(() => {
    const unsubscribe = messaging().onMessage(remoteMessage => {
      const {notification, messageId} = remoteMessage;
      let count = config.notificationCount + 1;
      console.log(notification, 'erlkfhjn');
      dispatch({
        type: 'SET_CONFIG',
        payload: {notificationCount: count},
      });
      Notifier.showNotification({
        title: notification.title,
        description: notification.body,
        duration: 0, 
        showAnimationDuration: 700,
        showEasing: Easing.bounce,
        onHidden: () => {},
        onPress: () =>  navigation.navigate('ProfileNavigation', {screen: 'Notifications'});
        },
        hideOnPress: true,
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
