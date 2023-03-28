import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styy}

export function ChatScreen(props) {
  return (
    <View>
      <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={'rgba(25, 12, 4, 0.64)'}
        />
 
    </View>
  );
}
