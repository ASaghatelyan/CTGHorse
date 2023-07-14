import {View, Text, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';
import dots from 'app/assets/img/dots.png';
import moment from 'moment';
import axiosInstance from 'app/networking/api';

export function NotificationItem({
  date,
  text,
  isRead,
  navigation,
  contract,
  notiId,
  getinfo,
}) {
  const showItem = async () => {
    // /make-as-read/{id}
    try {
      let res = await axiosInstance.post(`/make-as-read/${notiId}`);
      navigation.navigate('NewContract', contract);
      // dispatch({
      //   type: 'SET_USERINFO',
      //   payload: res.data.userData[0],
      // });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableOpacity style={styles.itemView} onPress={showItem}>
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
