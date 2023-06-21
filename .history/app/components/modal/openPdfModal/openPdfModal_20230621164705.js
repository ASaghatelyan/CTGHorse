import {
  NativeModules,
  Text,
  StatusBar,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useRef} from 'react';
import {styles} from './style';
import clean from 'app/assets/img/clean.png';
const {StatusBarManager} = NativeModules;

import SignatureScreen from 'react-native-signature-canvas';
import ReactNativeModal from 'react-native-modal';

export function OpenPdfModal({info, isVisible, onCancel}) {
  return (
    <ReactNativeModal
      style={[
        styles.modal,
        {
          paddingTop: StatusBarManager.HEIGHT,
        },
      ]}
      isVisible={isVisible}>
      <View style={[styles.container]}>
        <Text style={styles.title}>Please, put your signature</Text>
        
        <View style={styles.row}>
          <TouchableOpacity style={styles.borderBtnView} onPress={onCancel}>
            <Text style={styles.borderBtnText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnView} onPress={onCancel}>
            <Text style={styles.btnText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ReactNativeModal>
  );
}
