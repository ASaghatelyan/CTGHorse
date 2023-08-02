import {View, Text, ImageBackground, StatusBar, Platform} from 'react-native';
import React from 'react';
import {BorderBtn, GButton} from 'app/components';
import bg from 'app/assets/img/mainbg.png';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function FirstLogin({navigation}) {
  const firstLog = async value => {
    try {
      await AsyncStorage.setItem('firstLog', JSON.stringify(value));
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
        <GButton
          btnName="Add now"
          handelMove={async () => {
            await firstLog(true);
            navigation.navigate('HorseRegister');
          }}
        />
        <BorderBtn
          name="Skip for now"
          onNaviTo={async () => {
            await firstLog(true);
            navigation.replace('TabNavigation');
          }}
        />
      </View>
    </ImageBackground>
  );
}
