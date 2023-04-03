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
import edit from 'app/assets/img/editp.png';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StarRating from 'react-native-star-rating';
import {
  EditProfileInput,
  GButton,
  GeneralModal,
  HeaderNavi,
} from 'app/components';

export function AccountInfo(props) {
  return (
    <View style={styles.content}>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={'Accounts'}
        leftOnPress={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <View style={styles.userInfo}>
          <View
            style={{
              paddingHorizontal: 16,
              borderBottomWidth: 0.5,
              borderBottomColor: 'rgba(84, 84, 88, 0.65)',
              paddingBottom: 24,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image source={user} style={styles.userImg} />
            <View style={styles.infoTextView}>
              <Text style={styles.infoText}>Adrian Gonzalez</Text>
              <Text style={styles.infoText}>Monterrey,</Text>
              <Text style={styles.infoText}>Mexico</Text>
            </View>
            <TouchableOpacity>
                <Text>View Statement</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View></View>
      </ScrollView>
    </View>
  );
}
