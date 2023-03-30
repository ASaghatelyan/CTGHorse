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
       <View style={styles.noHorseView}>
        <Image source={noHorse} style={styles.noHorse}/>
        <Text style={styles.listText}>Your Horse list is empty.</Text>
        <Text style={styles.detileText}>Please add your Horse details.</Text>
        <TouchableOpacity style={styles.addView}>
            <Text style={styles.addText}>+ Add horse</Text>
        </TouchableOpacity>
       </View>
       
    </ScrollView> 
  </View>
  )
}