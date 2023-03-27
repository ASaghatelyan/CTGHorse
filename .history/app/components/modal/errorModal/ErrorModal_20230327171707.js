import { View, Text } from 'react-native'
import React from 'react'

export   function ErrorModal(props) {
  return (
    <Modal style={styles.container} visible={props.visible} transparent={true}>
    <Text style={styles.text}>Loading...</Text>
    <Progress.Bar
      progress={progres}
      width={200}
      indeterminate={anime}
      color="#E9A13A" 
      borderWidth={0}
      height={3}
    />
  </Modal>
  )
}