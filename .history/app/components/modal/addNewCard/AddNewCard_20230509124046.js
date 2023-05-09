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
  import horse from 'app/assets/img/horse.png';
export default function AddNewCard({isVisible, navigation, onClose}) {
  return (
    <Modal isVisible={isVisible} style={{margin: 0}}>
    <View style={styles.content}>
      <SafeAreaView />
      <TouchableOpacity style={styles.closeView} onPress={onClose}>
        <Image source={close} style={styles.close} />
      </TouchableOpacity>
    
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
   
         
 
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
  )
}