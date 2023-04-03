import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import close from 'app/assets/img/close.png';
import {styles} from './style';

export function OhNoModal({
  isVisible,
  title,
  infoText,
  btnText,
  onClose,
  btns,
}) {
  return (
    <Modal
      isVisible={isVisible}
      animationIn={'lightSpeedIn'}
      animationOut={'lightSpeedOut'}
      animationInTiming={350}
      animationOutTiming={350}>
      <View style={styles.container}>
        <View style={styles.contView}>
          <Text style={styles.onNoText}>Oh no!</Text>
          <Text style={styles.titleTetx}>{title}s asdad asdasd asa dasd asd as dasd asdas</Text>
          <Text style={styles.infoText}>{infoText}</Text>
          {btns ? (
            <View style={styles.btnOk}>
              <TouchableOpacity style={styles.btnView} onPress={onClose}>
                <Text style={styles.btnText}>{btnText}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.btnsView}>
              <TouchableOpacity style={styles.borderBtnView} onPress={onClose}>
                <Text style={styles.borderBtnText}>{btnText}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnView} onPress={onClose}>
                <Text style={styles.btnText}>{btnText}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <TouchableOpacity style={styles.closeView} onPress={onClose}>
          <Image source={close} style={styles.closeIc} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
