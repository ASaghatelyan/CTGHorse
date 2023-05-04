import {SafeAreaView, Dimensions,Button} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import {StripeProvider,} from '@stripe/stripe-react-native';
// PaymentScreen.ts
import { initStripe } from '@stripe/stripe-react-native'; 
import { ActivityIndicator, ScrollView, StyleSheet, Text } from 'react-native';
import { colors } from './colors';
import { fetchPublishableKey } from './helpers';
import { Config } from '@/Config'
 

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default function App() {
  const [loading, setLoading] = useState(true);
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
