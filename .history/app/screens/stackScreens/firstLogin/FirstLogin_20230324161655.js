import {View, Text, ImageBackground, StatusBar, Platform} from 'react-native';
import React from 'react';
import {BorderBtn, GButton} from 'app/components';
import bg from 'app/assets/img/mainbg.png';
import {styles} from './style';
 
export function FirstLogin({navigation}) {

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('token', value);
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
          handelMove={() => navigation.navigate('HorseRegister')}
        />
        <BorderBtn name="Skip for now" onNaviTo={() => navigation.replace('TabNavigation')} />
      </View>
    </ImageBackground>
  );
}
