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
import right from 'app/assets/img/right.png';
import add from 'app/assets/img/addhorse.png';
import {styles} from './style';

export function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView />
      <Text style={styles.title}>Profile</Text>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingBottom: 88,justifyContent:'space-between'}}
        showsVerticalScrollIndicator={false}>
        <View>
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
          <View style={styles.rateInfoView}>
            <View style={styles.rateView}>
              <Text style={styles.rateText}>Rate</Text>
            </View>
            <View style={styles.rateView}>
              <Text style={styles.rateText}>Horses</Text>
              <Text style={styles.horseCount}>0</Text>
            </View>
          </View>
          <View style={styles.gFlex}>
            <View style={styles.addHorse}>
              <Text style={styles.rateText}>
                ✋Hey Jane, It seems like you have not added any horses yet.
              </Text>
              <TouchableOpacity>
                <Image source={add} style={styles.add} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.gFlex}>
            <TouchableOpacity style={styles.filterView}>
              <Text style={styles.gText}>My Horses</Text>
              <Image source={right} style={styles.rightIc} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterView}>
              <Text style={styles.gText}>Accounts</Text>
              <Image source={right} style={styles.rightIc} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterView}>
              <Text style={styles.gText}>Privacy and Policy</Text>
              <Image source={right} style={styles.rightIc} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterView}>
              <Text style={styles.gText}>Notifications</Text>
              <Image source={right} style={styles.rightIc} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.logoutView}>
          <TouchableOpacity style={styles.filterView} onPress={()=>{
            navigation.replace('Sign')
          }}>
            <Text style={styles.gText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
