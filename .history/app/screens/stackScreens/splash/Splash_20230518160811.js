import {View, StatusBar, Image, Animated} from 'react-native';
import React, {useState, useEffect} from 'react';
import Logo from 'app/assets/img/logo.png';
import NewLogo from 'app/assets/img/newlogo.png';
import {styles} from './style';
import {GlobalWidth, GlobalHeight} from '../../../constant/styleConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from 'app/networking/api';
import {useDispatch} from 'react-redux';

export function Splash({navigation}) {
  let dispatch = useDispatch();
  const [load, setLoad] = useState(false);

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
      console.log(token);
      if (token) {
        let res = await axiosInstance.get(`/get-user-details`, {});
        console.log(res,'res');
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
      console.log(err.response, 'errr');
      if (err.response.status === 401) {
        navigation.replace('SignIn');
      }
      if (err.response.status === 500) {
        navigation.replace('SignIn');
      }
    }
  };

  const width = new Animated.Value(102);
  const height = new Animated.Value(85);

  useEffect(() => {
    Animated.timing(width, {
      toValue: GlobalWidth(205),
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
