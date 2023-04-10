import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import ava from 'app/assets/img/ava.png';
import {styles} from './style';
import {InputHorseReg} from 'app/components/inputHorseReg';
import {useDispatch, useSelector} from 'react-redux';

export function HorseRegSecond({saveData}) {
  let dispatch = useDispatch();
  let store = useSelector(state => state.horseRegister);

  const [name, setName] = useState(store.name ? store.name : '');
  const [price, setPrice] = useState(store.price ? store.price : '');

  return (
    <View style={styles.container}>
      <Image source={ava} style={styles.ava} />
      <InputHorseReg
        title="Name"
        value={name}
        onChange={t => setName(t)}
        onEndEditing={() =>
          dispatch({
            type: 'SET_HORSEINFO',
            payload: {name},
          })
        }
      />
      <InputHorseReg
        title="Enter Price"
        value={price}
        onChange={t => setPrice(t)}
        onEndEditing={() =>
          dispatch({
            type: 'SET_HORSEINFO',
            payload: {price},
          })
        }
         onBlur={()=>dispatch({
          type: 'SET_HORSEINFO',
          payload: {price},
        })}
      />
    </View>
  );
}
