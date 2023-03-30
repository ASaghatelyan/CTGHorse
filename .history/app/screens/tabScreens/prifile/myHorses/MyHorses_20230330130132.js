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
       {/* <View style={styles.noHorseView}>
        <Image source={noHorse} style={styles.noHorse}/>
        <Text style={styles.listText}>Your Horse list is empty.</Text>
        <Text style={styles.detileText}>Please add your Horse details.</Text>
        <TouchableOpacity style={styles.addView} onPress={()=>navigation.navigate('HorseRegister')}>
            <Text style={styles.addText}>+ Add horse</Text>
        </TouchableOpacity>
       </View> */}
          <View style={styles.userView}>
            <View style={styles.infoView}>
              <Image source={user} style={styles.userImg} />
              <View style={styles.nameView}>
                <Text style={styles.nameText}>Jane Cooper</Text>
                <View style={styles.userPersView}>
                  <Image source={email} style={styles.ic} />
                  <Text style={styles.infoText} numberOfLines={1}>
                    example@gmail.com
                  </Text>
                </View>
                <View style={styles.userPersView}>
                  <Image source={phone} style={styles.ic} />
                  <Text style={styles.infoText} numberOfLines={1}>
                    +3756632332
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.editView}>
              <Image source={edit} style={styles.editIc} />
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>
    </ScrollView> 
  </View>
  )
}