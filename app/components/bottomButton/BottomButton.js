import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'

export   function BottomButton(props) {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.addView}>
          <Text style={styles.addText}>{props.btnName}</Text>
        </TouchableOpacity>
    </View>
  )
}