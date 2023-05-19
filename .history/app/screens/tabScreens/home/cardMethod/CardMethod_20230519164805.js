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
import visaIc from 'app/assets/img/visa.png';
import typeC from 'app/assets/img/cardType.png';
import paypalIc from 'app/assets/img/paypal.png';
import pic from 'app/assets/img/pic.png';
import unpic from 'app/assets/img/unpic.png';
import {PaymentIcon} from 'react-native-payment-icons';
import axiosInstance from 'app/networking/api';
export function CardMethod({navigation}) {
  const [choosed, setChoosed] = useState(0);
  const [payed, setPayed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [addCardModal, setAddCardModal] = useState(false);
  const [method, setMethod] = useState(
    route.params.data.sort(function (x, y) {
      return x.default === 1 ? -1 : y.default === 1 ? 1 : 0;
    }),
  );
  const [load, setLoad] = useState(false);
  const [errModal, setErrModal] = useState(false);
  const [err, setErr] = useState('');

  let getDate = async (id, ind) => {
    try {
      setLoad(true);
      let res = await axiosInstance.get(`/get-cards`);
      console.log(res.data, 'sdsdsdsd');
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
  return (
    <View>
      <Text>CardMethod</Text>
    </View>
  );
}
