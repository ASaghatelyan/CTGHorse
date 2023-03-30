import { View, Text } from 'react-native'
import React from 'react'

export   function MyHorses({navigation}) {
  return (
    <View style={{flex: 1}}>
    <View>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={route.params.text}
        rightBtn="Reset"
        leftOnPress={() => navigation.goBack()}
        rightOnPress={() => route.params.onReset()}
      />

      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={'rgba(25, 12, 4, 0.64)'}
      />
    </View>
    <ScrollView
      contentContainerStyle={styles.itemsView}
      showsVerticalScrollIndicator={false}
      bounces={false}>
       
    </ScrollView>
      <View style={styles.bottomView}>
        
      </View>
  </View>
  )
}