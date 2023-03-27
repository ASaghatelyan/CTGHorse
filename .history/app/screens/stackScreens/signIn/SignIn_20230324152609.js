import {
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {GButton, Input} from 'app/components';
import {styles} from './style';
import show from 'app/assets/img/on.png';
import hide from 'app/assets/img/off.png';

export function SignIn({navigation}) {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [showHidePass, setShowHidePass] = useState(true);
  const [choosed, setChoosed] = useState('');
  const [err, setErr] = useState('');

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
    // setLoad(true);
    if (validateEmail(userName) && pass.length > 7) {
      // await chekBoxData();
      // let res = await axiosInstance.post(`auth/login`, {
      //   email: userName,
      //   password: pass, 
      // });
      // storeData(res.data.token);
      // storeUserName(res.data.username);
      // let ress = await axiosInstance.get(`users/${res.data.username}`);
      // dispatch({
      //   type: 'SET_CUSTOMER',
      //   payload: ress.data,
      // });
      // setUserName('');
      // setPass('');
      // setLoad(false);
    }
    if (!validateEmail(userName)) {
      setChoosed('Username');
      setErr('Please write correct email address');
      // setLoad(false);
    } else if (pass.length < 7) {
      setChoosed('pass');
      setErr('Password must contain at least 8 characters');
      // setLoad(false);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
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
            handleChange(e, setUserName);
          }}
          value={userName}
          errStyle={
            choosed === 'Username' && {
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: '#FFF',
            }
          }
          err={choosed === 'Username' && err}
          inputBtnView={
            choosed === 'username'
              ? Platform.OS === 'ios'
                ? styles.showPassBtnIOS
                : styles.showPassBtnAndroid
              : null
          }
          inputBtn={choosed === 'username' && show}
        />
        <Input
          title="Password" 
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
        <TouchableOpacity onPress={()=>navigation.navigate('ForgotByEmail')}>
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </TouchableOpacity>
        <View style={styles.singUpView}>
          <Text style={styles.haveAccount}>Dont have an account?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
            <Text style={styles.singUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <GButton btnName="Sign in" handelMove={handleSingIn}/>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
