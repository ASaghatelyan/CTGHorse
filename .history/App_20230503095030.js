import {SafeAreaView, Dimensions,Button, } from 'react-native';
import React, { useEffect, useState } from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import {StripeProvider,} from '@stripe/stripe-react-native';
// PaymentScreen.ts
import { initStripe } from '@stripe/stripe-react-native'; 
import { ActivityIndicator, ScrollView, StyleSheet, Text } from 'react-native';
import { colors } from './colors';
import { fetchPublishableKey } from './helpers'; 
 

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function initialize() {
      await initStripe({
        publishableKey: 'pk_test_51J7wyFCHIUiOha1H0L88fosItXyxAv8Lk49G4lUu4akq18mJ7CnSizLFfEaCB6DdZBGwSzAbsTaUIhORbqiLBJnR00ZoEmPoif',
        // merchantIdentifier: Config.APPLE_MERCHANT_ID,
        // urlScheme: Config.URL_SCHEME_APPLE,
        // stripeAccountId: 'acct_1Kiy5OItQpCwj5R4',
        // setReturnUrlSchemeOnAndroid: true,
      })
      setLoading(false)
      // onInit?.()
    }
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Provider store={store}>
      <StripeProvider
        publishableKey={'pk_test_51J7wyFCHIUiOha1H0L88fosItXyxAv8Lk49G4lUu4akq18mJ7CnSizLFfEaCB6DdZBGwSzAbsTaUIhORbqiLBJnR00ZoEmPoif'}
        merchantIdentifier="merchant.com.CTGHorse" // required for Apple Pay
        urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      >
        {/* <MainNAvigation /> */}

      </StripeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
});