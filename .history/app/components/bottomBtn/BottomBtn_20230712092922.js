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
        style={styles.btnViewR}
        onPress={onChangeR}
        disabled={activePassive ? true : false}>
        {!activePassive && (
          <ActivityIndicator color={'#000'} style={styles.activePass} />
        )}
        <Text style={styles.btnNameR}>{nameR}</Text>
      </TouchableOpacity>
    </View>
  );
}
