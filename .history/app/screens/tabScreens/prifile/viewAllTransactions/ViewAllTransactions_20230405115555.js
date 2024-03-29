import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import user from 'app/assets/img/userImg.jpeg';
import right from 'app/assets/img/right.png';
import filter from 'app/assets/img/filter.png';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {HeaderNavi} from 'app/components';

export function ViewAllTransactions({navigation}) {
  let a = [1, 3, 5, 6, 7,4,5];
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
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={'rgba(25, 12, 4, 0.64)'}
        />
        <View style={styles.filterBtn}>
          <TouchableOpacity style={styles.filterView} onPress={()=>navigation.navigate('TransactionFilter',)}>
            <Text style={styles.filterText}>Filter by period </Text>
            <Image source={filter} style={styles.filterIc}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.allText}>All Transactions</Text>
        <Text style={styles.monthText}>December</Text>
        <View style={styles.transactionView}>
          {a.map((item, index) => {
            return (
              <TouchableOpacity style={styles.transactionItem}>
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
            );
          })}
        </View>
      </ScrollView>
        <View style={styles.btnView}>
            <TouchableOpacity style={styles.borderBtn}>
                <Text style={styles.borderText}>Previous month</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bgBtn} >
                <Text style={styles.bgText}>Next month</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
