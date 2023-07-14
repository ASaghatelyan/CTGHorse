import {View, Text, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';
import dots from 'app/assets/img/dots.png'
import moment from 'moment';


export function NotificationItem({date, text,isRead,navigation}) {
  return (
    <TouchableOpacity
      style={styles.itemView}
      onPress={() => navigation.navigate('NewContract')}>
      <View style={styles.leftView}>
        <View style={[styles.isReadView, isRead==='1' && {backgroundColor:'#FF2323'}]} />
        <View style={styles.textView}>
          <Text>{text}</Text>
          <Text>{moment(date).format('YYYY MMM dd hh:')}</Text>
        </View>
      </View>
      <TouchableOpacity  >
        <Image source={dots} style={styles.dots}/>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
