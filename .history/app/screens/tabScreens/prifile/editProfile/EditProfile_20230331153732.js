import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
  } from 'react-native';
  import React, {useRef, useState} from 'react'; 
  import user from 'app/assets/img/user.png'; 
  import edit from 'app/assets/img/editp.png';
  import right from 'app/assets/img/right.png';
  import add from 'app/assets/img/addhorse.png';
  import {styles} from './style';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import StarRating from 'react-native-star-rating';
import { HeaderNavi } from 'app/components';

export function EditProfile({navigation}) {
  return (
    <View style={styles.content}>
    <SafeAreaView />
    <HeaderNavi
          leftBtn={'Edit Profile'}
          leftOnPress={() => navigation.goBack()}
        />
    <ScrollView
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}>
      <View>
        <Image source={user} />
        <Image source={edit} />
      </View>
     
   
    </ScrollView>
  </View>
  );
}
