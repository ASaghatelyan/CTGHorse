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
import WebView from 'react-native-webview';
import {useSelector} from 'react-redux';

export function CardMethod({navigation, route}) {
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

  useEffect(() => {
    getDate();
  }, []);
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

    let getCards = async (id, ind) => {
      try {
        let res = await axiosInstance.get(`/get-cards`);
        navigation.navigate('PaymentMethod', {horse: data[0], data: res.data});
      } catch (error) {
        console.log(error.response);
      }
    };
  };

  return (
    <View style={styles.content}>
      <SafeAreaView />
      {!verified ? (
        <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
          <HeaderNavi
            leftBtn={'Credit Cards'}
            leftOnPress={() => navigation.goBack()}
          />
          {method.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.methodItem}
                onPress={() => {
                  setChoosed(index);
                }}>
                <View style={styles.typeView}>
                  <PaymentIcon
                    type={item.brand.replace(' ', '-').toLowerCase()}
                    width={40}
                    height="20%"
                  />
                  <Image
                    source={choosed !== index ? pic : unpic}
                    style={styles.picIc}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.infoText}>
                    ***** ***** **** {item.last4}
                  </Text>
                  {item.default === 1 && (
                    <View style={styles.statementView}>
                      <Text style={styles.statementText}>Default</Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity
            style={styles.addCard}
            onPress={async () => { 
              if (userHorseInfo.is_account_verified  === 'not_verified') {
                let res = await axiosInstance.get(`/create-verification-link`);
                setVerified(res.data);
              } else setAddCardModal(!addCardModal);
            }}>
            <Text style={styles.addCardText}>+ Add New Card</Text>
          </TouchableOpacity>
          <GButton
            btnName="Pay"
            customStyle={styles.btn}
            handelMove={() => {
              if (method.length > 0) {
                setModalVisible(!modalVisible);
              }
            }}
          />
        </ScrollView>
      ) : (
        <View style={{flex: 1}}>
          <HeaderNavi
            leftBtn={'Go To App'}
            leftOnPress={async () => {
              let res = await axiosInstance.get(`/get-user-details`, {});
              await axiosInstance.post(`/create-token`);
              dispatch({
                type: 'SET_USERINFO',
                payload: res.data.userData[0],
              });
              setVerified('');
            }}
          />
          <WebView source={{uri: verified}} style={{flex: 1}} />
        </View>
      )}
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
        onClose={() => setAddCardModal(!addCardModal)}
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