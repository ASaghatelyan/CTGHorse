import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';

export const ChatHeader = ({username, bio, picture, onlineStatus, onPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.topView}>
      <TouchableOpacity
        style={styles.backBtnView}
        onPress={() => navigation.goBack()}>
        <Image source={back} style={styles.backBtn} />
      </TouchableOpacity>
      <Image source={user1} style={styles.userAva} />
      <View>
        <Text style={styles.nameText}>John Walton</Text>
        <View style={styles.activeView}>
          <Text style={styles.activeNow}>Active Now</Text>
          <Image source={online} style={styles.activIc} />
        </View>
      </View>
    </View>
  );
};

export default ChatHeader;
