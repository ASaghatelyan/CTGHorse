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
const {StatusBarManager} = NativeModules;
import close from 'app/assets/img/close.png'; 
import ReactNativeModal from 'react-native-modal';
import Pdf from 'react-native-pdf';

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
        <TouchableOpacity>
            <Image source={close} style={styles.close}/>
        </TouchableOpacity>
        <View style={styles.container}>
          <Pdf
            showsVerticalScrollIndicator={false}
            source={info}
            onError={error => {
              console.log(error);
            }}
            onPressLink={async uri => {
              await Linking.openURL(`${uri}`);
            }}
            style={styles.pdf}
          />
        </View>
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
