import {
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {ErrorModal, GButton, Input, LoadingModal} from 'app/components';
import {styles} from './style';
import show from 'app/assets/img/on.png';
import hide from 'app/assets/img/off.png';
import axiosInstance from 'app/networking/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

const getFcmToken = async () => {
  try {
    const fcmToken = await messaging().getToken();
    if (!!fcmToken) {
      await AsyncStorage.setItem('fcmToken', fcmToken);
    }
    return fcmToken;
  } catch (error) {
    alert(error?.message);
  }
};

export function SignIn({navigation}) {
  let dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [errModal, setErrModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showHidePass, setShowHidePass] = useState(true);
  const [choosed, setChoosed] = useState('');
  const [err, setErr] = useState('');

  let getFirstLog = async () => {
    let data = await AsyncStorage.getItem('firstLog');
    return JSON.parse(data);
  };

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('token', value);
    } catch (e) {
      console.log(e);
    }
  };

  let handleChange = (e, name) => {
    name(e);
    setErr('');
  };

  let validateEmail = email => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  let handleSingIn = async () => {
    setModalVisible(true);
    let firstLog = await getFirstLog();
    try {
      if (validateEmail(email) && password.length > 7) {
        let res = await axiosInstance.post(`/login`, {
          email,
          password,
        });
        storeData(res.data.user.token); 
        dispatch({
          type: 'SET_USERINFO',
          payload: res.data.user,
        });
        setEmail('');
        setPassword('');
        console.log(res,'res');
        setModalVisible(false);
        !firstLog
          ? navigation.replace('FirstLogin')
          : navigation.replace('TabNavigation');
      } else if (!validateEmail(email)) {
        setChoosed('email');
        setErr('Please write correct email address');
        setModalVisible(false);
      } else if (password.length < 7) {
        setChoosed('password');
        setErr('Password must contain at least 8 characters');
        setModalVisible(false);
      }
    } catch (error) {
      setErr(error.response.data.error);
      setErrModal(!errModal);
      setModalVisible(false);
    }
  };
  
  let firebaseTokenRegister = async () => {
    try {
      let checkToken = await getFcmToken();
      let id = await getUniqueID;
      let data = {
        active: true,
        registration_id: checkToken,
        type: Platform.OS === 'ios' ? 'ios' : 'android',
        device_id: id,
      };
      let response = await axiosInstance.post('v1/users/fcm-devices/', data);
      setLoading(false);
      props.navigation.replace('TabNavigation');
    } catch (e) {
      setLoading(false);
    }
  };
  
  return (
    <KeyboardAvoidingView
    behavior={Platform === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, paddingHorizontal: 15}}>
      <SafeAreaView />
      <ScrollView>
        <View>
          <Text style={styles.title}>Sign in</Text>
          <Text style={styles.subTitleText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.{' '}
          </Text>
        </View>
        <Input
          title="Email"
          onChange={e => {
            setChoosed('');
            handleChange(e, setEmail);
          }}
          value={email}
          errStyle={
            choosed === 'email' && {
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: '#FFF',
            }
          }
          err={choosed === 'email' && err}
          inputBtnView={
            choosed === 'email'
              ? Platform.OS === 'ios'
                ? styles.showPassBtnIOS
                : styles.showPassBtnAndroid
              : null
          }
        />
        <Input
          title="Password"
          onChange={e => {
            setChoosed('');
            handleChange(e, setPassword);
          }}
          value={password}
          inputBtn2={show}
          inputBtn1={hide}
          showPass={styles.showPass}
          // inputBtnView={
          //   Platform.OS === 'ios'
          //     ? styles.showPassBtnIOS
          //     : styles.showPassBtnAndroid
          // }
          inputBtn={showHidePass ? hide : show}
          secure={showHidePass}
          handleShowPass={() => setShowHidePass(!showHidePass)}
          errStyle={
            (choosed === 'password' || choosed === 'notEqual') && {
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: '#FFF',
            }
          }
          err={(choosed === 'password' || choosed === 'notEqual') && err}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotByEmail')}>
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </TouchableOpacity>
        <View style={styles.singUpView}>
          <Text style={styles.haveAccount}>Dont have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.singUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <GButton btnName="Sign in" handelMove={handleSingIn} />
      </ScrollView>
      <LoadingModal visible={modalVisible} />
      <ErrorModal
        isVisible={errModal}
        err={err}
        onClose={() => setErrModal(!errModal)}
      />
    </KeyboardAvoidingView>
  );
}
