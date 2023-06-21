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

export function OpenPdfModal({onOK, isVisible, onCancel}) {
  return (
    <ReactNativeModal
      style={[
        styles.modal,
        {
          paddingTop: StatusBarManager.HEIGHT,
        },
      ]}
      isVisible={isVisible}>
      {/*   <SignatureScreen
           penColor={'#005DFF'}
           ref={ref}
            onEnd={handleEnd}
           onOK={handleOK}
           onEmpty={handleEmpty}
            onClear={handleClear}
           onGetData={handleData}
             autoClear={true}
              descriptionText={text}
         /> */}
      <View style={[styles.container]}>
        <Text style={styles.title}>Please, put your signature</Text>
        <TouchableOpacity style={styles.cleanView} onPress={handleClear}>
          <Image source={clean} style={styles.clean} />
        </TouchableOpacity>

        <View style={styles.row}>
          <TouchableOpacity style={styles.borderBtnView} onPress={onCancel}>
            <Text style={styles.borderBtnText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnView} onPress={handleConfirm}>
            <Text style={styles.btnText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ReactNativeModal>
  );
}
