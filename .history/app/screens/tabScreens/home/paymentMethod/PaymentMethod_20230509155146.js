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
import {AddNewCard, GButton, HeaderNavi, PayForOrder} from 'app/components';
import visaIc from 'app/assets/img/visa.png';
import paypalIc from 'app/assets/img/paypal.png';
import pic from 'app/assets/img/pic.png';
import unpic from 'app/assets/img/unpic.png';
import Stripe from 'react-native-stripe-api';
import axiosInstance from 'app/networking/api';

export function PaymentMethod({navigation}) {
  const [choosed, setChoosed] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [addCardModal, setAddCardModal] = useState(false);
const [method,setMethod]=useState([])
 
  useEffect(() => {
    getDate();
  }, []);

  let getDate = async (id, ind) => {
    try {
      let res = await axiosInstance.get(`/get-cards`);
      setMethod(res.data
        );
    } catch (error) {
      console.log(error.response);
    }
  };
   console.log(method.length);
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
          
        {method.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.methodItem}
              onPress={() => {
                setChoosed(item.id);
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.typeView}>
                <Image
                  source={item.type === 'paypal' ? paypalIc : visaIc}
                  style={styles.typeIc}
                />
                <Image
                  source={choosed !== item.id ? pic : unpic}
                  style={styles.picIc}
                />
              </View>
              <Text>{item.info}</Text>
            </TouchableOpacity>
          );
        })}
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
          handelMove={() =>setModalVisible(!modalVisible)}
        />
      </ScrollView>
      <PayForOrder
        isVisible={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
        navigation={navigation}
      />
      <AddNewCard
        isVisible={addCardModal}
        onClose={() => setAddCardModal(!addCardModal)}
        navigation={navigation}
        getDate={getDate}
      />
    </View>
  );
}
