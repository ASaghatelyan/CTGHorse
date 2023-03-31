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
  import {GButton, Input, LoadingModal} from 'app/components';
  import {styles} from './style';
  import back from 'app/assets/img/back.png';
  import show from 'app/assets/img/on.png';
  import hide from 'app/assets/img/off.png';
  import axiosInstance from 'app/networking/api';

export  function changePassword() {
    const [modalVisible, setModalVisible] = useState(false);
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
        if (pass > 7 && passConfirm > 7 && passConfirm === pass) {
          let res = await axiosInstance.post(`/password/reset`, {
            code: route.params,
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
    <View>
      <Text>changePassword</Text>
    </View>
  )
}