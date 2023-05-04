import {SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './app/redux';
import MainNAvigation from './app/navigation/MainNAvigation';
import {StripeProvider,} from '@stripe/stripe-react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default function App() {
  return (
    <Provider store={store}>
      <StripeProvider
        // publishableKey={publishableKey}
        merchantIdentifier="merchant.identifier" // required for Apple Pay
        urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      >
        <MainNAvigation />
      </StripeProvider>
    </Provider>
  );
}
