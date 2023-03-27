import {View, TextInput, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import searchImg from 'app/assets/img/search.png';

export function SearchComp(props) {
  return (
    <TouchableOpacity style={styles.searchView}>
      <View
      editable={props.editable}
        style={styles.search}
        placeholder="Search"
        placeholderTextColor={'rgba(25, 12, 4, 0.64)'}
        onChangeText={props.onChange}
      />
      <Image source={searchImg} style={styles.img} />
    </TouchableOpacity>
  );
}
