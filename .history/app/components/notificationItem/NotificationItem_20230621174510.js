import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';
export function NotificationItem({date, text,isRead}) {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#190C04',
      }}
      onPress={() => navigation.navigate('NewContract')}>
      <View style={styles.leftView}>
        <View style={styles.isReadView} />
        <View style={styles.textView}>
          <Text>{text}</Text>
          <Text>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
