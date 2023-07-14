import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ReactNativeModal from 'react-native-modal';
import {styles} from './style';
 

export function CustomToastModal({isVisible, onClose, data, status}) {
  return (
    <ReactNativeModal
      animationIn={'rubberBand'}
      swipeDirection={['right', 'left', 'down']}
      isVisible={isVisible}
      onSwipeComplete={() => {
        onClose();
      }}
      backdropColor="transparent"
      onBackdropPress={onClose}
      style={styles.modal}>
      {status ? (
        <View style={styles.error}>
          <Image source={noRev} style={styles.norev} />
          <Text style={styles.title}>
            You can leave a review only after receiving it.
          </Text>
        </View>
      ) : (
        <View style={styles.success}>
          <Image source={doneRev} style={styles.doneRev} />
          <Text style={styles.title}>Thank you for your review</Text>
        </View>
      )}
    </ReactNativeModal>
  );
}