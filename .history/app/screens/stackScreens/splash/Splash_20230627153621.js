import {View, StatusBar, Image, Animated} from 'react-native';
import React, {useState, useEffect} from 'react';
import Logo from 'app/assets/img/logo.png';
import NewLogo from 'app/assets/img/newlogo.png';
import {styles} from './style';
import {GlobalWidth, GlobalHeight} from '../../../constant/styleConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from 'app/networking/api';
import {useDispatch} from 'react-redux';
import messaging from '@react-native-firebase/messaging';

const getFcmToken = async () => {
  try {
    const fcmToken = await messaging().getToken();
    if (!!fcmToken) {
      await AsyncStorage.setItem('fcmToken', fcmToken);
    }
    return fcmToken;
  } catch (error) {
    console.log(error?.message);
  }
};

export function Splash({navigation}) {
  let dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const width = new Animated.Value(102);
  const height = new Animated.Value(85);

  let getStartedInfo = async () => {
    let data = await AsyncStorage.getItem('getStarted');
    return JSON.parse(data);
  };

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        return value;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const navi = async () => {
    try {
      let token = await getToken();
      let getStarted = await getStartedInfo();
      if (token) {
        let res = await axiosInstance.get(`/get-user-details`, {});
        dispatch({
          type: 'SET_USERINFO',
          payload: res.data.userData[0],
        });
      }
      token
        ? navigation.replace('TabNavigation')
        : !getStarted
        ? navigation.replace('GetStarted')
        : navigation.replace('SignIn');
    } catch (err) {
      console.log(err, 'errr');
      if (err.response.status === 401) {
        navigation.replace('SignIn');
      }
      if (err.response.status === 500) {
        navigation.replace('SignIn');
      }
    }
  };

  let firebaseTokenRegister = async () => {
    try {
      let checkToken = await getFcmToken();
      let id = await getUniqueId();
      let data = {
        active: true,
        registration_id: checkToken,
        type: Platform.OS === 'ios' ? 'ios' : 'android',
        device_id: id,
      };
      console.log(data, 'daaataa');
      // let response = await axiosInstance.post('v1/users/fcm-devices/', data);

      // props.navigation.replace('TabNavigation');
    } catch (e) {
      console.log(e, 'erroorrr');
    }
  };

  useEffect(() => {
    Animated.timing(width, {
      toValue: GlobalWidth(265),
      duration: 1500,
      useNativeDriver: false,
    }).start();
    Animated.timing(height, {
      toValue: GlobalHeight(282),
      duration: 1500,
      useNativeDriver: false,
    }).start();
    firebaseTokenRegister();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        showHideTransition={true}
        backgroundColor="transparent"
        translucent
      />
      {/* <Image source={Logo} style={styles.logo} /> */}
      <Animated.Image
        source={NewLogo}
        style={{
          width: width,
          height: height,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
}
