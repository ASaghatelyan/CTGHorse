import {View, Text} from 'react-native';
import React,{useRef,} from 'react';
import SignatureScreen from 'react-native-signature-canvas';
import ReactNativeModal from 'react-native-modal';
import { styles } from './style';


export function SignatureModal({}) {
  const ref = useRef();

  // Called after ref.current.readSignature() reads a non-empty base64 string
  const handleOK = signature => {
    console.log(signature);
    onOK(signature); // Callback from Component props
  };

  // Called after ref.current.readSignature() reads an empty string
  const handleEmpty = () => {
    console.log('Empty');
  };

  // Called after ref.current.clearSignature()
  const handleClear = () => {
    console.log('clear success!');
  };

  // Called after end of stroke
  const handleEnd = () => {
    ref.current.readSignature();
  };

  // Called after ref.current.getData()
  const handleData = data => {
    console.log(data);
  };
  return (
    <ReactNativeModal style={{flex:1,backgroundColor:'red',margin:0 }} isVisible>
      <SignatureScreen
      style={{flex:1,marginTop:112}}
        ref={ref}
        onEnd={handleEnd}
        onOK={handleOK}
        onEmpty={handleEmpty}
        onClear={handleClear}
        onGetData={handleData}
        // autoClear={true}
        // descriptionText={text}
      />
    </ReactNativeModal>
  );
}
 