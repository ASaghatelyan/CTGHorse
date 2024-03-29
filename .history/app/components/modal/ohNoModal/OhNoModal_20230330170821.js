import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import close from 'app/assets/img/close.png';

export function OhNoModal({isVisible, title, infoText,btnText}) {
  return (
    <Modal isVisible={true}>
      <View style>
        <Text>Oh no!</Text>
        <Text> You can add only 3 photos.</Text>
        <Text>
          If you want to add new photo please delete the one from your gallery
        </Text>
    <TouchableOpacity>
        <Text>OK</Text>
    </TouchableOpacity>
      </View>
    </Modal>
  );
}
