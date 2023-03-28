import {View, Text} from 'react-native';
import React from 'react';

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
