import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';

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
      <Image source={img} style={styles.s}/>
    </View>
  );
}
