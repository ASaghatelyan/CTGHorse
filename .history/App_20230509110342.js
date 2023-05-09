import {SafeAreaView, Dimensions,Button, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import {StripeProvider, useStripe,CardField,  } from '@stripe/stripe-react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default function App() {
 
  return (
    <Provider store={store}>
      <StripeProvider
        publishableKey={'pk_test_51J7wyFCHIUiOha1H0L88fosItXyxAv8Lk49G4lUu4akq18mJ7CnSizLFfEaCB6DdZBGwSzAbsTaUIhORbqiLBJnR00ZoEmPoif'}
        merchantIdentifier="merchant.com.CTGH" // required for Apple Pay
        urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      >
        {/* <MainNAvigation /> 
       */}
 <View style={{}}> 
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        onCardChange={(cardDetails) => {
          console.log('cardDetails', cardDetails);
        }}
      />
    </View>

      </StripeProvider>
    </Provider>
  );
}
