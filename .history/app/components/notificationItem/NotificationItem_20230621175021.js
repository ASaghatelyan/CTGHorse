import {View, Text, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';
import dots from 'app/assets/img/dots.png'

export function NotificationItem({date, text,isRead}) {
  return (
    <TouchableOpacity
      style={styles.itemView}
      onPress={() => navigation.navigate('NewContract')}>
      <View style={styles.leftView}>
        <View style={[styles.isReadView,!isRead && {backgroundColor:'#FF2323'}]} />
        <View style={styles.textView}>
          <Text>{text}</Text>
          <Text>{date}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image source={dots}/>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
