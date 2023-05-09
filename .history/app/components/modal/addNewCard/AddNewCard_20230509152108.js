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
  const [month,setMonth]=useState('')
  condt [year,set]
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
         <View  style={{
            flexDirection: 'row',
            width: '45%', 
            justifyContent: 'space-between',
          }}>
         <InputHorseReg
            topStyle={{width: '45%'}}
          
            placeholder="MM "
            value={expiry}
            onChange={}
            colorT={{color: '#190C04'}}
            lengthNumber={2}
          />
       
         <InputHorseReg
            topStyle={{width: '45%'}} 
            placeholder="YY"
            value={expiry}
            onChange={handleChange}
            colorT={{color: '#190C04'}}
            lengthNumber={2}
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
