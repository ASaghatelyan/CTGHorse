import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import search from 'app/assets/img/search.png';
import avatar from 'app/assets/img/user.png';

export function ChatScreen(props) {
  let data = [1, 2, 3, 4, 5, 6];
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
        <Text style={styles.recentText}>Recent Chats</Text>
        <ScrollView
          contentContainerStyle={styles.recentView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {data.map((item, index) => {
            return (
              <TouchableOpacity style={styles.recentItem}>
                <Image source={avatar} style={styles.avatar} />
                <Text style={styles.nameText} numberOfLines={1}>
                  Name
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View>
        <View style={styles.chatItem}>
          <Image source={avatar} style={styles.avatar} />
          <View sty>
            <View style={styles.nameView}>
              <Text>Smith Mathew</Text>
              <Text>08 Feb</Text>
            </View>
            <Text>Hi, David. Hope you’re doing....</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
