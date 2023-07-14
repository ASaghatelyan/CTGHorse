import {TouchableOpacity, Text, View,ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './style';

export function BottomBtn(props) {
  return (
    <View style={[styles.container,props.styles]}>
      <TouchableOpacity style={styles.btnViewL} onPress={props.onChangeL}>
        <Text style={styles.btnNameL}>{props.nameL}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnViewR} onPress={props.onChangeR}>
        <Text style={styles.btnNameR}>{props.nameR}</Text>
      </TouchableOpacity>
    </View>
  );
}
