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
    <HeaderNavi
      leftBtn={'Payment method'}
      leftOnPress={() => navigation.goBack()}
    />
    <ScrollView
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}>
      { (
        method.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.methodItem}
              onPress={() => {
                setChoosed(index);
              }}>
              <View style={styles.typeView}>
                <Image
                  source={item.type === 'paypal' ? paypalIc : visaIc}
                  style={styles.typeIc}
                />
                <Image
                  source={choosed !== index ? pic : unpic}
                  style={styles.picIc}
                />
              </View>
              <Text style={styles.infoText}>
                ***** ***** **** {item.last4}
              </Text>
            </TouchableOpacity>
          );
        })
      ) 
      // : (
      //   <View style={styles.methodItem}>
      //     <View style={styles.typeView}>
      //       <Image source={typeC} style={styles.noTypeIc} />
      //     </View>
      //     <Text style={[styles.infoText, {textAlign: 'center'}]}>
      //       No Card
      //     </Text>
      //   </View>
      // )
      }
      <TouchableOpacity
        style={styles.addCard}
        onPress={() => {
          setAddCardModal(!addCardModal);
        }}>
        <Text style={styles.addCardText}>+ Add New Card</Text>
      </TouchableOpacity>
      <GButton
        btnName="Add Payment Method"
        customStyle={styles.btn}
        handelMove={() => setModalVisible(!modalVisible)}
      />
    </ScrollView>
   
  </View>
  )
}