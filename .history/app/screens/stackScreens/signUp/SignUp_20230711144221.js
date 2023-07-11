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
import {GButton, Input, LoadingModal} from 'app/components';
import {styles} from './style';
import show from 'app/assets/img/on.png';
import hide from 'app/assets/img/off.png';
import axiosInstance from 'app/networking/api';

export function SignUp({navigation}) {
  const [load, setLoad] = useState(false);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [userName, setUserName] = useState('');
  const [surname, setSurname] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  const [showHidePass, setShowHidePass] = useState(true);
  const [showHidePassConfirm, setShowHidePassConfirm] = useState(true);
  const [choosed, setChoosed] = useState('');
  const [err, setErr] = useState('');
let [ 'email',
  'password',
  'name',
  'surname',
  'c_password',
  'address',
  'city',
  // state,
  zip:zipCode]
  let handleChange = (e, name) => {
    name(e);
    setErr('');
  };

  let validateEmail = email => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  let handleSingUp = async () => {
    try {
      setLoad(true);
      if (
        userName &&
        validateEmail(email) &&
        pass.length > 7 &&
        passConfirm.length > 7 &&
        pass === passConfirm
      ) {
        let register = {
          email,
          password: pass,
          name: userName,
          surname,
          c_password: passConfirm,
          address,
          city,
          // state,
          zip:zipCode
        };
        console.log(register,'register');
        let response = await axiosInstance.post('/register', register);
        navigation.navigate('SignIn');
        setEmail('');
        setChoosed('');
        setUserName('');
        setErr('');
        setPass('');
        setPassConfirm('');
        setLoad(false);
      }
      if (!userName) {
        setChoosed('userName');
        setErr('Username is not filled');
        setLoad(false);
      } else if (!surname) {
        setChoosed('surname');
        setErr('Surname is not filled');
        setLoad(false);
      } else if (!email) {
        setChoosed('email');
        setErr('Email is not filled');
        setLoad(false);
      } else if (!validateEmail(email)) {
        setChoosed('email');
        setErr('Email is not valid');
        setLoad(false);
      } 
      else if (!address) {
        setChoosed('Address');
        setErr('State is not filled');
        setLoad(false);
      } 
      else if (!city) {
        setChoosed('City');
        setErr('City is not filled');
        setLoad(false);
      } 
      else if (!state) {
        setChoosed('state');
        setErr('Street address is not filled');
        setLoad(false);
      } 
      else if (!zipCode) {
        setChoosed('zipCode');
        setErr('Zip is not filled');
        setLoad(false);
      } 
      else if (!pass) {
        setChoosed('pass');
        setErr('Password is not filled');
        setLoad(false);
      } else if (!passConfirm) {
        setChoosed('confirmPass');
        setErr('Confirm password is not filled');
        setLoad(false);
      } else if (pass.length < 8) {
        setChoosed('pass');
        setErr('Password must contain at least 8 characters');
        setLoad(false);
      } else if (pass !== passConfirm) {
        setChoosed('notEqual');
        setErr(`Password and Confirm password doesn't match`);
        setLoad(false);
      } else {
        setErr('Incorrect email address');
        setLoad(false);
      }
    } catch (e) {
      setLoad(false);
      console.log(e.response.data.error);
      if (Object.keys(e.response.data.error)[0] === 'email') {
        setChoosed(Object.keys(e.response.data.error)[0]);
        setErr(e.response.data.error.email);
      }
    }
  };
 

  return (
    <KeyboardAvoidingView
      behavior={Platform === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, paddingHorizontal: 15}}>
      <SafeAreaView />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 30}}>
        <View>
          <Text style={styles.title}>Sign up</Text>
          <Text style={styles.subTitleText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.{' '}
          </Text>
        </View>
        <Input
          title="Name"
          onChange={e => {
            setChoosed('');
            handleChange(e, setUserName);
          }}
          value={userName}
          errStyle={
            choosed === 'userName' && {
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: '#FFF',
            }
          }
          err={choosed === 'userName' && err}
          inputBtnView={
            choosed === 'userName'
              ? Platform.OS === 'ios'
                ? styles.showPassBtnIOS
                : styles.showPassBtnAndroid
              : null
          }
        />
        <Input
          title="Surname"
          onChange={e => {
            setChoosed('');
            handleChange(e, setSurname);
          }}
          value={surname}
          errStyle={
            choosed === 'surname' && {
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: '#FFF',
            }
          }
          err={choosed === 'surname' && err}
          inputBtnView={
            choosed === 'surname'
              ? Platform.OS === 'ios'
                ? styles.showPassBtnIOS
                : styles.showPassBtnAndroid
              : null
          }
        />
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
          title="Street Address"
          onChange={e => {
            setChoosed('');
            handleChange(e, setAddress);
          }}
          value={address}
          errStyle={
            choosed === 'Address' && {
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: '#FFF',
            }
          }
          err={choosed === 'Address' && err}
          inputBtnView={
            choosed === 'Address'
              ? Platform.OS === 'ios'
                ? styles.showPassBtnIOS
                : styles.showPassBtnAndroid
              : null
          }
        />
        <Input
          title="City"
          onChange={e => {
            setChoosed('');
            handleChange(e, setCity);
          }}
          value={city}
          errStyle={
            choosed === 'City' && {
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: '#FFF',
            }
          }
          err={choosed === 'City' && err}
          inputBtnView={
            choosed === 'City'
              ? Platform.OS === 'ios'
                ? styles.showPassBtnIOS
                : styles.showPassBtnAndroid
              : null
          }
        />
        <Input
          title="State"
          onChange={e => {
            setChoosed('');
            handleChange(e, setState);
          }}
          value={state}
          errStyle={
            choosed === 'state' && {
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: '#FFF',
            }
          }
          err={choosed === 'state' && err}
          inputBtnView={
            choosed === 'state'
              ? Platform.OS === 'ios'
                ? styles.showPassBtnIOS
                : styles.showPassBtnAndroid
              : null
          }
        />
        <Input
          title="ZIP Code"
          onChange={e => {
            setChoosed('');
            handleChange(e, setZipCode);
          }}
          value={zipCode}
          errStyle={
            choosed === 'zipCode' && {
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: '#FFF',
            }
          }
          err={choosed === 'zipCode' && err}
          inputBtnView={
            choosed === 'zipCode'
              ? Platform.OS === 'ios'
                ? styles.showPassBtnIOS
                : styles.showPassBtnAndroid
              : null
          }
        />
        <Input
          title="Password"
          topStyle={{marginBottom: 8}}
          onChange={e => {
            setChoosed('');
            handleChange(e, setPass);
          }}
          value={pass}
          inputBtn2={show}
          inputBtn1={hide}
          showPass={styles.showPass}
          inputBtnView={
            Platform.OS === 'ios'
              ? styles.showPassBtnIOS
              : styles.showPassBtnAndroid
          }
          inputBtn={showHidePass ? hide : show}
          secure={showHidePass}
          handleShowPass={() => setShowHidePass(!showHidePass)}
          errStyle={
            (choosed === 'pass' || choosed === 'notEqual') && {
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: '#FFF',
            }
          }
          err={(choosed === 'pass' || choosed === 'notEqual') && err}
        />
        <Input
          title="Confirm password"
          topStyle={{marginBottom: 0}}
          onChange={e => {
            setChoosed('');
            handleChange(e, setPassConfirm);
          }}
          value={passConfirm}
          inputBtn2={show}
          inputBtn1={hide}
          showPass={styles.showPass}
          inputBtnView={
            Platform.OS === 'ios'
              ? styles.showPassBtnIOS
              : styles.showPassBtnAndroid
          }
          inputBtn={showHidePassConfirm ? hide : show}
          secure={showHidePassConfirm}
          handleShowPass={() => setShowHidePassConfirm(!showHidePassConfirm)}
          errStyle={
            (choosed === 'confirmPass' || choosed === 'notEqual') && {
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: '#FFF',
            }
          }
          err={(choosed === 'confirmPass' || choosed === 'notEqual') && err}
        />
        <View style={styles.joinView}>
          <Text style={styles.joinText}>
            By clicking sign up, you agree to our{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
            <Text style={styles.join}>Privacy Policy </Text>
          </TouchableOpacity>
          <Text style={styles.account}>and </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
            <Text style={styles.join}>Terms & Conditions</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnView}>
          <GButton btnName="Sign up" handelMove={handleSingUp} />
        </View>
        <View style={styles.singUpView}>
          <Text style={styles.haveAccount}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
            <Text style={styles.singUpText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <LoadingModal visible={load} />
    </KeyboardAvoidingView>
  );
}
