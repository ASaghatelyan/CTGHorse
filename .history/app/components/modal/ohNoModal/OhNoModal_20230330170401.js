import { View, Text,   } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'

export   function OhNoModal({isVisible,tit}) {
  return (
    <Modal isVisible={isVisible}>
      <Text>OhNoModal</Text>
    </Modal>
  )
}