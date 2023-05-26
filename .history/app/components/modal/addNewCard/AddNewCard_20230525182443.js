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
import {CreditCardInput} from 'react-native-credit-card-input';

export function AddNewCard({isVisible, getDate, onClose}) {
  let userHorseInfo = useSelector(state => state.userInfo);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState('');
  const [data, setData] = useState([]);

  let addCard = async () => {
    try {
      if (data.valid) {
        setLoad(true);
        const client = new Stripe(apiKey);
        const sendingData = {
          number: data.values.number,
          exp_month: data.values.expiry.substring(
            0,
            data.values.expiry.lastIndexOf('/'),
          ),
          exp_year: data.values.expiry.substring(
            data.values.expiry.lastIndexOf('/') + 1,
          ),
          cvc: data.values.cvc,
        };
        const cardData = await client.createToken(sendingData);
        if (!cardData?.error) {
          let ress = await axiosInstance.post(`/add-card`, {
            source: cardData.id,
            email: userHorseInfo.email,
          });
          getDate();
          onClose();
        } else {
          setErr(cardData?.error?.message);
        }
        setLoad(false);
      } else if (data.length === 0) {
        setErr('Please complete all fields');
      }
    } catch (error) {
      setLoad(false);
      console.log(error, 'dffd');
    }
  };
  let _onChange = form => {
    setErr('');
    setData(form);
  };

  return (
    <Modal isVisible={isVisible} style={styles.modalView} avoidKeyboard>
      <View style={styles.content}>
        <TouchableOpacity style={styles.closeView} onPress={onClose}>
          <Image source={close} style={styles.close} />
        </TouchableOpacity>
        {/* <InputHorseReg
          title="Card number"
          placeholder="Card number"
          value={cardNum}
          onChange={text => {
            setErr('');
            setCardNum(text);
          }}
          colorT={{color: '#190C04'}}
          lengthNumber={16}
          keyType="number-pad"
        />
        <View style={styles.inputView}>
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
              onChange={t => {
                setErr('');
                setMonth(t);
              }}
              colorT={{color: '#190C04'}}
              keyType="number-pad"
              lengthNumber={2}
            />
            <InputHorseReg
              topStyle={{width: '45%'}}
              title="Date"
              placeholder="YY"
              value={year}
              onChange={t => {
                setErr('');
                setYear(t);
              }}
              colorT={{color: '#190C04'}}
              lengthNumber={2}
              keyType="number-pad"
            />
          </View>
          <InputHorseReg
            topStyle={{width: '45%'}}
            title="CVC/CVV"
            placeholder="CVC/CVV"
            value={cvv}
            onChange={text => {
              setErr('');
              setCvv(text);
            }}
            colorT={{color: '#190C04'}}
            secure={true}
            lengthNumber={3}
            keyType="number-pad"
          />
        </View> */}
        <CreditCardInput onChange={_onChange} />
        {err ? (
          <View style={styles.errView}>
            <Text style={styles.errText}>{err}</Text>
          </View>
        ) : (
          <Text style={styles.err}></Text>
        )}
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
