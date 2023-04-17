import {StyleSheet, Dimensions, View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';
import source from 'app/assets/files/PrivacyPolicy.pdf';
import {HeaderNavi} from 'app/components';

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
        
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={styles.pdf}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center', 
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
