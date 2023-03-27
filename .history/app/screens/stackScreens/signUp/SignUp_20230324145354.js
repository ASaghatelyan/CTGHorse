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
import axiosInstance from 'app/networking/api';

export function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  const [showHidePass, setShowHidePass] = useState(true);
  const [showHidePassConfirm, setShowHidePassConfirm] = useState(true);
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

  let handleSingUp = async () => {
    try {
      console.log('ddd');
        if (userName && validateEmail(email) && pass.length > 7 && passConfirm.length > 7 && pass === passConfirm) {
            let register = {
                email,
                'password': pass,
                'name':userName,
                'c_password': passConfirm
            }
            let response = await axiosInstance.post("/register", register);
            // props.navigation.navigate('Login')
            console.log(response);
        }
        if (!userName) {
            setErr("Name is not filled")
        }
        else if (!email) {
            setErr("Email is not filled")
        }
        else if (!validateEmail(email)) {
            setErr("Email is not valid")
        }
        else if (!pass) {
            setErr("Password is not filled")
        }
        else if (!passConfirm) {
            setErr("Repeat password is not filled")
        }
        else if (pass !== passConfirm) {
            setErr(`Password and Repeat password doesn't match`)
        }
        else if (pass.length < 8 || passConfirm < 8) {
            setErr('Password must contain at least 8 characters')
        } 
        else {
            setErr("Incorrect email address");

        }
    } catch (e) {
        console.log(e, 'err'); 
    }

}

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{flex: 1, paddingHorizontal: 15}}>
      <SafeAreaView />
      <ScrollView>
        <View>
          <Text style={styles.title}>Sign up</Text>
          <Text style={styles.subTitleText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.{' '}
          </Text>
        </View>
        <Input
          title="Username"
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
          inputBtn={choosed === 'userName' && show}
        />
        <Input
          title="Email"
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
          err={choosed === 'Email' && err}
          inputBtnView={
            choosed === 'Email'
              ? Platform.OS === 'ios'
                ? styles.showPassBtnIOS
                : styles.showPassBtnAndroid
              : null
          }
          inputBtn={choosed === 'Email' && show}
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
          topStyle={{marginBottom: 8}}
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
            (choosed === 'Confirm password' || choosed === 'notEqual') && {
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: '#FFF',
            }
          }
          err={
            (choosed === 'Confirm password' || choosed === 'notEqual') && err
          }
        />
        <View style={styles.btnView}>
          <GButton btnName="Sign up" handelMove={handleSingUp} />
        </View>
        <View style={styles.singUpView}>
          <Text style={styles.haveAccount}>Already have an account?</Text>
          <TouchableOpacity onPress={()=>navigation.replace('SignIn')}>
            <Text style={styles.singUpText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
