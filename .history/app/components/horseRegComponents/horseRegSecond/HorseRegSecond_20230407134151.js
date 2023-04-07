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
import {useDispatch, useSelector} from 'react-redux';

export function HorseRegSecond(props) {
  let dispatch = useDispatch();
  let store = useSelector(state => state.horseRegister);

  const [name,setName]=useState('')
  const [price,setPrise]=useState('')

  return (
    <View style={styles.container}>
      <Image source={ava} style={styles.ava} />
      <InputHorseReg title="Name"  onSubmit={}/>
      <InputHorseReg title="Enter Price" />
    </View>
  );
}
