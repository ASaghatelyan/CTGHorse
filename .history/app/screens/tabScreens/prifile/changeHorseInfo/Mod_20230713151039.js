import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import ReactNativeModal from 'react-native-modal';
import ImageViewer from 'react-native-image-zoom-viewer';
import {styles} from './style';
import close from 'app/assets/img/close.png';
import rbin from 'app/assets/img/rbin.png';

export default function Mod({visible, data, activeIndex, setActive, onDel,onClose}) {
  return (
    <ReactNativeModal
      currentIndex={activeIndex}
      style={styles.modal}
      visible={visible}
      transparent={true}>
      <ImageViewer
        imageUrls={data}
        index={activeIndex}
        onChange={i => {
          setActive(i);
          console.log(i);
        }}
      />
      <View style={styles.bottomModal}>
        <TouchableOpacity onPress={onDel}>
          <Image source={rbin} style={styles.rbin} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.modalClose}
          onPress={onClose}>
          <Image source={close} style={styles.close} />
        </TouchableOpacity>
      </View>
    </ReactNativeModal>
  );
}
