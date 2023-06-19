import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import online from 'app/assets/img/active.png';
import user1 from 'app/assets/img/noimg.png';
import back from 'app/assets/img/back.png';

export const ChatHeader = ({
  username,
  bio,
  picture,
  onlineStatus,
  onPress,
  item,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.topView}>
      <TouchableOpacity
        style={styles.backBtnView}
        onPress={() => navigation.goBack()}>
        <Image source={back} style={styles.backBtn} />
      </TouchableOpacity>
      <Image
        source={item.avatar ? {uri: item.avatar} : user1}
        style={styles.userAva}
      />
      <View>
        <Text style={styles.nameText}>{item.name}</Text>
        <View style={styles.activeView}>
          <Text style={styles.activeNow}>Active Now</Text>
          <Image source={online} style={styles.activIc} />
        </View>
      </View>
    </View>
  );
};

export default ChatHeader;
