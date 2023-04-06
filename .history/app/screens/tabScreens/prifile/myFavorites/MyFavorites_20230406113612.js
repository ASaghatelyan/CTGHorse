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
  import user from 'app/assets/img/userImg.jpeg';
  import edit from 'app/assets/img/editp.png';
  import {styles} from './style';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import StarRating from 'react-native-star-rating';
  import {
    EditProfileInput,
    GButton,
    GeneralModal,
    HeaderNavi,
    HorseItemComponent,
  } from 'app/components';
import data from '../../home/src/data';
export function MyFavorites({navigation}) {
  return (
    <View style={styles.content}>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={'My favorites'}
        leftOnPress={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
       <Text style={styles.title}>All horses from Jane</Text>
       <ScrollView contentContainerStyle={styles.generalView} showsVerticalScrollIndicator={false}>
          {data.map((item, index) => {
            return (
              <HorseItemComponent item={item} index={index} props={navigation} />
            );
          })}
        </ScrollView>
         
      </ScrollView>
   
      
    </View>
  );
}
