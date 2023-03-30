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
   
      <View>
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
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.generalView}>
           
        </ScrollView>
      </View>
  
   
  </View>
  )
}