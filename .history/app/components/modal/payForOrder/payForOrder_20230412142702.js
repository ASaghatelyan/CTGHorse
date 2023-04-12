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
 import { Modal } from 'react-native-modal';
  

export function PayForOrder() {
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
    
        
   <GButton btnName="Submit and pay now" customStyle={styles.btn} handelMove={()=>navigation.navigate('PayForOrder')} />
      </ScrollView>
    </View>
  );
}
