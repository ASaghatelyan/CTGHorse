import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import user from 'app/assets/img/userImg.jpeg';
import right from 'app/assets/img/right.png';
import added from 'app/assets/img/addCard.png';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GButton, HeaderNavi, Input} from 'app/components';

export function AddNewCard({navigation}) {
  return (
    <View style={styles.content}>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={'Add new card'}
        leftOnPress={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <View style={styles.userInfo}>
        <Input
          title="Card number"
          style={{}}
        //   onChange={e => {
        //     setChoosed('');
        //     handleChange(e, setPass);
        //   }}
        //   value={pass}
        //   inputBtn2={show}
        //   inputBtn1={hide}
        //   showPass={styles.showPass}
        //   inputBtnView={
        //     Platform.OS === 'ios'
        //       ? styles.showPassBtnIOS
        //       : styles.showPassBtnAndroid
        //   }
        //   inputBtn={showHidePass ? hide : show}
        //   secure={showHidePass}
        //   handleShowPass={() => setShowHidePass(!showHidePass)}
        //   errStyle={
        //     (choosed === 'current' || choosed === 'notEqual') && {
        //       borderWidth: 1,
        //       borderColor: 'red',
        //       backgroundColor: '#FFF',
        //     }
        //   }
        //   err={(choosed === 'current' || choosed === 'notEqual') && err}
        />
        </View>
        <GButton btnName="Save Card" />
      </ScrollView>
    </View>
  );
}
