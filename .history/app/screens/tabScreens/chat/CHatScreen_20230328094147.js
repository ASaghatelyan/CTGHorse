import {View, Text, Image, TextInput, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './style';
import search from 'app/assets/img/search.png';
import avatar from 'app/assets/img/user.png';

export function ChatScreen(props) {
  return (
    <View>
      <SafeAreaView />
<View>
  <Image source={avatar} style={styles.avatar}/>
  <Text style={styles.numeText}>Name Surname</Text>
</View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={'rgba(25, 12, 4, 0.64)'}
        />
        <Image source={search} style={styles.searchIc} />
      </View>
    </View>
  );
}
