import {View, Text} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import close from 'app/assets/img/close.png';

export function OhNoModal({isVisible, title, infoText}) {
  return (
    <Modal isVisible={isVisible}>
      <View>
        <Text>Oh no!</Text>
        <Text> You can add only 3 photos.</Text>
        <Text>
          If you want to add new photo please delete the one from your gallery
        </Text>
      </View>
    </Modal>
  );
}
