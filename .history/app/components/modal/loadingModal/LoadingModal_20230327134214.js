import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export   function LoadingModal() {
  return (
    <View>
      <Text>LoadingModal</Text>
    </View>
  )
}