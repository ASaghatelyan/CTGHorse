import {TouchableOpacity, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './style';

export function BottomBtn({
  customStyles,
  onChangeL,
  nameL,
  onChangeR,
  nameR,
  activePassive,
}) {
  return (
    <View style={[styles.container, customStyles]}>
      <TouchableOpacity style={styles.btnViewL} onPress={onChangeL}>
        <Text style={styles.btnNameL}>{nameL}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btnViewR,
           activePassive && {backgroundColor: 'rgba(233, 161, 58, 0.2)'},
        ]}
        onPress={onChangeR}
        disabled={!activePassive ? true : false}>
        {!activePassive && (
          <ActivityIndicator color={'#FFF'} style={styles.activePass} />
        )}
        <Text style={styles.btnNameR}>{nameR}</Text>
      </TouchableOpacity>
    </View>
  );
}
