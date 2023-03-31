import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useRef} from 'react';
import Modal from 'react-native-modal';
import close from 'app/assets/img/close.png';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function ChangePhotoModal({
  isVisible,
  title,
  infoText,
  btnText,
  onClose,
}) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const scrollRef = useRef();
  return (
    <Modal
      isVisible={isVisible}
      animationIn={'lightSpeedIn'}
      animationOut={'lightSpeedOut'}
      animationInTiming={350}
      animationOutTiming={350}
      style={{
        height: '100%',
        backgroundColor: '#fff',
        margin: 0,
      }}>
      <TouchableOpacity style={styles.closeView} onPress={onClose}>
        <Image source={close} style={styles.closeIc} />
      </TouchableOpacity>
      <View style={styles.container}></View>
    </Modal>
  );
}
