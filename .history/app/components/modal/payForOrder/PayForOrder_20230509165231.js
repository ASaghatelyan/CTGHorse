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
import {GButton, HeaderNavi} from 'app/components';
import Modal from 'react-native-modal';
import close from 'app/assets/img/close.png';

export function PayForOrder({isVisible, navigation, onClose, horse}) {
  let getDiff = x => {
    return (x * 10) / 100;
  };
let allP
  let PayForHorse = async (id, ind) => {
    try {
      let res = await axiosInstance.post(`/payment`, {
        horse_id:horse.id
        amount:(Number(getDiff(horse.price)) + Number(horse.price))
        // customer:
      });
      setMethod(res.data);
    } catch (error) {
      console.log(error.response);
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
              <Text style={styles.rightTextTotal}>${getDiff(horse.price)}</Text>
            </View>
            <View style={styles.infoItemPay}>
              <Text style={styles.leftTextPay}>Total Payment amount</Text>
              <Text style={styles.rightTextPay}>
                ${Number(getDiff(horse.price)) + Number(horse.price)}
              </Text>
            </View>
          </View>
        </ScrollView>
        <GButton
          btnName="Submit and pay now"
          customStyle={styles.btn}
          handelMove={() => {
            onClose();
            navigation.goBack();
          }}
        />
      </View>
    </Modal>
  );
}
