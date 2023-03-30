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
  

export   function ChangeHorseInfo(props) {
  return (
    <View style={styles.content}>
    <View>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={'My Horses'}
        leftOnPress={() => props.navigation.goBack()}
      />
    </View>
   
      
        <ScrollView contentContainerStyle={styles.generalView}>
           
        </ScrollView>
      
  
   
  </View>
  )
}