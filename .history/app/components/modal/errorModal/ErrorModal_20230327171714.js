import {View, Text, Dimensions, Animated} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import Modal from 'react-native-modal';
import * as Progress from 'react-native-progress';
import {styles} from './style';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;


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