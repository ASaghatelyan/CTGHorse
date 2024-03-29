import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './style';
import {
  AddNewCard,
  ErrorModal,
  GButton,
  HeaderNavi,
  LoadingModal,
  PayForOrder,
  PayedModal,
} from 'app/components';
import cc from 'app/assets/img/cc.png';
import ve from 'app/assets/img/ve.png';
import paypalIc from 'app/assets/img/paypal.png';
import pic from 'app/assets/img/pic.png';
import unpic from 'app/assets/img/unpic.png';

import axiosInstance from 'app/networking/api';
import {CardMethod} from '../cardMethod';
import { useSelector } from 'react-redux';

export function PaymentMethod({navigation, route}) {
  let userHorseInfo = useSelector(state => state.userInfo);
  const [verified, setVerified] = useState('');
  const [choosed, setChoosed] = useState(0);
  const [payed, setPayed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [addCardModal, setAddCardModal] = useState(false);
  const [method, setMethod] = useState([]);
  const [load, setLoad] = useState(false);
  const [errModal, setErrModal] = useState(false);
  const [err, setErr] = useState('');
  const [activIndex, setActivIndex] = useState(0);

  useEffect(() => {
    getDate();
  }, []);

  let getDate = async (id, ind) => {
    try {
      setLoad(true);
      let res = await axiosInstance.get(`/get-cards`);
      setMethod(
        res.data.sort(function (x, y) {
          return x.default == 1 ? -1 : y.default == 1 ? 1 : 0;
        }),
      );
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.log(error.response);
    }
  };

  let next = () => {
    switch (activIndex) {
      case 0:
        return navigation.navigate('CardMethod', {
          horse: route.params.horse,
          method,
        });
    }
  };

  return (
    <View style={styles.content}>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={'Payment method'}
        leftOnPress={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.methodItem}
          onPress={() => setActivIndex(0)}>
          <View style={styles.typeView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={cc} style={styles.cc} />
              <Text style={styles.text}>By Credi Card</Text>
            </View>
            <Image
              source={activIndex === 0 ? unpic : pic}
              style={styles.picIc}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.methodItem}
          onPress={() => setActivIndex(1)}>
          <View style={styles.typeView}>
            <Image source={paypalIc} style={styles.paypal} />
            <Image
              source={activIndex == 1 ? unpic : pic}
              style={styles.picIc}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.methodItem}
          onPress={() => setActivIndex(2)}>
          <View style={styles.typeView}>
            <Image source={ve} style={styles.ve} />
            <Image
              source={activIndex === 2 ? unpic : pic}
              style={styles.picIc}
            />
          </View>
        </TouchableOpacity>
        <GButton btnName="Next" customStyle={styles.btn} handelMove={next} />
      </ScrollView>
      <PayForOrder
        isVisible={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
        navigation={navigation}
        data={method[choosed]}
        horse={route.params.horse}
        complite={() => setPayed(true)}
      />
      <AddNewCard
        isVisible={addCardModal}
        onClose={async () => {
          if (userHorseInfo.is_account_verified === 'not_verified') {
            let res = await axiosInstance.get(`/create-verification-link`);

            setVerified(res.data);
          } else setAddCardModal(!addCardModal);
        }}
        navigation={navigation}
        getDate={getDate}
      />
      <LoadingModal visible={load} />
      <ErrorModal
        isVisible={errModal}
        err={err}
        onClose={() => setErrModal(!errModal)}
      />
      <PayedModal
        isVisible={payed}
        onClose={() => setPayed(false)}
        navigation={navigation}
      />
    </View>
  );
}
