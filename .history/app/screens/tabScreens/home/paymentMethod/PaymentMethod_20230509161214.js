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
import {AddNewCard, ErrorModal, GButton, HeaderNavi, LoadingModal, PayForOrder} from 'app/components';
import visaIc from 'app/assets/img/visa.png';
import typeC from 'app/assets/img/cardType.png';
import paypalIc from 'app/assets/img/paypal.png';
import pic from 'app/assets/img/pic.png';
import unpic from 'app/assets/img/unpic.png';
import Stripe from 'react-native-stripe-api';
import axiosInstance from 'app/networking/api';

export function PaymentMethod({navigation,route}) {
  const [choosed, setChoosed] = useState(0);
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
      setLoad(true)
      let res = await axiosInstance.get(`/get-cards`);
      setMethod(res.data);
      setLoad(false)
    } catch (error) {
      setLoad(false)
      console.log(error.response);
    }
  };
console.log(route.params);
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
        { (
          method.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.methodItem}
                onPress={() => {
                  setChoosed(index);
                }}>
                <View style={styles.typeView}>
                  <Image
                    source={item.type === 'paypal' ? paypalIc : visaIc}
                    style={styles.typeIc}
                  />
                  <Image
                    source={choosed !== index ? pic : unpic}
                    style={styles.picIc}
                  />
                </View>
                <Text style={styles.infoText}>
                  ***** ***** **** {item.last4}
                </Text>
              </TouchableOpacity>
            );
          })
        ) 
        // : (
        //   <View style={styles.methodItem}>
        //     <View style={styles.typeView}>
        //       <Image source={typeC} style={styles.noTypeIc} />
        //     </View>
        //     <Text style={[styles.infoText, {textAlign: 'center'}]}>
        //       No Card
        //     </Text>
        //   </View>
        // )
        }
        <TouchableOpacity
          style={styles.addCard}
          onPress={() => {
            setAddCardModal(!addCardModal);
          }}>
          <Text style={styles.addCardText}>+ Add New Card</Text>
        </TouchableOpacity>
        <GButton
          btnName="Add Payment Method"
          customStyle={styles.btn}
          handelMove={() => setModalVisible(!modalVisible)}
        />
      </ScrollView>
      <PayForOrder
        isVisible={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
        navigation={navigation}
        data={method[choosed]}
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
    </View>
  );
}
