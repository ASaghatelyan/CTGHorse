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

export function SignatureModal({onOK, isVisible, onCancel}) {
  const ref = useRef();
  // Called after ref.current.readSignature() reads a non-empty base64 string
  const handleOK = signature => {
    onOK(signature); // Callback from Component props
  };

  // Called after ref.current.readSignature() reads an empty string
  const handleEmpty = () => {
    console.log('Empty');
  };

  // Called after ref.current.clearSignature()
  const handleClear = () => {
    console.log('clear success!');
    ref.current.clearSignature();
  };

  // Called after end of stroke
  const handleEnd = () => {
    ref.current.readSignature();
  };

  // Called after ref.current.getData()
  const handleData = data => {
    console.log(data);
  };
  const style = `.m-signature-pad--footer {display: none; margin: 0px;}`;
  const handleConfirm = () => {
    ref.current.readSignature();
    onOK(ref.current.readSignature());
  };
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

        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity style={styles.cleanView} onPress={handleClear}>
            <Image source={clean} style={styles.clean} />
          </TouchableOpacity>
        </View>
        <SignatureScreen
          ref={ref}
          onOK={handleOK}
          webStyle={style}
          penColor={'#005DFF'}
        />
        <View style={styles.row}>
          <TouchableOpacity style={styles.borderBtnView} onPress={onCancel}>
            <Text style={styles.borderBtnText}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnView} onPress={handleConfirm}>
            <Text style={styles.btnText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ReactNativeModal>
  );
}
