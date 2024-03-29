import {
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {GButton, Input, LoadingModal} from 'app/components';
import {styles} from './style';
import back from 'app/assets/img/back.png';
import codeIc from 'app/assets/img/veryficode.png';
import error from 'app/assets/img/error.png';
import CodeInput from 'react-native-confirmation-code-input';
import axiosInstance from 'app/networking/api';

export function ConfirmCode({navigation, route}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [code, setCode] = useState('');
  const [veryfiCode, setVeryfiCode] = useState(route.params.code);
  const [choosed, setChoosed] = useState(true);
  const [err, setErr] = useState('');
  const codeInputRef2 = useRef();
console.log(veryfiCode);
  const callme = () => {
    var a = route.params.email.split('@');
    var b = a[0];
    var newstr = '';
    for (var i in b) {
      if (i > 0 && i < b.length - 1) newstr += '*';
      else newstr += b[i];
    }
    return newstr + '@' + a[1];
  };

  let handleSingIn = async () => {
    setModalVisible(true);
    try {
      if (code) {
        let res = await axiosInstance.post(`/password/code/check`, {
          code: String(code),
        });
        setModalVisible(false);
        navigation.replace('ResetPass', code);
      } else if (!code) {
        setErr('Please write correct code');
        setModalVisible(false);
      }
    } catch (error) {
      console.log(error.response.data.error.code);
      setErr(error.response.data.error.code);
      setModalVisible(false);
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
        <Text style={styles.title}>Verify your email</Text>
      </View>
      <ScrollView>
        <View style={styles.gFlex}>
          <Image source={codeIc} style={styles.codeIc} />
          <Text style={styles.codeSubTitleText}>
            Please enter the 4 digit code sent to {callme()}
          </Text>
        </View>
        {/* <Input
          title="Enter code "
          onChange={e => {
            setChoosed('');
            handleChange(e, setCode);
          }}
          value={code}
          errStyle={
            choosed === 'code' && {
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: '#FFF',
            }
          }
          err={choosed === 'code' && err}
        /> */}
        <View style={{marginBottom: 32}}>
          <CodeInput
            ref={codeInputRef2}
            // secureTextEntry
            compareWithCode={`${veryfiCode}`}
            activeColor="#190C04"
            inactiveColor="rgba(219, 192, 147, 0.3)"
            autoFocus={false}
            ignoreCase={true}
            inputPosition="center"
            codeLength={4}
            keyboardType="numeric"
            size={50}
            onFulfill={isValid => {
              setChoosed(isValid);
              isValid ? setCode(veryfiCode) : setCode('');
            }}
            containerStyle={{marginTop: 30}}
            codeInputStyle={{borderWidth: 1.5}}
            style={[
              styles.codeInput,
              !choosed && {borderWidth: 1, borderColor: '#FF453A'},
            ]}
          />
        </View>
        <View>
          {choosed ? (
            <View style={styles.singUpView}>
              <Text style={styles.haveAccount}>Didn't receive the code?</Text>
              <TouchableOpacity
                style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.singUpText}>Resend Code</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.errView}>
              <Image source={error} style={styles.errIc} />
              <Text style={styles.errText}>
                Code is not correct{' '}
                <Text style={styles.singUpText}> Resend Code</Text>
              </Text>
            </View>
          )}
          <GButton btnName="Verify" handelMove={handleSingIn} />
        </View>
      </ScrollView>
      <LoadingModal visible={modalVisible} />
    </KeyboardAvoidingView>
  );
}
