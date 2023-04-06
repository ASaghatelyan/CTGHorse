import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './style';
import {HeaderNavi} from 'app/components';
import visaIc from 'app/assets/img/visa.png';
import paypalIc from 'app/assets/img/paypal.png';
import pic from 'app/assets/img/pic.png';
import unpic from 'app/assets/img/unpic.png';

export function PaymentMethod({navigation}) {
    const [choosed,setChoosed]=useState(2)
  let method = [
    {
      id: 1,
      type: 'paypal',
      status: 'false',
      info: 'alma.lawson@example.com',
    },
    {
      id: 2,
      type: 'visa',
      status: 'false',
      info: '3235 65645 6464 232',
    },
    {
      id: 3,
      type: 'visa',
      status: 'false',
      info: '3235 65645 6464 232',
    },
  ];
  return (
    <View style={styles.content}>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={'Payment method'}
        leftOnPress={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        {/* <View
          contentContainerStyle={styles.generalView}
          showsVerticalScrollIndicator={false}> */}
        {method.map((item, index) => {
          return (
            <TouchableOpacity key={item.id} onPress={()=>setChoosed(item.id)}>
              <View style={styles.typeView}>
                <Image
                  source={item.type === 'paypal' ? paypalIc : visaIc}
                  style={styles.typeIc}
                />
                <Image source={choosed!==item.id ? pic :unpic} style={styles.picIc}/>
              </View>
              <Text>{item.info}</Text>
            </TouchableOpacity>
          );
        })}
        {/* </View> */}
      </ScrollView>
    </View>
  );
}
