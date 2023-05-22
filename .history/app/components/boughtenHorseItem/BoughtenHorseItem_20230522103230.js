import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    Image,
    TouchableWithoutFeedback,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';
  import React, {useLayoutEffect, useState} from 'react';
  import {styles} from './style';
  import like from 'app/assets/img/like.png';
  import dislike from 'app/assets/img/dislike.png';
  import DropShadow from 'react-native-drop-shadow';
  import axiosInstance from 'app/networking/api';
  import white from 'app/assets/img/bgw.png';

export   function BoughtenHorseItem({}) {
  return (
    <View>
      <Text>BoughtenHorseItem</Text>
    </View>
  )
}