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
  const [CardNum, setCardNum] = useState();
  const [cardDetails, setCardDetails] = useState(null);
  console.log(cardDetails, 'cardDetails');
  return (
    <Modal isVisible={isVisible} style={styles.modalView}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.closeView} onPress={onClose}>
          <Image source={close} style={styles.close} />
        </TouchableOpacity>
        {/* <CardForm
          placeholder={{
            number: '4242 4242 4242 4242',
          }}
          onFormComplete={cardDetails => {
            console.log('card details', cardDetails);
            setCardDetails(cardDetails);
          }}
          style={{
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
          cardStyle={{
            backgroundColor: '#F5F5F5',
            textAlign: 'center',
            textColor: 'pink',
          }}
        /> */}
        <InputHorseReg
          title="Name"
          value={name}
          onChange={text => setName(text)}
          colorT={{color: '#190C04'}}
        />
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
