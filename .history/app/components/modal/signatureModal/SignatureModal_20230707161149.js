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
    onCancel()
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
 
      <View style={[styles.container]}>
        <Text style={styles.title}>Please, put your signature</Text> 
        <TouchableOpacity style={styles.cleanView} onPress={handleClear}>
          <Image source={clean} style={styles.clean} />
        </TouchableOpacity> 
        <SignatureScreen
          ref={ref}
          onOK={handleOK}
          webStyle={`.m-signature-pad {
            box-shadow: none; border: none;
            margin-left: 0px;
            margin-top: 0px;
          } 
           .m-signature-pad--body
            canvas {
              background-color: #E5E5F1;
            }
          .m-signature-pad--body {border: none}
          .m-signature-pad--footer {display: none; margin: 0px;}
          body,html {
             width: 100%; 
             height: 80%;
          }`}
          penColor={'#005DFF'} 
          style={{ alignSelf: 'flex-start' }}
          
        />
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
