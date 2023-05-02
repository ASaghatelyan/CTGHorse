import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {
  BottomBtn,
  HorseRegFirst,
  HorseRegFourth,
  HorseRegSecond,
  HorsRegThird,
} from 'app/components';
import bg from 'app/assets/img/hrbg.png';
import {styles} from './style';
import {horsRegText} from 'app/constant/hourseRegText';
import * as Progress from 'react-native-progress';
import {ProgressBar} from 'app/components/progressBar';
import {HorseRegComplite} from 'app/screens/stackScreens/horseRegister/horseRegComplite';
import {useDispatch, useSelector} from 'react-redux';
import rr from 'app/assets/img/gg.png';
import ImageColors from 'react-native-image-colors';

export function HorseRegister({navigation}) {
  let dispatch = useDispatch();
  let store = useSelector(state => state.horseRegister);
  const [err, setErr] = useState('');
  const [data, setData] = useState([]);
  const [percentage, setPercentage] = useState(25);
  const [color, setColor] = useState([]);
  const renderPages = () => {
    switch (percentage) {
      case 25:
        return (
          <HorseRegFirst
            onNextPrev={setPercentage}
            percentage={percentage}
            navigation={navigation}
            color={color}
            img={rr}
          />
        );
      case 50:
        return (
          <HorseRegSecond
            onNextPrev={setPercentage}
            percentage={percentage}
            navigation={navigation}
          />
        );
      case 75:
        return (
          <HorsRegThird
            onNextPrev={setPercentage}
            percentage={percentage}
            navigation={navigation}
          />
        );
      case 100:
        return (
          <HorseRegFourth
            onNextPrev={setPercentage}
            percentage={percentage}
            navigation={navigation}
          />
        );
    }
  };
  useLayoutEffect(() => {
    getColor();
    return(()=>setColor)
  }, []);
  let getColor = async () => {
    const result = await ImageColors.getColors(rr, {
      fallback: '#228B22',
      cache: true,
      key: 'unique_key',
    });
    setColor([result.background, result.secondary]);

    switch (result.platform) {
      case 'android':
        // android result properties
        const vibrantColor = result.vibrant;
        break;
      case 'web':
        // web result properties
        const lightVibrantColor = result.lightVibrant;
        break;
      case 'ios':
        // iOS result properties
        const primaryColor = result.primary;
        break;
      default:
        throw new Error('Unexpected platform key');
    }
  };
  const regHorse = async () => {
    console.log(store, 'ddd');
    // try {
    //   if ( ) {
    //     let res = await axiosInstance.post(`/login`, {
    //       email,
    //       password,
    //     });

    //   }
    // } catch (error) {
    //   setErr(error.response.data.error);
    //   setErrModal(!errModal);
    //   setModalVisible(false);
    // }
  };
  regHorse();
  return (
    <ImageBackground source={bg} style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#272F34"
        />
        <SafeAreaView />
        <View style={styles.gFlex}>
          <View style={{maxHeight: 120}}>
            <Text style={styles.title}>Horse photo and video gallery</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur. Sapien commodo at mauris
              vitae nam amet ipsum.
            </Text>
          </View>
          <ProgressBar color="#E9A13A" procent={percentage} />
        </View>
        <ScrollView
          contentContainerStyle={styles.mainView}
          bounces={false}
          showsVerticalScrollIndicator={false}>
          <View style={{marginTop: 64}}>{renderPages()}</View>
        </ScrollView>

        {/* <BottomBtn
        nameL="Back"
        nameR="Next"
        onChangeL={goBack}
        onChangeR={next}
        styles={styles.bottomBtn}
      /> */}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
