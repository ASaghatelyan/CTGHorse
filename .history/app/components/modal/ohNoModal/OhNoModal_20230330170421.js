import { View, Text,   } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'

export   function OhNoModal({isVisible,title,infoText}) {
  return (
    <Modal isVisible={isVisible}>
   <View></View>
    </Modal>
  )
}