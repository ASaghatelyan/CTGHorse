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
import email from 'app/assets/img/email.png';
import phone from 'app/assets/img/phone.png';
import {styles} from './style';

export function ProfileScreen(props) {
  return (
    <View>
      <SafeAreaView />
      <Text style={styles.title}>Profile</Text>
      <View style={styles.userView}>
        <View  >
          <Image source={user} style={styles.userImg} />
          <View style={styles.nameView}>
            <Text style={styles.nameText}>Jane Cooper</Text>
            <View style={styles.userPersView}>
              <Image />
              <Text style={styles.e}>example@gmail.com</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
