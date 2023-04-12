import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import ava from 'app/assets/img/ava.png';
import {styles} from './style';
import {InputHorseReg} from 'app/components/inputHorseReg';
import {useDispatch, useSelector} from 'react-redux';
import {BottomBtn} from 'app/components/bottomBtn';
import Toast from 'react-native-toast-message';


export function HorseRegSecond({onNextPrev, percentage, navigation}) {
  let dispatch = useDispatch();
  let store = useSelector(state => state.horseRegister);

  const [name, setName] = useState(store.name ? store.name : '');
  const [price, setPrice] = useState(store.price ? store.price : '');
  let goBack = () => {
    onNextPrev(25);
    dispatch({
      type: 'SET_HORSEINFO',
      payload: {name, price},
    });
  };

  let next = () => {
    if (name && price) {
      onNextPrev(75);
    }else{showToast() 
  };
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  return (
    <View style={styles.gView}>
      <View style={styles.container}>
        <Image source={ava} style={styles.ava} />
        <InputHorseReg title="Name" value={name} onChange={t => setName(t)} />
        <InputHorseReg
          title="Enter Price"
          value={price}
          onChange={t => setPrice(t)}
        />
      </View>
      <BottomBtn
        nameL="Back"
        nameR="Next"
        onChangeL={goBack}
        onChangeR={next}
        styles={styles.bottomBtn}
      />
    </View>
  );
}
