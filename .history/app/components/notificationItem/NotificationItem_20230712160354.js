import {View, Text, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';
import dots from 'app/assets/img/dots.png';
import moment from 'moment';

export function NotificationItem({date, text, isRead, navigation, contract}) {
  const showItem = async()=>{
    // /make-as-read/{id}
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
  }
  return (
    <TouchableOpacity
      style={styles.itemView}
      onPress={() => navigation.navigate('NewContract',contract)}>
      <View style={styles.leftView}>
        <View
          style={[
            styles.isReadView,
            isRead === '0' && {backgroundColor: '#FF2323'},
          ]}
        />
        <View style={styles.textView}>
          <Text>{text}</Text>
          <Text>{moment(date).format('MMM DD YYYY hh:mm')}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image source={dots} style={styles.dots} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
