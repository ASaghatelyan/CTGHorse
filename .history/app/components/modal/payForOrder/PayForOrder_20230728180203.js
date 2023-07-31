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
import {GButton} from 'app/components';
import Modal from 'react-native-modal';
import close from 'app/assets/img/close.png';
import axiosInstance from 'app/networking/api';
import TouchID from 'react-native-touch-id';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

export function PayForOrder({
  isVisible,
  navigation,
  onClose,
  horse,
  data,
  complite,
}) {
  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };
  const rnBiometrics = new ReactNativeBiometrics();
  let taxPrice =horse.price<1 10+ Number(horse.price)
  let taxPriceMore = Number((horse.price * 5) / 100) + Number(horse.price);
  let taxPriceLess = Number(500) + Number(horse.price);

  let onCheck = () => {
    rnBiometrics
      .simplePrompt({promptMessage: 'Confirm fingerprint'})
      .then(async resultObject => {
        const {success} = resultObject;
        if (success) {
          try {
            // console.log(horse.id,data.db_id,taxPrice);
            let res = await axiosInstance.post(`/payment`, {
              horse_id: horse.id,
              amount: taxPrice * 100,
              db_id: data.db_id,
            });
            onClose();
            navigation.replace('PayedComplite');
          } catch (e) {
            console.log(e, 'dfv');
          }
        } else {
          console.log('user cancelled biometric prompt');
        }
      })
      .catch(() => {
        console.log('biometrics failed');
      });
  };

  let PayForHorse = () => {
    rnBiometrics.isSensorAvailable().then(resultObject => {
      const {available, biometryType} = resultObject;

      if (available && biometryType === BiometryTypes.TouchID) {
        onCheck();
      } else if (available && biometryType === BiometryTypes.FaceID) {
        console.log('FaceID is supported');
        onCheck();
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        onCheck();
      } else {
      (  async () => {
          try {
            // console.log(horse.id,data.db_id,taxPrice);
            let res = await axiosInstance.post(`/payment`, {
              horse_id: horse.id,
              amount: taxPrice * 100,
              db_id: data.db_id,
            });
            onClose();
            navigation.replace('PayedComplite');
          } catch (e) {
            console.log(e, 'dfv');
          }
        })();
      }
    });
    // TouchID.authenticate(' ', optionalConfigObject)
    //   .then(async () => {
    //     try {
    //       // console.log(horse.id,data.db_id,taxPrice);
    //       let res = await axiosInstance.post(`/payment`, {
    //         horse_id: horse.id,
    //         amount: taxPrice * 100,
    //         db_id: data.db_id,
    //       });
    //       onClose();
    //       navigation.replace('PayedComplite');
    //     } catch (e) {
    //       console.log(e, 'dfv');
    //     }
    //   })
    //   .catch(async e => {

    //   });
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
              uri: horse?.medias[0].url,
            }}
            style={styles.horseIc}
          />
          <View style={{width: '100%'}}>
            <View style={styles.infoItem}>
              <Text style={styles.leftText}>Horse name</Text>
              <Text style={styles.rightText}>{horse?.name}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.leftText}>Registration number</Text>
              <Text style={styles.rightText}>{horse?.registration_number}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.leftText}>Price</Text>
              <Text style={styles.rightText}>${horse?.price}</Text>
            </View>
          </View>
          <View style={styles.totlaPayment}>
            <View style={styles.infoItemTotal}>
              <Text style={styles.leftTextTotal}>CTG Horse Fee</Text>
              <Text style={styles.rightTextTotal}>${horse?.price}</Text>
            </View>
            <View style={styles.infoItemTotal}>
              <Text style={styles.leftTextTotal}>Horse Santuary Fee</Text>
              <Text style={styles.rightTextTotal}>
                ${(horse.price * 10) / 100}
              </Text>
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
