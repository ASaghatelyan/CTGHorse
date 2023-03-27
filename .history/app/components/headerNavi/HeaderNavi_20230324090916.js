import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import back from 'app/assets/img/back.png';
import {styles} from './style';

export function HeaderNavi({leftBtn, rightBtn, leftOnPress, rightOnPress}) {
  return (
    <View style={styles.gFlex}>
      <TouchableOpacity style={styles.leftView} onPress={leftOnPress}>
        <Image source={back} style={styles.back} />
        <Text style={styles.leftBtnText}>{leftBtn}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={rightOnPress} onPress={rightOnPress}>
        <Text style={styles.leftBtnText}>{rightBtn}</Text>
      </TouchableOpacity>
    </View>
  );
}
