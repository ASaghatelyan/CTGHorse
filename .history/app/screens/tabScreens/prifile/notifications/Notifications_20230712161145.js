import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HeaderNavi, HorseItemComponent, NotificationItem} from 'app/components';
import {styles} from './style';
import NoHorse from 'app/assets/img/nohorse.png';
import user from 'app/assets/img/noimg.png';
import email from 'app/assets/img/email.png';
import phone from 'app/assets/img/phone.png';
import data from '../../home/src/data';
import {useSelector, useDispatch} from 'react-redux';
import axiosInstance from 'app/networking/api';

export function Notifications({navigation}) {
  let dispatch = useDispatch();
  let userInfos = useSelector(state => state.userInfo);
  const [userInfo, setUserInfo] = useState(userInfos);
  const [notificationCount, setNotificationCount] = useState();
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    getinfo();
    return () => {};
  }, []);

  let getinfo = async () => {
    try {
      let res = await axiosInstance.get(`/get-all-notifications`);
      console.log(res.data);
      setNotification(res.data[0]);
      setNotificationCount(res.data.count);
      // dispatch({
      //   type: 'SET_USERINFO',
      //   payload: res.data.userData[0],
      // });
      // setUserInfo(res.data.userData[0]);
    } catch (error) {
      console.log(error);
    }
  };
  let noti = [
    {
      title: 'Today',
      noti: [
        {
          isRead: false,
          text: 'Hey Jane! Don`t forget to check whose around with you',
          date: '11:25 AM',
        },
        {
          isRead: false,
          text: 'Hey Jane! Don`t forget to check whose around with you',
          date: '11:25 AM',
        },
        {
          isRead: false,
          text: 'Hey Jane! Don`t forget to check whose around with you',
          date: '11:25 AM',
        },
      ],
    },
    {
      title: 'This Week',
      noti: [
        {
          isRead: true,
          text: 'Hey Jane! Don`t forget to check whose around with you',
          date: '11:25 AM',
        },
        {
          isRead: true,
          text: 'Hey Jane! Don`t forget to check whose around with you',
          date: '11:25 AM',
        },
        {
          isRead: true,
          text: 'Hey Jane! Don`t forget to check whose around with you',
          date: '11:25 AM',
        },
        {
          isRead: true,
          text: 'Hey Jane! Don`t forget to check whose around with you',
          date: '11:25 AM',
        },
        {
          isRead: true,
          text: 'Hey Jane! Don`t forget to check whose around with you',
          date: '11:25 AM',
        },
        {
          isRead: true,
          text: 'Hey Jane! Don`t forget to check whose around with you',
          date: '11:25 AM',
        },
        {
          isRead: true,
          text: 'Hey Jane! Don`t forget to check whose around with you',
          date: '11:25 AM',
        },
        {
          isRead: true,
          text: 'Hey Jane! Don`t forget to check whose around with you',
          date: '11:25 AM',
        },
        {
          isRead: true,
          text: 'Hey Jane! Don`t forget to check whose around with you',
          date: '11:25 AM',
        },
      ],
    },
  ];
  return (
    <View style={styles.content}>
      <View>
        <SafeAreaView />
        <HeaderNavi
          leftBtn={'Notification'}
          leftOnPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.generalView}
        showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 16}}>
          {notificationCount && (
            <Text style={styles.notiCount}>
              You have{' '}
              <Text style={styles.notiActive}>
                {' '}
                {} Notifications
              </Text>{' '}
              today.{' '}
            </Text>
          )}
          {noti.map((item, index) => {
            return (
              <View>
                <Text style={styles.title}>{item.title}</Text>
                {notification.map((it, ind) => {
                  return (
                    <NotificationItem
                      navigation={navigation}
                      text={'Please check your new contract'}
                      date={it.created_at}
                      isRead={it.read}
                      contract={it.contract}
                      notiId={it.id}
                    />
                  );
                })}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
