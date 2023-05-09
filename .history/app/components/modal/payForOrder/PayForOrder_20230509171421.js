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
import {GButton, HeaderNavi, PayedModal} from 'app/components';
import Modal from 'react-native-modal';
import close from 'app/assets/img/close.png';
import axiosInstance from 'app/networking/api';

export function PayForOrder({isVisible, navigation, onClose, horse, data,complite}) {
  
  let taxPrice = Number((horse.price * 10) / 100) + Number(horse.price);

  let PayForHorse = async () => {
    try {
      let res = await axiosInstance.post(`/payment`, {
        horse_id: horse.id,
        amount: taxPrice,
        customer: data.customer,
      });
      onClose()
       navigation.replace('import {StyleSheet, Dimensions} from 'react-native';
       import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';
       
       let width = Dimensions.get('window').width;
       let height = Dimensions.get('window').height;
       
       export const styles = StyleSheet.create({
         content: {
           flex: 1,
           backgroundColor: '#F5F5F5',
         },
         scroll: {
           flexGrow: 1,
           paddingHorizontal: GlobalWidth(15),
         },
         addCard:{ 
           width:GlobalWidth(140), 
         },
         addCardText:{
           fontFamily: 'SFProText-SemiBold',
           fontSize: GlobalWidth(14),
           lineHeight: GlobalHeight(17),
           color: '#190C04', 
           textAlign:'center'
         },
         title: {
           fontFamily: 'SFProText-SemiBold',
           fontSize: GlobalWidth(18),
           lineHeight: GlobalHeight(23),
           color: '#190C04',
           marginBottom: GlobalHeight(8),
           marginLeft: GlobalWidth(15),
         },
         infoText: {
           fontFamily: 'SFProText-Regular',
           fontSize: GlobalWidth(17),
           lineHeight: GlobalHeight(22),
           color: 'rgba(25, 12, 4, 0.64)', 
         },
         generalView: {
           flexGrow: 1,
         },
         methodItem: {
           backgroundColor: '#F5F5F5',
           paddingVertical: GlobalHeight(24),
           marginBottom: GlobalHeight(16),
           borderRadius: 9,
           paddingHorizontal: GlobalWidth(13),
           shadowColor: '#000',
           shadowOffset: {
             width: 0,
             height: 4,
           },
           shadowOpacity: 0.24,
           shadowRadius: 1.3,
         },
         typeView: {
           flexDirection: 'row',
           alignItems: 'center',
           justifyContent: 'space-between',
           marginBottom: GlobalHeight(19),
         },
         typeIc: {
           width: GlobalWidth(63),
           height: GlobalHeight(20),
           resizeMode: 'contain', 
         },
         noTypeIc: {
           width: GlobalWidth(63),
           height: GlobalHeight(20),
           // resizeMode: 'contain',
           flex:1
         },
         picIc: {
           width: GlobalWidth(16),
           height: GlobalWidth(16),
         },
         btn: {
           marginTop: GlobalHeight(48),
         },
       });
       ')
    } catch (e) {
      console.log(e, 'dfv');
    }
  };

  return (
    <Modal isVisible={isVisible} style={{margin: 0}}>
      <View style={styles.content}>
        <SafeAreaView />
        <TouchableOpacity style={styles.closeView} onPress={onClose}>
          <Image source={close} style={styles.close} />
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>Summary</Text>
          <Text style={styles.subTitle}>
            Please confirm and submit your order
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}>
          <Image
            source={{
              uri: horse.medias[0].url,
            }}
            style={styles.horseIc}
          />
          <View style={{width: '100%'}}>
            <View style={styles.infoItem}>
              <Text style={styles.leftText}>Horse name</Text>
              <Text style={styles.rightText}>{horse.name}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.leftText}>Registration number</Text>
              <Text style={styles.rightText}>{horse.registration_number}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.leftText}>Price</Text>
              <Text style={styles.rightText}>${horse.price}</Text>
            </View>
          </View>
          <View style={styles.totlaPayment}>
            <View style={styles.infoItemTotal}>
              <Text style={styles.leftTextTotal}>CTG Horse Fee</Text>
              <Text style={styles.rightTextTotal}>${horse.price}</Text>
            </View>
            <View style={styles.infoItemTotal}>
              <Text style={styles.leftTextTotal}>Horse Santuary Fee</Text>
              <Text style={styles.rightTextTotal}>${(horse.price * 10) / 100}</Text>
            </View>
            <View style={styles.infoItemPay}>
              <Text style={styles.leftTextPay}>Total Payment amount</Text>
              <Text style={styles.rightTextPay}>${taxPrice}</Text>
            </View>
          </View>
        </ScrollView>
        <GButton
          btnName="Submit and pay now"
          customStyle={styles.btn}
          handelMove={PayForHorse}
        />
      </View>
      
    </Modal>
  );
}
