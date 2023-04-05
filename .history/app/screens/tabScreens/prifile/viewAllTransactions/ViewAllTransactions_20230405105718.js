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

export   function ViewAllTransactions() {
    let a = [1, 3, 5, 6, 7];
  return (
    <View style={styles.content}>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={'View all transactions'}
        leftOnPress={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
      
        <View>
          <TouchableOpacity style={styles.addItem}>
            <View style={styles.addLeftView}>
              <Image source={added} style={styles.added} />
              <View>
                <Text style={styles.saveingText}>Saving Account </Text>
                <Text style={styles.saveNumText}>91212192291221</Text>
                <Text style={styles.saveNumText}>•••• 1234</Text>
              </View>
            </View>
            <Image source={right} style={styles.rigth} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addTextView} onPress={()=>navigation.navigate('AddNewCard')}>
            <Text style={styles.addText}>+Add new</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rescentView}>
          <Text style={styles.recentText}>Recent Transactions</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transactionView}>
          {a.map((item,index) =>{
            return <TouchableOpacity style={styles.transactionItem}>
            <View>
              <Text style={styles.dateText}>23/12/2022</Text>
              <Text style={styles.transactionNumText} numberOfLines={1}>
                UPI/2323232323/TRASANCTION
              </Text>
              <Text style={styles.transactionNumText}>Tuesday</Text>
            </View>
            <View style={styles.rightView}>
              <Text style={styles.transactionPrice}>$10.09</Text>
              <Image source={right} style={styles.rigthT} />
            </View>
          </TouchableOpacity>
          })}
        </View>
      </ScrollView>
    </View>
  )
}