import {  View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    TextInput, } from 'react-native'
import React from 'react'
import { HeaderNavi } from 'app/components'

export   function MyHorses({navigation}) {
  return (
    <View style={{flex: 1}}>
    <View>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={route.params.text}
        rightBtn="Reset"
        leftOnPress={() => navigation.goBack()}
        
      /> 
      
    </View>
    <ScrollView
      contentContainerStyle={styles.itemsView}
      showsVerticalScrollIndicator={false}
      bounces={false}>
       
    </ScrollView>
     
  </View>
  )
}