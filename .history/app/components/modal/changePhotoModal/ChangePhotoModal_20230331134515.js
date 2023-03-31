import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import close from 'app/assets/img/close.png';
import {styles} from './style';

export   function ChangePhotoModal({isVisible, title, infoText, btnText, onClose}) {
  return (
    <Modal
      isVisible={isVisible}
      animationIn={'lightSpeedIn'}
      animationOut={'lightSpeedOut'}
      animationInTiming={350}
      animationOutTiming={350}>
      <View style={styles.container}>
        <View style={styles.contView}>
          
          <TouchableOpacity style={styles.btnView} onPress={onClose}>
            <Text style={styles.btnText}>{btnText}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.closeView} onPress={onClose}>
          <Image source={close} style={styles.closeIc} />
        </TouchableOpacity>
      </View>
    </Modal>
  )
}