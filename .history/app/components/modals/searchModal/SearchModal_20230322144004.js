import {View, Text} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default function SearchModal(props) {
  return (
    <Modal
      style={{backgroundColor: '#F5F5F5', margin: 0, height: height}}
      visible={props.visible}
      transparent={true}>
      <Text>sdfbsg</Text>
    </Modal>
  );
}
