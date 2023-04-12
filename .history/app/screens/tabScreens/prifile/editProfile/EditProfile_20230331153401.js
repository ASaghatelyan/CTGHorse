import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
  } from 'react-native';
  import React, {useRef, useState} from 'react';
  import user from 'app/assets/img/userImg.jpeg';
  import email from 'app/assets/img/email.png';
  import phone from 'app/assets/img/phone.png';
  import edit from 'app/assets/img/edit.png';
  import right from 'app/assets/img/right.png';
  import add from 'app/assets/img/addhorse.png';
  import {styles} from './style';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import StarRating from 'react-native-star-rating';

export function EditProfile(props) {
  return (
    <View style={styles.content}>
    <SafeAreaView />
    <Text style={styles.title}>Profile</Text>
    <ScrollView
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.userView}>
          <View style={styles.infoView}>
            <Image source={user} style={styles.userImg} />
            <View style={styles.nameView}>
              <Text style={styles.nameText}>Jane Cooper</Text>
              <View style={styles.userPersView}>
                <Image source={email} style={styles.ic} />
                <Text style={styles.infoText} numberOfLines={1}>
                  example@gmail.com
                </Text>
              </View>
              <View style={styles.userPersView}>
                <Image source={phone} style={styles.ic} />
                <Text style={styles.infoText} numberOfLines={1}>
                  +3756632332
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.editView} onPress={()=>navigation.navigate('EditProfile')}>
            <Image source={edit} style={styles.editIc} />
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rateInfoView}>
          <View style={styles.rateView}>
            <Text style={styles.rateText}>Rate</Text>
            <StarRating
                halfStarEnabled={true}
                disabled={true}
                maxStars={5}
                rating={starCount}
                selectedStar={rating => setStarCount(rating)}
                emptyStar={require('app/assets/img/starE.png')}
                fullStar={require('app/assets/img/starF.png')}
                halfStar={require('app/assets/img/starH.png')}
                starSize={13}
                starStyle={styles.stars}
                
              />
          </View>
          <View style={styles.rateView}>
            <Text style={styles.rateText}>Horses</Text>
            <Text style={styles.horseCount}>0</Text>
          </View>
        </View>
    
   
    </ScrollView>
  </View>
  );
}