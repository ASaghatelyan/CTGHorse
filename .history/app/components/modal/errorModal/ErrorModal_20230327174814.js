import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {styles} from './style';
import wrong from 'app/assets/img/wrong.png';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export function ErrorModal({err,onClose,isVisible}) {
  return (
    <Modal style={styles.container} visible={true} transparent={true}>
      <Image source={wrong} style={styles.icon} />
      <Text style={styles.oops}>Ooops!</Text>
      <Text style={styles.wrongText}>{err}</Text>
      <TouchableOpacity style={styles.btnView} onPress={onClose}>
        <Text style={styles.btnText}>Try again</Text>
      </TouchableOpacity>
    </Modal>
  );
}
