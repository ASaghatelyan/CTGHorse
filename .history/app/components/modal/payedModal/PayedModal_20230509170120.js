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
import axiosInstance from 'app/networking/api';

export   function PayedModal({}) {
  return (
    <Modal isVisible={isVisible} style={{margin: 0}}>
    <View style={styles.content}>
      <SafeAreaView />
      <TouchableOpacity style={styles.closeView} onPress={onClose}>
        <Image source={close} style={styles.close} />
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
       
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
         
      </ScrollView>
      <GButton
        btnName="Submit and pay now"
        customStyle={styles.btn}
        handelMove={PayForHorse}
      />
    </View>
  </Modal>
  )
}