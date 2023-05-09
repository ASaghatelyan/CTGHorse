import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Alert,
  } from 'react-native';
  import React, {useEffect, useRef, useState} from 'react';
  import {styles} from './style';
  import {AddNewCard, ErrorModal, GButton, HeaderNavi, LoadingModal, PayForOrder, PayedModal} from 'app/components';
  import visaIc from 'app/assets/img/visa.png';
  import typeC from 'app/assets/img/cardType.png';
  import paypalIc from 'app/assets/img/paypal.png';
  import pic from 'app/assets/img/pic.png';
  import unpic from 'app/assets/img/unpic.png';
  import Stripe from 'react-native-stripe-api';
  import axiosInstance from 'app/networking/api';
  
export   function PayedComplite({navigation}) {
  return (
    <View style={styles.content}>
    <SafeAreaView />
     
    <ScrollView
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}>
      
     
      <GButton
        btnName="Add Payment Method"
        customStyle={styles.btn}
        handelMove={() => setModalVisible(!modalVisible)}
      />
    </ScrollView>
   
  </View>
  )
}