import {
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {GButton, Input} from 'app/components';
import {styles} from './style';
import back from 'app/assets/img/back.png'; 
import {validateEmail} from 'app/constant/validation';
import axiosInstance from 'app/networking/api';

export function ForgotByEmail({navigation}) {
  const [email, setEmail] = useState('');
  const [choosed, setChoosed] = useState('');
  const [err, setErr] = useState('');

  let handleChange = (e, name) => {
    name(e);
    setErr('');
  };

  //   let validateEmail = email => {
  //     const re =
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return re.test(String(email).toLowerCase());
  //   };

  let handleSingIn = async () => {
    // setLoad(true);
    let firstLog = await getFirstLog();
 
    try {
      if (validateEmail(email) && password.length > 7) {
        let res = await axiosInstance.post(`/login`, {
          email, 
        }); 
        setEmail(''); 
        // setLoad(false);
        // navigation.replace('ConfirmCode',email);
      } else if (!validateEmail(email)) {
        setChoosed('email');
        setErr('Please write correct email address');
        // setLoad(false);
      }  
    } catch (error) {
      setErr(error.response.data.error);
      // setLoad(false);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{flex: 1, paddingHorizontal: 15}}>
      <SafeAreaView />
      <View style={styles.topView}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backView}>
          <Image source={back} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>Forgot password</Text>
      </View>
      <ScrollView>
        <View> 
          <Text style={styles.subTitleText}>
            Please enter the email address you'd like your password reset
            information sent to
          </Text>
        </View>
        <Input
          title="Enter email address "
          onChange={e => {
            setChoosed('');
            handleChange(e, setEmail);
          }}
          value={email}
          errStyle={
            choosed === 'Email' && {
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: '#FFF',
            }
          }
          err={true && err}
        />
        <View style={styles.btnView}>
          <GButton
            btnName="Request email"
            handelMove={handleSingIn}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
