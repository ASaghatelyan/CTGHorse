import {View, Text} from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';
import pdd from 'app/assets/files/PrivacyPolicy.pdf';

export function Privacy() {
  return (
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
  );
}
