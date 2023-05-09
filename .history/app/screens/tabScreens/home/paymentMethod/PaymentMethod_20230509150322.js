import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './style';
import {AddNewCard, GButton, HeaderNavi, PayForOrder} from 'app/components';
import visaIc from 'app/assets/img/visa.png';
import paypalIc from 'app/assets/img/paypal.png';
import pic from 'app/assets/img/pic.png';
import unpic from 'app/assets/img/unpic.png';
import Stripe from 'react-native-stripe-api';

export function PaymentMethod({navigation}) {
  const [choosed, setChoosed] = useState(2);
  const [modalVisible, setModalVisible] = useState(false);
  const [addCardModal, setAddCardModal] = useState(false);

  let method = [
    {
      id: 1,
      type: 'paypal',
      status: 'false',
      info: 'alma.lawson@example.com',
    },
    {
      id: 2,
      type: 'visa',
      status: 'false',
      info: '3235 65645 6464 232',
    },
    {
      id: 3,
      type: 'visa',
      status: 'false',
      info: '3235 65645 6464 232',
    },
  ];

  let getDate = async (id, ind) => {
    try {
    
         await axiosInstance.delete(`/get-cards`) 
    
      
    } catch (error) {
      console.log(error.response);
    }
  };
  let addCard = async () => {
    const apiKey =
      'sk_test_51J7wyFCHIUiOha1H4f1HmTqcCoemMvYwoA87bMuPfpogAzLjUsMeCBbHB4NSVI0WEN772SnUwFrmsB51CHuKESlq00UjGJMnKZ';
    const client = new Stripe(apiKey);
    const sendingData = {
      number: '4242424242424242',
      exp_month: '11',
      exp_year: '24',
      cvc: '424',
    };
    const cardData = await client.createToken(sendingData);
    console.log(cardData);
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
          handelMove={addCard}
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
      />
    </View>
  );
}
