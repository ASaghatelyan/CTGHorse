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
  import {HeaderNavi} from 'app/components';
  

export  function AddNewCard() {
  return (
    <View style={styles.content}>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={'Accounts'}
        leftOnPress={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <View style={styles.userInfo}>
          <View style={styles.information}>
            <Image source={user} style={styles.userImg} />
            <View style={styles.infoTextView}>
              <Text style={styles.infoText}>Adrian Gonzalez</Text>
              <Text style={styles.infoText}>Monterrey,</Text>
              <Text style={styles.infoText}>Mexico</Text>
            </View>
            <TouchableOpacity style={styles.statementView}>
              <Text style={styles.statementText}>View Statement</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.accountBalance}>
            <Text style={styles.accountText}>Your Account balance</Text>
            <Text style={styles.priceText}>$2120122.32</Text>
          </View>
        </View>
        
     
         
      </ScrollView>
    </View>
  )
}