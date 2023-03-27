import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {FilterItem, HeaderNavi} from 'app/components';
import {styles} from './style';

export   function FilterDetiles(props) {
  return (
    <View>
    <SafeAreaView />
    <HeaderNavi
      leftBtn="Filter"
      rightBtn="Clear all"
      leftOnPress={() =>  navigation.goBack()}
    />
    <View style={styles.itemsView}>
      <FilterItem text="Color"  info={color} navigation={navigation}/>
    
    </View>
  </View>
  )
}