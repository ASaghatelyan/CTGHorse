import {
  StyleSheet,
  Dimensions,
  Button,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useEffect, useState,useRef} from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import SignatureScreen from "react-native-signature-canvas";

const Sign = ({ text, onOK }) => {
  const ref = useRef();

  // Called after ref.current.readSignature() reads a non-empty base64 string
  const handleOK = (signature) => {
    console.log(signature);
    onOK(signature); // Callback from Component props
  };

  // Called after ref.current.readSignature() reads an empty string
  const handleEmpty = () => {
    console.log("Empty");
  };

  // Called after ref.current.clearSignature()
  const handleClear = () => {
    console.log("clear success!");
  };

  // Called after end of stroke
  const handleEnd = () => {
    ref.current.readSignature();
  };

  // Called after ref.current.getData()
  const handleData = (data) => {
    console.log(data);
  };

  return (
    <SignatureScreen
      ref={ref}
      onEnd={handleEnd}
      onOK={handleOK}
      onEmpty={handleEmpty}
      onClear={handleClear}
      onGetData={handleData}
      // autoClear={true}
      // descriptionText={text}
    />
  );
};


export default function App() {
 const [a,setA]= useState()
  return (
    // <Provider store={store}>
    //   <MainNAvigation />
    // </Provider>
   <
  );
}

 