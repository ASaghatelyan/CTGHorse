import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Image,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {HeaderNavi, HorseItemComponent} from 'app/components';
  import {styles} from './style';
  import NoHorse from 'app/assets/img/nohorse.png';
  import user from 'app/assets/img/noimg.png';
  import email from 'app/assets/img/email.png';
  import phone from 'app/assets/img/phone.png';
  import data from '../../home/src/data';
  import {useSelector, useDispatch} from 'react-redux';
  import axiosInstance from 'app/networking/api';
export   function myBoughtenHorses({}) {
  return (
    <View>
      <Text>myBoughtenHorses</Text>
    </View>
  )
}