import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import done from 'app/assets/img/congr.png';
import {BorderBtn, GButton} from 'app/components';
import {BottomButton} from 'app/components/bottomButton';

export function HorseRegComplite({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.updViwe}>
      <Text style={styles.updText}>Congratulations!</Text>
      <Image source={done} style={styles.done} />
      <Text style={styles.doneText}>
        You have fully added information about your horse
      </Text>
      <GButton
        btnName="Add new"
        handelMove={() => navigation.replace('HorseRegister')}
      /> 
      <BorderBtn name="Go to home page" onNaviTo={() => navigation.goBack()} />
    </ScrollView>
  );
}
