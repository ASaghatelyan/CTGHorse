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
  ErrorModal,
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
  const [loading, setLoading] = useState(false);
  const [oldPass, setOldPass] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  const [showHideOldPass, setShowHideOldPass] = useState(true);
  const [showHidePass, setShowHidePass] = useState(true);
  const [showHidePassConfirm, setShowHidePassConfirm] = useState(true);
  const [choosed, setChoosed] = useState('');
  const [err, setErr] = useState('');
  const [errModal, setErrModal] = useState(false);
  let handleChange = (e, name) => {
    name(e);
    setErr('');
  };

  console.log(oldPass, pass, passConfirm);
  let onResetPass = async () => {
    setLoading(true);
    try {
      if (oldPass && pass > 7 && passConfirm > 7 && passConfirm === pass) {
        let res = await axiosInstance.post(`/password-change`, {
          old_password: oldPass,
          new_password : pass,
          c_password: passConfirm,
        });
        console.log(res,'resres');
        setPassConfirm('');
        setPass('');
        setLoading(false);
        setModalVisible(true);
      } else if (!oldPass) {
        setChoosed('oldPass');
        setErr('Currnt password is not filled');
        setLoading(false);
      } else if (!pass) { 
        setChoosed('pass');
        setErr('Password is not filled');
        setLoading(false);
      } else if (!passConfirm) {
        setChoosed('confirmPass');
        setErr('Confirm password is not filled');
        setLoading(false);
      } else if (pass !== passConfirm) {
        setChoosed('notEqual');
        setErr(`Password and Confirm password doesn't match`);
        setLoading(false);
      } else if (pass.length < 8 || passConfirm < 8) {
        setErr('Password must contain at least 8 characters');
        setLoading(false);
      }
    } catch (e) {
      console.log(e.response.data.data, 'err');
      console.log(e, 'err');
      setErr(e.response.data.data.error);
      setLoading(false);
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
          handleShowPass={() => setShowHideOldPass(!showHideOldPass)}
          errStyle={
            choosed === 'oldPass' && {
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: '#FFF',
            }
          }
          err={choosed === 'oldPass' && err}
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
            (choosed === 'confirmPass' || choosed === 'notEqual') && {
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: '#FFF',
            }
          }
          err={(choosed === 'confirmPass' || choosed === 'notEqual') && err}
        />
        <View style={styles.btnView}>
          <GButton btnName="Update password" handelMove={onResetPass} />
        </View>
      </ScrollView>
      <UpdatePassModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
        navigation={navigation}
      />
      <LoadingModal visible={loading} />
      <ErrorModal
        isVisible={errModal}
        err={err}
        onClose={() => setErrModal(!errModal)}
      />
    </KeyboardAvoidingView>
  );
}
