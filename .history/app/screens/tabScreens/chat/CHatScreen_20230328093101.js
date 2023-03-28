import {View, Text, TextInput, SafeAreaView} from 'react-native';
import React from 'react';
import { styles } from './style';

export function ChatScreen(props) {
  return (
    <View>
      <SafeAreaView
      <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={'rgba(25, 12, 4, 0.64)'}
        /> 
    </View>
  );
}
