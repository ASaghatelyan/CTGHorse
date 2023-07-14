import {TouchableOpacity, Text, View,ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './style';

export function BottomBtn({customStyles,onChangeL}) {
  return (
    <View style={[styles.container, customStyles]}>
      <ActivityIndicator color={'rgba(233, 161, 58, 1)'}/>
      <TouchableOpacity style={styles.btnViewL} onPress={props.onChangeL}>
        <Text style={styles.btnNameL}>{props.nameL}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnViewR} onPress={props.onChangeR}>
        <Text style={styles.btnNameR}>{props.nameR}</Text>
      </TouchableOpacity>
    </View>
  );
}
