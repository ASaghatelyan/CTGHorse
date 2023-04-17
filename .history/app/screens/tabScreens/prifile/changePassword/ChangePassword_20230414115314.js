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
import {
  GButton,
  HeaderNavi,
  Input,
  LoadingModal,
  UpdatePassModal,
} from 'app/components';
import {styles} from './style';
import back from 'app/assets/img/back.png';
import show from 'app/assets/img/on.png';
import hide from 'app/assets/img/off.png';
import axiosInstance from 'app/networking/api';

export function ChangePassword({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [oldPass, setOldPass] = useState('');
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

  let onResetPass = async () => {
    setModalVisible(true);
    try {
      if (oldPass && pass > 7 && passConfirm > 7 && passConfirm === pass) {
        let res = await axiosInstance.post(`/password/reset`, {
          old: '',
          password: pass,
          c_password: passConfirm,
        });
        console.log(res);
        navigation.replace('PassUpdated');
        setConfirmPass('');
        setPass('');
        setModalVisible(false);
      } else if (!pass) {
        setChoosed('pass');
        setErr('Password is not filled');
        setModalVisible(false);
      } else if (!passConfirm) {
        setChoosed('confirmPass');
        setErr('Confirm password is not filled');
        setModalVisible(false);
      } else if (pass !== passConfirm) {
        setChoosed('notEqual');
        setErr(`Password and Confirm password doesn't match`);
        setModalVisible(false);
      } else if (pass.length < 8 || passConfirm < 8) {
        setErr('Password must contain at least 8 characters');
        setModalVisible(false);
      }
    } catch (e) {
      console.log(e.response, 'err');
      // setErr(e.response.data.data.error);
      setModalVisible(false);
    }
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <SafeAreaView />

      <HeaderNavi
        leftBtn={'Change password'}
        leftOnPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Input
          title="Current password"
          onChange={e => {
            setChoosed('');
            handleChange(e, setOldPass);
          }}
          value={oldPass}
          inputBtn2={show}
          inputBtn1={hide}
          showPass={styles.showPass}
          inputBtnView={
            Platform.OS === 'ios'
              ? styles.showPassBtnIOS
              : styles.showPassBtnAndroid
          }
          inputBtn={showHideOldPass ? hide : show}
          secure={showHideOldPass}
          handleShowPass={() => setShowHidePass(!showHidePass)}
          errStyle={
            (choosed === 'current' || choosed === 'notEqual') && {
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: '#FFF',
            }
          }
          err={(choosed === 'current' || choosed === 'notEqual') && err}
        />
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
          <GButton
            btnName="Update password"
            handelMove={() => setModalVisible(!modalVisible)}
          />
        </View>
      </ScrollView>
      <UpdatePassModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
        navigation={navigation}
      />
    </KeyboardAvoidingView>
  );
}
