import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import ava from 'app/assets/img/ava.png';
import {styles} from './style';
import {InputHorseReg} from 'app/components/inputHorseReg';

export function HorseRegSecond(props) {
  return (
    <View style={styles.container}>
      <Image source={ava} style={styles.ava} />
      <InputHorseReg title="Name" />
      <InputHorseReg title="Registration number"  num={new Date().getTime()} />
      <InputHorseReg title="Enter Price" />
    </View>
  );
}
