import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {styles} from './style';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export function ErrorModal(props) {
  return (
    <Modal style={styles.container} visible={true} transparent={true}>
      <Text style={styles.text}>Ooops!</Text>
    </Modal>
  );
}
