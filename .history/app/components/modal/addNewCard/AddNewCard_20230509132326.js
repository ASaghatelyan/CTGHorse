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
import Modal from 'react-native-modal';
import close from 'app/assets/img/close.png';
import {CardForm} from '@stripe/stripe-react-native';

export function AddNewCard({isVisible, navigation, onClose}) {
  const [cardNum, setCardNum] = useState();
  const [cvv,setCvv]=useState('')
  const [expiry,setExpiry]=useState('')
  const [cardDetails, setCardDetails] = useState(null);
  console.log(cardDetails, 'cardDetails');
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
          <InputHorseReg
            topStyle={{width: '45%'}}
            title="Expiry"
            placeholder="MM/YY"
            value={cvv}
            onChange={text => setCvv(text)}
            colorT={{color: '#190C04'}}
          />
          <InputHorseReg
            topStyle={{width: '45%'}}
            title="CVC/CVV"
            placeholder="CVC/CVV"
            value={expiry}
            onChange={text => setExpiry(text)}
            colorT={{color: '#190C04'}}
            secure={true}
            lengthNumber
          />
        </View>
        <GButton
          btnName="Add Card"
          customStyle={styles.btn}
          handelMove={() => {
            onClose();
          }}
        />
      </View>
    </Modal>
  );
}
