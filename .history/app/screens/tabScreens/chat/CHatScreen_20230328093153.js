import {View, Text, Image,TextInput, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './style'; 
import sarch 


export function ChatScreen(props) {
  return (
    <View>
      <SafeAreaView />
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={'rgba(25, 12, 4, 0.64)'}
        />
      </View>
    </View>
  );
}
