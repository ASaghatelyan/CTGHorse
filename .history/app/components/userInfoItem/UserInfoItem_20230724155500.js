import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import DropShadow from 'react-native-drop-shadow';

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
      <TouchableOpacity onPress={getAllIfo} style={styles.listContainer}>
        <View>

        </View>
      </TouchableOpacity>
    </DropShadow>
  );
}
