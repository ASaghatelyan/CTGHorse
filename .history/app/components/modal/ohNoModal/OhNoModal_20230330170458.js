import { View, Text,   } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import close from 'app/assets/img/close.png'

export   function OhNoModal({isVisible,title,infoText}) {
  return (
    <Modal isVisible={isVisible}>
   <View>
    <Text>Oh oo!</Text>
   </View>
    </Modal>
  )
}