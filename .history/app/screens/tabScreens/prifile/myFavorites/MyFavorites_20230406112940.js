import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Alert,
  } from 'react-native';
  import React, {useRef, useState} from 'react';
  import user from 'app/assets/img/userImg.jpeg';
  import edit from 'app/assets/img/editp.png';
  import {styles} from './style';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import StarRating from 'react-native-star-rating';
  import {
    EditProfileInput,
    GButton,
    GeneralModal,
    HeaderNavi,
  } from 'app/components';
export function MyFavorites() {
  return (
    <View>
      <Text>MyFavorites</Text>
    </View>
  );
}
