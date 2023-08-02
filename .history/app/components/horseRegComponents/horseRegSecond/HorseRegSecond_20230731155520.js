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
  const subscription = useSelector(
    store => store.userInfo.subscription.subscribtion_plan,
  );

  const [err, setErr] = useState('');
  const [name, setName] = useState(store.name ? store.name : '');
  const [price, setPrice] = useState('');
  const [choosed, setChoosed] = useState(
    subscription === 'basic'
      ? 'No'
      : store.notForSale
      ? store.notForSale
      : 'Yes',
  );
  console.log(price, 'price');
  let goBack = () => {
    onNextPrev(25);
    dispatch({
      type: 'SET_HORSEINFO',
      payload: {name, price: Math.floor(price + taxPrice)},
    });
    setIndex(0);
  };

  let next = () => {
    if (name && choosed === 'Yes' && typeof price == 'number') {
      setErr('');
      onNextPrev(75);
      setIndex(2);
      dispatch({
        type: 'SET_HORSEINFO',
        payload: {
          name,
          price: Math.floor(price + taxPrice),
          notForSale: choosed,
        },
      });
    } else if (name && choosed === 'No') {
      setErr('');
      onNextPrev(75);

      setIndex(2);
      dispatch({
        type: 'SET_HORSEINFO',
        payload: {name, price: 'Not For Sale', notForSale: choosed},
      });
    } else setErr('Please fill in all required fields');
  };

  let taxPriceMore = price > 0 && Number((price * 5) / 100);
  let taxPriceLess = price > 0 && Number(500);

  let taxPrice =
    typeof price == 'number' && price <= 10000 ? taxPriceLess : taxPriceMore;

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
            <TouchableOpacity
              disabled={subscription === 'basic' ? true : false}
              style={styles.gFlex}
              onPress={() => {
                setPrice('');
                setChoosed('Yes');
              }}>
              <Image source={choosed === 'Yes' ? off : on} style={styles.pic} />
              <Text style={styles.text}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gFlex}
              onPress={() => {
                setChoosed('No');
                setPrice('');
              }}>
              <Image source={choosed === 'Yes' ? on : off} style={styles.pic} />
              <Text style={styles.text}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
        <InputHorseReg
          reqField={true}
          title="Enter Price"
          value={price}
          onChange={t => setPrice(Number(t))}
          error={err}
          editable={choosed === 'Yes' ? true : false}
          keyType={'number-pad'}
        />
        <Text style={styles.err}>{err}</Text>
        {(typeof price == 'number' || store.price ) && (
          <View style={styles.totalView}>
            <Text style={styles.totalText}>Total Price with Fee</Text>
            <Text style={styles.priceText}>
              $
              {typeof price == 'number' && price > 0
                ? Math.floor(price + taxPrice)
                : store.price}
            </Text>
          </View>
        )}
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
