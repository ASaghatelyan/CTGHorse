import {StyleSheet, Dimensions, View, Linking, SafeAreaView} from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';
import source from 'app/assets/files/PrivacyPolicy.pdf';
import {HeaderNavi} from 'app/components';
import { styles } from './style';

export function Privacy({navigation}) {
  return (
    <View style={{ flex: 1,}} >
      <SafeAreaView />
      <HeaderNavi
        leftBtn={'Privacy and Policy'}
        leftOnPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Pdf
        showsVerticalScrollIndicator={false}
          source={source} 
          onError={error => {
            console.log(error);
          }}
          onPressLink={async uri => {
            await Linking.openURL(`${uri}`)
          }}
          style={styles.pdf}
        />
      </View>
    </View>
  );
}

 