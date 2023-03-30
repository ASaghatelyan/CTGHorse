import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import close from 'app/assets/img/close.png';
import {styles} from './style';

export function OhNoModal({isVisible, title, infoText, btnText, onClose}) {
  return (
    <Modal isVisible={isVisible} animationIn={'bounceInDown'} animationOut={'bounceInRight'} animationInTiming={300} animationOutTiming={444}>
      <View style={styles.container}>
        <View style={styles.contView}>
          <Text style={styles.onNoText}>Oh no!</Text>
          <Text style={styles.titleTetx}>{title}</Text>
          <Text style={styles.infoText}>{infoText}</Text>
          <TouchableOpacity style={styles.btnView} onPress={onClose}>
            <Text style={styles.btnText}>{btnText}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.closeView} onPress={onClose}>
          <Image source={close} style={styles.closeIc} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
