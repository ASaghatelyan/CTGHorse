import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {FilterItem, HeaderNavi} from 'app/components';
import {styles} from './style';

export   function FilterDetiles({ route}) {
    console.log(params);
  return (
    <View>
    <SafeAreaView />
    <HeaderNavi
      leftBtn="Filter"
      rightBtn="Clear all"
      leftOnPress={() =>  navigation.goBack()}
    />
    <View style={styles.itemsView}>
    <Text>dsv </Text>
    </View>
  </View>
  )
}