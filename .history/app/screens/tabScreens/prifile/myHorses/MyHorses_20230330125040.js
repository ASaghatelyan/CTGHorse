import {  View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Image, } from 'react-native'
import React from 'react'
import { HeaderNavi } from 'app/components'
import { styles } from './style'
import noHorse from 'app/assets/img/nohorse.png'

export   function MyHorses({navigation}) {
  return (
    <View style={{flex: 1}}>
    <View>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={'My Horses'}
        
        leftOnPress={() => navigation.goBack()}
        
      /> 
      
    </View>
    <ScrollView
      contentContainerStyle={styles.itemsView}
      showsVerticalScrollIndicator={false}
      bounces={false}>
       <View style={styles.no}>
        <Image source={noHorse} style={styles.noHorse}/>
       </View>
    </ScrollView> 
  </View>
  )
}