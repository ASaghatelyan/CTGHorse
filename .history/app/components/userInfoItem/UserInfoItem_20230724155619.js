import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import {styles} from './style';

export function UserInfoItem({}) {
  return (
    <DropShadow
      key={index}
      style={{
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
      }}>
      <TouchableOpacity style={styles.listContainer}>
        <View>
            <Text></Text>
        </View>
      </TouchableOpacity>
    </DropShadow>
  );
}
