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
import {
  AddNewCard,
  ErrorModal,
  GButton,
  HeaderNavi,
  LoadingModal,
  PayForOrder,
  PayedModal,
} from 'app/components';
import pay from 'app/assets/img/payed.png';

import close from 'app/assets/img/close.png';

export function PayedComplite({navigation}) {
  return (
    <View style={styles.content}>
      <SafeAreaView />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.closeView}
          onPress={() => navigation.navigate('HomeNavigation',{s})}>
          <Image source={close} style={styles.close} />
        </TouchableOpacity>
        <View style={{alignItems:'center'}}>
          <Image source={pay} style={styles.img} />
          <Text style={styles.title}>You can also buy our other products</Text>
          <Text style={styles.text}>for more information go to the website</Text>
        </View>

        <GButton
          btnName="Start now"
          customStyle={styles.btn}
        //   handelMove={() => setModalVisible(!modalVisible)}
        />
      </ScrollView>
    </View>
  );
}
