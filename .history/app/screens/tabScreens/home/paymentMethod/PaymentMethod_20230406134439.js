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
 
import {HeaderNavi, HorseItemComponent} from 'app/components';
 

export function PaymentMethod({navigation}) {
  let method = [
    {
      id: 1,
      type: 'paypal',
      status: 'false',
      email: 'alma.lawson@example.com',
    },
    {
      id: 1,
      type: 'visa',
      status: 'false',
      number: '3235 65645 6464 232',
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
        <ScrollView
          contentContainerStyle={styles.generalView}
          showsVerticalScrollIndicator={false}>
          {method.map((item, index) => {
            return (
              <TouchableOpacity key={item.id}>
                <View>
                  <Image />
                  <Image />
                </View>
                <Text></Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
