import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {FilterItem, HeaderNavi} from 'app/components';
import {styles} from './style';

export   function FilterDetiles({ route,navigation}) {
    console.log(route.params.text);
  return (
    <View>
    <SafeAreaView />
    <HeaderNavi
      leftBtn={route.params.text}
      rightBtn="Reset"
      leftOnPress={() =>  navigation.goBack()}
    />
    <View style={styles.itemsView}>
     
    </View>
  </View>
  )
}