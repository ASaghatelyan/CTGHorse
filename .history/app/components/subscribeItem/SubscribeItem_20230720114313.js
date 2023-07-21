import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {} from 'app/assets/img/'

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
      <Text style={styles.price}>{currency}{price}/month</Text>
      <View>
        <Image />
        <Image/>
      </View>
    </View>
  );
}
