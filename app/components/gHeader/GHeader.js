import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import back from 'app/assets/img/back.png';
import { styles } from './style';
 
export function GHeader(props) {
  return (
    <View style={styles.container}>
      {props.backBtn && (
        <TouchableOpacity onPress={() => console.log(props.props.navigation.goBack())} style={styles.btnView}>
          <Image source={back} style={styles.btn}/>
        </TouchableOpacity>
      )}
      <Text style={styles.nameText}>{props.name}</Text>
    </View>
  );
}
