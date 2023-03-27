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
import show from 'app/assets/img/on.png';
import hide from 'app/assets/img/off.png';
import axiosInstance from 'app/networking/api';

export function ResetPass({navigation, route}) {
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  const [showHidePass, setShowHidePass] = useState(true);
  const [showHidePassConfirm, setShowHidePassConfirm] = useState(true);
  const [choosed, setChoosed] = useState('');
  const [err, setErr] = useState('');
  console.log(route.params);
  let handleChange = (e, name) => {
    name(e);
    setErr('');
  };

  let onResetPass = async () => {
    try {
      // setLoad(true);
      if (pass > 7 && passConfirm > 7 && passConfirm === pass) {
        let res = await axiosInstance.post(`/password/reset`, {
          code: route.params,
          password: pass,
          c_password: passConfirm,
        });
        props.navigation.replace('PassUpdated');
        setConfirmPass('');
        setPass('');
        console.log(res, 'dddd');
        // setLoad(false);
      } else if (!pass) {
        setChoosed('pass');
        setErr('Password is not filled');
      } else if (!passConfirm) {
        setChoosed('confirmPass');
        setErr('Confirm password is not filled');
      } else if (pass !== passConfirm) {
        setChoosed('notEqual');
        setErr(`Password and Confirm password doesn't match`);
      } else if (pass.length < 8 || passConfirm < 8) {
        setErr('Password must contain at least 8 characters');
      }
    } catch (e) {
      console.log(e.response, 'err');
      // setErr(e.response.data.data.error);
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
        <Text style={styles.title}>Create new password</Text>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.subTitleText}>
            Your new Passwor Must be Different from Previouly used password
          </Text>
        </View>
        <Input
          title="New Password"
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
          title="Confirm New Password"
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
          <GButton btnName="Save" handelMove={onResetPass} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
