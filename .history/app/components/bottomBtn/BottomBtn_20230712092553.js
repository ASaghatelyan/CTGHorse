import {TouchableOpacity, Text, View,ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './style';

export function BottomBtn({customStyles,onChangeL,nameL,onChangeR,nameR,activePassive}) {
  return (
    <View style={[styles.container, customStyles]}>
     {activePassive && <ActivityIndicator color={'rgba(233, 161, 58, 1)'} style={styles.active}/>}
      <TouchableOpacity style={styles.btnViewL} onPress={onChangeL}>
        <Text style={styles.btnNameL}>{nameL}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnViewR} onPress={onChangeR}>
        <Text style={styles.btnNameR}>{nameR}</Text>
      </TouchableOpacity>
    </View>
  );
}
