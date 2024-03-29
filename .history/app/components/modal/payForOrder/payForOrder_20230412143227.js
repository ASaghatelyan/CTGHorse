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


export function PayForOrder({isVisible}) {
  return (
    <Modal isVisible={isVisible} style={{margin: 0}}>
      <View style={styles.content}>
        <SafeAreaView />
        <TouchableOpacity>
          <Image />
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
            handelMove={() => navigation.navigate('PayForOrder')}
          />
      </View>
    </Modal>
  );
}
