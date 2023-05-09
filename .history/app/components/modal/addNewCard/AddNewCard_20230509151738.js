import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './style';
import {GButton, HeaderNavi, InputHorseReg} from 'app/components';
import { apiKey } from 'app/constant/StripeInfo';
import Modal from 'react-native-modal';
import close from 'app/assets/img/close.png'; 

export function AddNewCard({isVisible, navigation, onClose}) {
  const [cardNum, setCardNum] = useState();
  const [cvv,setCvv]=useState('')
  const [expiry,setExpiry]=useState('')
  const [cardDetails, setCardDetails] = useState(null);
  let addCard = async () => {
    
    const client = new Stripe(apiKey);
    const sendingData = {
      number: cardNum,
      exp_month: cvv,
      exp_year: '24',
      cvc:cvv,
    };
    const cardData = await client.createToken(sendingData);
    console.log(cardData);
  };


 let handleChange = (text) => {
    let textTemp = text;
    if (textTemp[0] !== '1' && textTemp[0] !== '0') {
      textTemp = '';
    }
    if (textTemp.length === 2) {
      if (parseInt(textTemp.substring(0, 2)) > 12 || parseInt(textTemp.substring(0, 2)) == 0) {
        textTemp = textTemp[0];
      } else if (expiry.length === 2) {
        textTemp += '/';
      } else {
        textTemp = textTemp[0];
      }
    }
    setExpiry(  textTemp)
  }
  console.log(expiry);
  return (
    <Modal isVisible={isVisible} style={styles.modalView}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.closeView} onPress={onClose}>
          <Image source={close} style={styles.close} />
        </TouchableOpacity> 
        <InputHorseReg
          title="Card number"
          placeholder="Card number"
          value={cardNum}
          onChange={text => setCardNum(text)}
          colorT={{color: '#190C04'}}
        />
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
         <View>
         <InputHorseReg
            topStyle={{width: '45%'}}
            title="Expiry"
            placeholder="MM/YY"
            value={expiry}
            onChange={handleChange}
            colorT={{color: '#190C04'}}
            lengthNumber={5}
          />
         </View>
          <InputHorseReg
            topStyle={{width: '45%'}}
            title="CVC/CVV"
            placeholder="CVC/CVV"
            value={cvv}
            onChange={text => setCvv(text)}
            colorT={{color: '#190C04'}}
            secure={true}
            lengthNumber={3}
          />
        </View>
        <GButton
          btnName="Add Card"
          customStyle={styles.btn}
          handelMove={addCard}
        />
      </View>
    </Modal>
  );
}
