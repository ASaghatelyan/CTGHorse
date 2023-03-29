import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import user from 'app/assets/img/userImg.jpeg';
import goToTop from 'app/assets/img/expand.png';
import {styles} from './style';

export function ProfileScreen(props) {
  return (
    <View>
      <SafeAreaView />
      <Text style={styles.title}>Profile</Text>
      <View style={styles.userView}>
        <View>
          <Image source={user} style={styles.userImg}/>
          <View>
            <Text>Jane Cooper</Text>
            <Text></Text>
            <Text></Text>
          </View>
        </View>
      </View>
    </View>
  );
}
