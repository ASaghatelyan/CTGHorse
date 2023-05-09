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
import {GButton, HeaderNavi} from 'app/components';
import Modal from 'react-native-modal';
import close from 'app/assets/img/close.png';
import {CardForm} from '@stripe/stripe-react-native';

export function AddNewCard({isVisible, navigation, onClose}) {
  const [cardDetails, setCardDetails] = useState(null);
  console.log(cardDetails, 'cardDetails');
  return (
    <Modal
      isVisible={isVisible}
      style={{margin: 0, justifyContent: 'flex-end', flex: 1,}}>
      <View style={{backgroundColor: 'red', height: 300, paddingTop: 22}}>
        <TouchableOpacity style={styles.closeView} onPress={onClose}>
          <Image source={close} style={styles.close} />
        </TouchableOpacity>
        <CardForm
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
