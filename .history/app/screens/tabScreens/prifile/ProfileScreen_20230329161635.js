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
import edit from 'app/assets/img/edit.png';
import {styles} from './style';

export function ProfileScreen(props) {
  return (
    <View>
      <SafeAreaView />
      <Text style={styles.title}>Profile</Text>
      <ScrollView contentContainerStyle={{flexGrow:1,minHeight:"90%"}} showsVerticalScrollIndicator={false}>
        <View style={styles.userView}>
          <View style={styles.infoView}>
            <Image source={user} style={styles.userImg} />
            <View style={styles.nameView}>
              <Text style={styles.nameText}>Jane Cooper</Text>
              <View style={styles.userPersView}>
                <Image source={email} style={styles.ic} />
                <Text style={styles.infoText} numberOfLines={1}>
                  example@gmail.com
                </Text>
              </View>
              <View style={styles.userPersView}>
                <Image source={phone} style={styles.ic} />
                <Text style={styles.infoText} numberOfLines={1}>
                  +3756632332
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.editView}>
            <Image source={edit} style={styles.editIc} />
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
