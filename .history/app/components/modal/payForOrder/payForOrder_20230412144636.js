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

export function PayForOrder({isVisible, navigation, onClose}) {
  return (
    <Modal isVisible={isVisible} style={{margin: 0}}>
      <View style={styles.content}>
        <SafeAreaView />
        <TouchableOpacity style={styles.closeView}>
          <Image source={close} style={styles.close} />
        </TouchableOpacity>
        <Text style={styles.title}>Summary</Text>
        <Text style={styles.subTitle}>
          Please confirm and submit your order
        </Text>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}>
          <Image source={horse} style={styles.horseIc} />
          <View style={{flex:1,}}>
            <View>
              <Text>Horse name</Text>
              <Text>Name</Text>
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
