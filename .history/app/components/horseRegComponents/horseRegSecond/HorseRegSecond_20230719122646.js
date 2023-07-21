import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ava from 'app/assets/img/ava.png';
import {styles} from './style';
import {InputHorseReg} from 'app/components/inputHorseReg';
import {useDispatch, useSelector} from 'react-redux';
import {BottomBtn} from 'app/components/bottomBtn';
import off from 'app/assets/img/unpic.png';
import on from 'app/assets/img/pic.png';

export function HorseRegSecond({onNextPrev, percentage, navigation, setIndex}) {
  let dispatch = useDispatch();
  let store = useSelector(state => state.horseRegister);
  const [err, setErr] = useState('');
  const [name, setName] = useState(store.name ? store.name : '');
  const [price, setPrice] = useState(store.price ? store.price : '');
  const [choosed, setChoosed] = useState('Yes');
  let goBack = () => {
    onNextPrev(25);
    dispatch({
      type: 'SET_HORSEINFO',
      payload: {name, price},
    });
    setIndex(0);
  };

  let next = () => {
    if (name && price) {
      setErr('');
      onNextPrev(75);
      setIndex(2);
      dispatch({
        type: 'SET_HORSEINFO',
        payload: {name, price},
      });
    } else setErr('Please fill in all required fields');
  };

  return (
    <View style={styles.gView}>
      <View style={styles.container}>
        <Image
          source={store?.genImg?.uri ? {uri: store?.genImg?.uri} : ava}
          style={styles.ava}
        />
        <InputHorseReg
          title="Name"
          value={name}
          onChange={t => {
            setName(t);
          }}
          reqField={true}
          error={err}
        />
        <View style={styles.forSaleView}>
          <Text style={styles.title}>For Sale</Text>
          <View style={styles.infoView}>
            <TouchableOpacity style={styles.gFlex} onPress={()=>}>
              <Image source={choosed ==='Yes' ?on :off} style={styles.pic}/>
              <Text style={styles.text}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gFlex}>
              <Image source={choosed !=='Yes' ?on :off}  style={styles.pic}/>
              <Text style={styles.text}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
        <InputHorseReg
          reqField={true}
          title="Enter Price"
          value={price}
          onChange={t => setPrice(t)}
          error={err}
        />
        <Text style={styles.err}>{err}</Text>
      </View>
      <BottomBtn
        nameL="Back"
        nameR="Next"
        onChangeL={goBack}
        onChangeR={next}
        customStyles={styles.bottomBtn}
      />
    </View>
  );
}
