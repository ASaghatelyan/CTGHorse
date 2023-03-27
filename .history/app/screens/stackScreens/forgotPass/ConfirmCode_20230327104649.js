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
import {GButton, Input} from 'app/components';
import {styles} from './style';
import back from 'app/assets/img/back.png';
import codeIc from 'app/assets/img/veryficode.png';
import error from 'app/assets/img/error.png';
import CodeInput from 'react-native-confirmation-code-input';

export function ConfirmCode({navigation,route}) {
  const [code, setCode] = useState(route.params.code);
  const [choosed, setChoosed] = useState(true);
  const [err, setErr] = useState('');
  const codeInputRef2 = useRef();
console.log(code,'code');
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

  let handleChange = (e, name) => {
    name(e);
    setErr('');
  };
 
  let handleSingIn = async () => {
    // setLoad(true);  
    try {
      if (validateEmail(email)  ) {
        let res = await axiosInstance.post(`/password/email`, {
          email, 
        });  
        setEmail(''); 
        // setLoad(false);
        navigation.replace('ConfirmCode',email,res.data.code);
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
            compareWithCode={code}
            activeColor="#190C04"
            inactiveColor="rgba(219, 192, 147, 0.3)"
            autoFocus={false}
            ignoreCase={true}
            inputPosition="center"
            codeLength={4}
            keyboardType="numeric"
            size={50}
            onSubmitEditing={w => console.log(w)}
            onChangeText={s => console.log(s)}
            onFulfill={isValid => {
              setChoosed(isValid);
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
              <TouchableOpacity></TouchableOpacity>
            </View>
          )}
          <GButton
            btnName="Send code"
            handelMove={() => navigation.replace('ResetPass')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
