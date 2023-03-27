import {View, Text, ImageBackground, Image, StatusBar} from 'react-native';
import React from 'react';

import {GButton} from 'app/components';
import bg from 'app/assets/img/bg.png';
import gtImg from 'app/assets/img/gtImg.png';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Progress from 'react-native-progress';

export function GetStarted({navigation}) {
  const getStarted = async value => {
    try {
      await AsyncStorage.setItem('getStarted', JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ImageBackground source={bg} style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#272F34"
      />
      <View>
        <Progress.Bar
          progress={0.1}
          width={200}
          indeterminate={true}
          color="#E9A13A"
          animationConfig={{bounciness: 0}}
          animationType={'timing'}
          // borderWidth={0}
          height={2}
        />
        <Image source={gtImg} style={styles.image} />
      </View>
      <View style={{paddingBottom: 114}}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Arcu sollicitudin a non augue
          pharetra vitae enim amet feugiat. Non aliquam sed amet elit facilisis
          egestas viverra. Nulla venenatis velit sed at nullam condimentum
          sapien felis.
        </Text>
        <GButton
          btnName="Next"
          handelMove={() => {
            getStarted(true);
            navigation.replace('SignIn');
          }}
        />
      </View>
    </ImageBackground>
  );
}
