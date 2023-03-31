import {
    View,
    Text,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import React, {useState} from 'react';
  import {GButton, Input, LoadingModal} from 'app/components';
  import {styles} from './style';
  import back from 'app/assets/img/back.png';
  import show from 'app/assets/img/on.png';
  import hide from 'app/assets/img/off.png';
  import axiosInstance from 'app/networking/api';

export  function changePassword() {
  return (
    <View>
      <Text>changePassword</Text>
    </View>
  )
}