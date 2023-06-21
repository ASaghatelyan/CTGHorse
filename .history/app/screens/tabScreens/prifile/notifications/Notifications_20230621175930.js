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
  const [notificationCount, setNotificationCount] = useState(3);
  let getinfo = async () => {
    try {
      let res = await axiosInstance.get(`/get-user-details`, {});
      console.log(res.data.userData[0]);
      dispatch({
        type: 'SET_USERINFO',
        payload: res.data.userData[0],
      });
      setUserInfo(res.data.userData[0]);
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
          isRead: false,
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
 
          contentContainerStyle={{flexGrow: 1, }}
          showsVerticalScrollIndicator={false}>
      <View style={{paddingHorizontal: 16}}>
        {notificationCount && (
          <Text style={styles.notiCount}>
            You have
            <Text style={styles.notiActive}>
              {' '}
              {notificationCount} Notifications
            </Text>{' '}
            today.
          </Text>
        )}
          {noti.map((item, index) => {
            return (
              <View>
                <Text style={styles.title}>{item.title}</Text>
                {item.noti.map((it, ind) => {
                  return (
                    <NotificationItem
                      navigation={navigation}
                      text={it.text}
                      date={it.date}
                      isRead={it.isRead}
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
