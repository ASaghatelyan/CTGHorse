import {View, Text, ImageBackground, StatusBar, Platform} from 'react-native';
import React from 'react';
import {BorderBtn, GButton} from 'app/components';
import bg from 'app/assets/img/mainbg.png';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function FirstLogin({navigation}) {
  const firstLog = async () => {
    try {
      await AsyncStorage.setItem('firstLog', JSON.stringify(val));
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
      <View style={styles.mainView}>
        <Text style={styles.title}>Add horse</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Sapien commodo at mauris vitae
          nam amet ipsum.
        </Text>
        <GButton
          btnName="Add now"
          handelMove={async () => {
           await firstLog();
            navigation.navigate('HorseRegister');
          }}
        />
        <BorderBtn
          name="Skip for now"
          onNaviTo={async () => {
           await firstLog();
            navigation.replace('TabNavigation');
          }}
        />
      </View>
    </ImageBackground>
  );
}
