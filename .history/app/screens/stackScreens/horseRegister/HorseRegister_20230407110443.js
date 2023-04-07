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
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export function HorseRegister(props) {
  let [data, setData] = useState([]);
  const [percentage, setPercentage] = useState(25);
  const renderPages = () => {
    switch (percentage) {
      case 25:
        return <HorseRegFirst percentage={percentage} setPercentage={setPercentage} setData={setData} data={data}/>;
      case 50:
        return <HorseRegSecond />;
      case 75:
        return <HorsRegThird />;
      case 100:
        return <HorseRegFourth />;
    }
  };

 
let next =() => {
  percentage !== 25
    ? setPercentage(prev => prev - 25)
    : props.navigation.goBack();
}

let goBack=() =>
percentage !== 100
  ? (setPercentage(prev => prev + 25), 
  : (setData([generalImg, image, videoData]),
    props.navigation.replace('HorseRegComplite'))
  
  return (
    <ImageBackground source={bg} style={styles.container}>
       <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#272F34"
      /> 
      <SafeAreaView />
      <KeyboardAvoidingView behavior="padding" style={{flexGrow:1}}>
        <ScrollView
          style={styles.mainView}
          showsVerticalScrollIndicator={false}>
          <View style={{maxHeight: 120}}>
            <Text style={styles.title}>Horse photo and video gallery</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur. Sapien commodo at mauris
              vitae nam amet ipsum.
            </Text>
          </View>
          <ProgressBar color="#E9A13A" procent={percentage} />
          <View style={{marginTop: 64,height:'110%' }}>{renderPages()}</View>
        </ScrollView>
      </KeyboardAvoidingView> 
      <BottomBtn
        nameL="Back"
        nameR="Next"
        onChangeL={goBack}
        onChangeR={next
        }
      />
    </ImageBackground>
  );
}
