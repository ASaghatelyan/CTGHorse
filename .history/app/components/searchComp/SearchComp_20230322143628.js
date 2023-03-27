import {Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import searchImg from 'app/assets/img/search.png';

export function SearchComp(props) {
  return (
    <TouchableOpacity style={styles.searchView}>
      <Text
     
        style={styles.search}
        placeholder="Search"
    
      >Search</Text>
      <Image source={searchImg} style={styles.img} />
    </TouchableOpacity>
  );
}
