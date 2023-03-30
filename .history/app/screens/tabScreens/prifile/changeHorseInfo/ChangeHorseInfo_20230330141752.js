import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {HeaderNavi, HorseItemComponent} from 'app/components';
import {styles} from './style';
import NoHorse from 'app/assets/img/nohorse.png';
import user from 'app/assets/img/userImg.jpeg';
import email from 'app/assets/img/email.png';
import phone from 'app/assets/img/phone.png';
import data from '../../home/src/data';

export function ChangeHorseInfo({navigation, route}) {
  console.log(route.params.item.name);
  return (
    <View style={styles.content}>
      <View>
        <SafeAreaView />
        <HeaderNavi
          leftBtn={route.params.item.name}
          leftOnPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView contentContainerStyle={styles.generalView}>
        <Text style={styles.titleText}>Gallery</Text>
        <im
      </ScrollView>
    </View>
  );
}
