import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import close from 'app/assets/img/close.png';
import {styles} from './style';

export function GeneralModal({
  isVisible,
  title,
  subTitle,
  infoText,
  btnText,
  onClose,
  btns,
  borderBtnText,
  onLeftFunc,
  onRightFunc,
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
          <View style={styles.topView}>
            <Text style={styles.onNoText}>{title}</Text>
            <Text style={styles.titleTetx}>{subTitle}</Text>
            <Text style={styles.infoText}>{infoText}</Text>
          </View>
          {btns ? (
            <View style={styles.btnOk}>
              <TouchableOpacity style={styles.btnView} onPress={onClose}>
                <Text style={styles.btnText}>{btnText}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.btnsView}>
              <TouchableOpacity
                style={styles.borderBtnView}
                onPress={onLeftFunc}>
                <Text style={styles.borderBtnText}>{borderBtnText}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnView} onPress={onRightFunc}>
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
