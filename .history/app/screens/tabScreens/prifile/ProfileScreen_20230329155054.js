import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import filter from 'app/assets/img/filter.png';
import goToTop from 'app/assets/img/expand.png';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorseItemComponent, SearchBtn} from 'app/components';
import data from '../home/src/data';
import {SearchModal} from 'app/components/modals';

export function ProfileScreen(props) {
  return (
    <View>
      <SafeAreaView />
      <Text>Profile</Text>
    </View>
  );
}
