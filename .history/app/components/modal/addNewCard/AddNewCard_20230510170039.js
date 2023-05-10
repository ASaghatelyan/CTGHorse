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
import {apiKey} from 'app/constant/StripeInfo';
import Modal from 'react-native-modal';
import close from 'app/assets/img/close.png';
import Stripe from 'react-native-stripe-api';
import axiosInstance from 'app/networking/api';
import {useSelector} from 'react-redux';

export function AddNewCard({isVisible, getDate, onClose}) {
  let userHorseInfo = useSelector(state => state.userInfo);
  const [cardNum, setCardNum] = useState();
  const [cvv, setCvv] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [load, setLoad] = useState(false);
  const [choosed, setChoosed] = useState('');
  const [err, setErr] = useState('');
  let addCard = async () => {
    try {
      if (cardNum && cvv && month && year) {
        setLoad(true);
        const client = new Stripe(apiKey);
        const sendingData = {
          number: cardNum,
          exp_month: month,
          exp_year: year,
          cvc: cvv,
        };
        const cardData = await client.createToken(sendingData);
        console.log(cardData);
        await axiosInstance.post(`/add-card`, {
          source: cardData.id,
          email: userHorseInfo.email,
        });
        getDate();
        onClose();
        setCardNum('');
        setCvv('');
        setMonth('');
        setYear('');
        setLoad(false);
      } else if (!cardNum) {
        setChoosed('Card');
        setErr('Card number is not filed');
      } else if (!month) {
        setChoosed('Month');
        setErr('Month is not filed');
      } else if (!year) {
        setChoosed('Year');
        setErr('Year is not filed');
      }
      else if (!cvv) {
        setChoosed('Cvv');
        setErr('Cvv is not filed');
      }
    } catch (error) {
      setLoad(false);
      console.log(error.response);
    }
  };
 
  return (
    <Modal isVisible={isVisible} style={styles.modalView} avoidKeyboard>
      <View style={styles.content}>
        <TouchableOpacity style={styles.closeView} onPress={onClose}>
          <Image source={close} style={styles.close} />
        </TouchableOpacity>
        <InputHorseReg
          title="Card number"
          placeholder="Card number"
          value={cardNum}
          onChange={text =>{
            // setErr('')
            setCardNum(text)}}
          colorT={{color: '#190C04'}}
          lengthNumber={16}
          err={  choosed==='Card' && err}
          keyType="number-pad"
        />
        <View
          style={styles.inputView}>
          <View
            style={{
              flexDirection: 'row',
              width: '45%',
              justifyContent: 'space-between',
            }}>
            <InputHorseReg
              topStyle={{width: '45%'}}
              title="Expiry"
              placeholder="MM "
              value={month}
              onChange={t => setMonth(t)}
              colorT={{color: '#190C04'}}
              lengthNumber={2}
              err={  choosed==='Month' && err}
              keyType="number-pad"
            /> 
            <InputHorseReg
              topStyle={{width: '45%'}}
              title="Date"
              placeholder="YY"
              value={year}
              onChange={t => setYear(t)}
              colorT={{color: '#190C04'}}
              lengthNumber={2}
              err={  choosed==='Year' && err}
              keyType="number-pad"
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
            keyType="number-pad"
            err={  choosed==='Cvv' && err}
          />
        </View>
        <GButton
          btnName="Add Card"
          customStyle={styles.btn}
          color={!load ? styles.btn : {opacity: 0.2}}
          handelMove={load ? console.log('dddd') : addCard}
        />
      </View>
    </Modal>
  );
}
