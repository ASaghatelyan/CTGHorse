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
  Platform,
} from 'react-native';
import React, {useState} from 'react';
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
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export function HorseRegister({navigation}) {
  let dispatch = useDispatch();
  let store = useSelector(state => state.horseRegister);
  const [err, setErr] = useState('');
  const [data, setData] = useState([]);
  const [percentage, setPercentage] = useState(25);
  const [index,setIndex]=useState(0) 
  const renderPages = () => {
    switch (percentage) {
      case 25:
        return (
          <HorseRegFirst
          setIndex={setIndex}
            onNextPrev={setPercentage}
            percentage={percentage}
            navigation={navigation}
          />
        );
      case 50:
        return (
          <HorseRegSecond
          setIndex={setIndex}
            onNextPrev={setPercentage}
            percentage={percentage}
            navigation={navigation}
          />
        );
      case 75:
        return (
          <HorsRegThird
          setIndex={setIndex}
            onNextPrev={setPercentage}
            percentage={percentage}
            navigation={navigation}
          />
        );
      case 100:
        return (
          <HorseRegFourth
          setIndex={setIndex}
            onNextPrev={setPercentage}
            percentage={percentage}
            navigation={navigation}
          />
        );
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
  regHorse()
  return (
    <ImageBackground source={bg} style={styles.container}>
      <KeyboardAvoidingView behavior={Platform === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#272F34"
        />
        <SafeAreaView />
        <View style={styles.gFlex}>
          <View style={{maxHeight: (120)}}>
            <Text style={styles.title}>{horsRegText[index].title}</Text>
            <Text style={styles.text}>
            {horsRegText[index].text}
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
