import {View, StatusBar, Image, Animated} from 'react-native';
import React, {useState, useEffect} from 'react';
import Logo from 'app/assets/img/logo.png';
import {styles} from './style';
import {GlobalWidth, GlobalHeight} from '../../../constant/styleConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Splash({navigation}) {
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
    let token = await getToken();
    let getStarted = await getStartedInfo();
    let res = await axiosInstance.post(`/login`, {
      email,
      password,
    });
    token
      ? navigation.replace('TabNavigation')
      : !getStarted
      ? navigation.replace('GetStarted')
      : navigation.replace('SignIn');
  };

  const width = new Animated.Value(102);
  const height = new Animated.Value(85);

  useEffect(() => {
    Animated.timing(width, {
      toValue: GlobalWidth(145),
      duration: 1500,
      useNativeDriver: false,
    }).start();
    Animated.timing(height, {
      toValue: GlobalHeight(122),
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
        source={Logo}
        style={{
          width: width,
          height: height,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
}
