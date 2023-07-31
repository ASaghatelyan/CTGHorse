import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import done from 'app/assets/img/dones.png';
import unDone from 'app/assets/img/cancell.png';
import {GButton} from '../gButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function SubscribeItem({
  id,
  img,
  title,
  subTitle,
  price,
  currency,
  on,
  off,
  onSubscribe,
  navigation,
}) {
  let getFirstLog = async () => {
    let data = await AsyncStorage.getItem('firstLog');
    return JSON.parse(data);
  };
  return (
    <View style={styles.content}>
      <Image source={img} style={styles.img} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <Text style={styles.price}>
        {currency}
        {price}/month
      </Text>
      {on.map((item, index) => {
        return (
          <View style={styles.onOffView}>
            <Image source={done} style={styles.done} />
            <Text>{item}</Text>
          </View>
        );
      })}
      {off?.map((item, index) => {
        return (
          <View style={styles.onOffView}>
            <Image source={unDone} style={styles.done} />
            <Text>{item}</Text>
          </View>
        );
      })}
      <GButton
        btnName="Subscribe"
        handelMove={async () => {
          let firstLog = await getFirstLog();
          !firstLog
            ? navigation.replace('FirstLogin')
            : navigation.replace('TabNavigation');
          onSubscribe(id);
        }}
      />
    </View>
  );
}
