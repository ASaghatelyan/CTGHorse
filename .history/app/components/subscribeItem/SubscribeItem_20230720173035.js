import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import done from 'app/assets/img/dones.png';
import unDone from 'app/assets/img/cancell.png';
import { GButton } from '../gButton';

export function SubscribeItem({
  img,
  title,
  subTitle,
  price,
  currency,
  on,
  off,
  onSubscribe,
}) {
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
      <GButton btnName="Subscribe"  handelMove={()=>navigation.replace('FirstLogin')}/>
    </View>
  );
}
