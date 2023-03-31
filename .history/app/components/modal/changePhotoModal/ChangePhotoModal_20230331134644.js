import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import close from 'app/assets/img/close.png';
import {styles} from './style';
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

export function ChangePhotoModal({
  isVisible,
  title,
  infoText,
  btnText,
  onClose,
}) {
  return (
    <Modal
      isVisible={isVisible}
      animationIn={'lightSpeedIn'}
      animationOut={'lightSpeedOut'}
      animationInTiming={350}
      animationOutTiming={350}
      style={{
        height:'100%'
      }}
      >
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnView} onPress={onClose}>
          <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
