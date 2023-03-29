import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import filter from 'app/assets/img/filter.png';
import goToTop from 'app/assets/img/expand.png';
import {styles} from './style';
 
export function ProfileScreen(props) {
  return (
    <View>
      <SafeAreaView />
      <Text style={styles.title}>Profile</Text>
    </View>
  );
}
