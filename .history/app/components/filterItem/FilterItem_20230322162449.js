import {View, Text,TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { styles } from './style';
import right  from 'app/assets/img/right.png'


export function FilterItem({text,info}) {
  return (
    <TouchableOpacity style={styles.filterView} onPress={()=>navigation}>
      <Text>{text}</Text>
      <Image source={right } style={styles.rightIc}/>
    </TouchableOpacity>
  );
}
