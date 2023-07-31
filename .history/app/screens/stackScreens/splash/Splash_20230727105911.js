import {View, StatusBar, Image, Animated} from 'react-native';
import React, {useState, useEffect} from 'react';
import Logo from 'app/assets/img/logo.png';
import NewLogo from 'app/assets/img/newlogo.png';
import {styles} from './style';
import {GlobalWidth, GlobalHeight} from '../../../constant/styleConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from 'app/networking/api';
import {useDispatch} from 'react-redux';
import {getUniqueId} from 'react-native-device-info';
import messaging from '@react-native-firebase/messaging';
import moment from 'moment';

export function Splash({navigation}) {
  let dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const width = new Animated.Value(102);
  const height = new Animated.Value(85);
  const getTokenFcm = async () => {
    try {
      const fcmtoken = await AsyncStorage.getItem('fcmtoken');
      if (!fcmtoken) {
        const fcmtoken = await messaging().getToken();
        try {
          if (fcmtoken) {
            console.log('token new generate', fcmtoken);
            await AsyncStorage.setItem('fcmtoken', fcmtoken);
          }
        } catch (error) {
          console.log(error, 'errrrorrr');
        }
      } else return fcmtoken;
    } catch (e) {
      console.log(e);
    }
  };

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
      let checkToken = await getTokenFcm();
      console.log(checkToken);
      let id = await getUniqueId();
      let data = {
        firebase_active: true,
        firebase_registration_id: checkToken,
        firebase_platform: Platform.OS === 'ios' ? 'ios' : 'android',
        firebase_device_id: id,
      };

      if (token) {
        let res = await axiosInstance.get(`/get-user-details`, {});
        let ddd = await axiosInstance.post('/device-token', data);
         
        dispatch({
          type: 'SET_USERINFO',
          payload: res.data.userData[0],
        });
      
        token && !res.data.userData[0].subscribtion_expiration_date
          ? navigation.replace('Subscribe')
          : token &&
            res.data.userData[0].subscribtion_expiration_date &&
            moment(new Date()).isBefore(
              res.data.userData[0].subscribtion_expiration_date,
            )
          ? navigation.replace('TabNavigation')
          // : !getStarted
          // ? navigation.replace('GetStarted')
          : navigation.replace('SignIn');
      }
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
    }).start(navi);
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
