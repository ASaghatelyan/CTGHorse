import {Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import searchImg from 'app/assets/img/search.png';

export function SearchBtn({onSearch}) {
  return (
    <TouchableOpacity style={styles.searchView} onPress={onSearch}>
      <Text style={styles.search}>Search</Text>
      <Image source={searchImg} style={styles.img} />
    </TouchableOpacity>
  );
}
