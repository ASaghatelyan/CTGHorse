import {View, Text, Image, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import search from 'app/assets/img/search.png';
import avatar from 'app/assets/img/user.png';

export function ChatScreen(props) {
  let data
  return (
    <View>
      <SafeAreaView />
      <View style={styles.avaView}>
        <Image source={avatar} style={styles.avatar} />
        <Text style={styles.avaText}>Name Surname</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={'rgba(25, 12, 4, 0.64)'}
        />
        <Image source={search} style={styles.searchIc} />
      </View>
      <View>
        <Text>Recent Chats</Text>
        <TouchableOpacity style={styles.recentItem}>
          <Image source={avatar} style={styles.avatar}/>
          <Text style={styles.nameText}>Name</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recentItem}>
          <Image source={avatar} style={styles.avatar}/>
          <Text style={styles.nameText}>Name</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
