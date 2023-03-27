import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { styles } from './style'

export   function BorderBtn(props) {
  return (
    <TouchableOpacity style={styles.btnView} onPress={props.onNaviTo}>
      <Text style={styles.btnName}>{props.name}</Text>
    </TouchableOpacity>
  )
}