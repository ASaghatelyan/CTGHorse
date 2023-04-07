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
import {BottomBtn} from 'app/components/bottomBtn';

export function HorseRegSecond(props) {
  return (
    <View style={styles.f}>
      <View style={styles.container}>
        <Image source={ava} style={styles.ava} />
        <InputHorseReg title="Name" />
        <InputHorseReg title="Enter Price" />
      </View>
      <BottomBtn
        nameL="Back"
        nameR="Next"
        onChangeL={() => {
          percentage !== 25
            ? setPercentage(prev => prev - 25)
            : props.navigation.goBack();
        }}
        onChangeR={() =>
          percentage !== 100
            ? (setPercentage(prev => prev + 25),
              setData([{generalImg, image, videoData}]))
            : (setData([generalImg, image, videoData]),
              props.navigation.replace('HorseRegComplite'))
        }
      />
    </View>
  );
}
