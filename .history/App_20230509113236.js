import {StyleSheet, Dimensions, Button, View, TouchableOpacity, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import {
  StripeProvider,
  useStripe,
  CardField,CardForm
} from '@stripe/stripe-react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default function App() {
  return (
    <Provider store={store}>
      <StripeProvider
        publishableKey={
          'pk_test_51J7wyFCHIUiOha1H0L88fosItXyxAv8Lk49G4lUu4akq18mJ7CnSizLFfEaCB6DdZBGwSzAbsTaUIhORbqiLBJnR00ZoEmPoif'
        }
        merchantIdentifier="merchant.com.CTGH" // required for Apple Pay
        urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      >
        {/* <MainNAvigation />
         */}
      <View style={styles.container}>
        <CardFrom
          postalCodeEnabled={false}
          autofocus
          style={styles.cardcField}
          cardStyle={{
            textColor: '#1c1c1c',
          }}
        />
        <TouchableOpacity>
          <Text>dsf</Text>
        </TouchableOpacity>
      </View>
      </StripeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  cardField: {
    height: 50,
  },
});