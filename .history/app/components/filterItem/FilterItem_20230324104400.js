import {View, Text,TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { styles } from './style';
import right  from 'app/assets/img/right.png'


export function FilterItem({text,info,navigation,saveInfo,onReset}) {
 
  return (
    <TouchableOpacity style={styles.filterView} onPress={()=>navigation.navigate('FilterDetiles',{text,info,saveInfo,onReset})}>
      <Text >{text}</Text>
      <Image source={right } style={styles.rightIc}/>
    </TouchableOpacity>
  );
}
