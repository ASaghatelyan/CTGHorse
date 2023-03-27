import {View, Text,TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { styles } from './style';
import right  from 'app/assets/img/right.png'


export function FilterItem({text,data}) {
  return (
    <TouchableOpacity style={styles.filterView} >
      <Text>{text}</Text>
      <Image source={right } style={styles.rightIc}/>
    </TouchableOpacity>
  );
}
