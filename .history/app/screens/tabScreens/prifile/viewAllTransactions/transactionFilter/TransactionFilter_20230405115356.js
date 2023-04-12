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
export   function TransactionFilter() {
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
        <TouchableOpacity style={styles.filterView} onPress={()=>navigation.navigate('TransactionFilter')}>
          <Text style={styles.filterText}>Filter by period </Text>
          <Image source={filter} style={styles.filterIc}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.allText}>All Transactions</Text>
      <Text style={styles.monthText}>December</Text>
      
    </ScrollView>
     
  </View>
  )
}