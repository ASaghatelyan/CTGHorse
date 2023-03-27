import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {styles} from './style';
import wrong from 'app/assets/img/wrong.png'

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export function ErrorModal(props) {
  return (
    <Modal style={styles.container} visible={true} transparent={true}>
        <Image/>
      <Text style={styles.text}>Ooops!</Text>
      <Text style={styles.text}>Something went wrong</Text>
      <Text style={styles.text}>Something went wrong</Text>
      <TouchableOpacity>
        <Text>Try again</Text>
      </TouchableOpacity>
    </Modal>
  );
}
