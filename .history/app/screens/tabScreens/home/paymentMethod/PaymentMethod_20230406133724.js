import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Alert,
  } from 'react-native';
  import React, {useRef, useState} from 'react'; 
  import {styles} from './style';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import StarRating from 'react-native-star-rating';
  import {HeaderNavi, HorseItemComponent} from 'app/components';
  import data from '../../home/src/data';

export   function PaymentMethod() {
  return (
    <View style={styles.content}>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={'Payment method'}
        leftOnPress={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
      
        <ScrollView
          contentContainerStyle={styles.generalView}
          showsVerticalScrollIndicator={false}>
          
        </ScrollView>
      </ScrollView>
    </View>
  )
}