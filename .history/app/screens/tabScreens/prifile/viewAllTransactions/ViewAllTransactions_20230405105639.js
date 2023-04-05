import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
  } from 'react-native';
  import React, {useRef, useState} from 'react';
  import user from 'app/assets/img/userImg.jpeg';
  import right from 'app/assets/img/right.png';
  import added from 'app/assets/img/addCard.png';
  import {styles} from './style';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import {HeaderNavi} from 'app/components';

export   function ViewAllTransactions() {
  return (
    <View>
      <Text>ViewAllTransactions</Text>
    </View>
  )
}