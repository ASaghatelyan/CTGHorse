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
import close from 'app/assets/img/close.png'

export function PayForOrder({isVisible,navigation,onClose}) {
  return (
    <Modal isVisible={isVisible} style={{margin: 0}}>
      <View style={styles.content}>
        <SafeAreaView />
        <TouchableOpacity style={styles.closeView}>
          <Image source={close} style={styles.close}/>
        </TouchableOpacity>
        <Text>Summary</Text>
        <Text>Please confirm and submit your order</Text>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}>
        </ScrollView>
          <GButton
            btnName="Submit and pay now"
            customStyle={styles.btn}
            handelMove={() =>{
              props.onClose()
              navigation.goBack()}}
          />
      </View>
    </Modal>
  );
}
