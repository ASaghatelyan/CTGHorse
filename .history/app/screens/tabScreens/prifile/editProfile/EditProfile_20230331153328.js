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
  import email from 'app/assets/img/email.png';
  import phone from 'app/assets/img/phone.png';
  import edit from 'app/assets/img/edit.png';
  import right from 'app/assets/img/right.png';
  import add from 'app/assets/img/addhorse.png';
  import {styles} from './style';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import StarRating from 'react-native-star-rating';

export function EditProfile(props) {
  return (
    <View>
      <Text>EditProfile</Text>
    </View>
  );
}
