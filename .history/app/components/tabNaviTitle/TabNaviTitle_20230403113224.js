import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'

export   function TabNaviTitle({naviName}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{naviName}</Text>
    </View>
  )
}