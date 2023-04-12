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
import { TabNaviTitle } from 'app/components';
import { useSelector } from 'react-redux';

export function ProfileScreen({navigation}) {
  let userInfo = useSelector(state => state.userInfo);
  console.log(userInfo);
  const [starCount, setStarCount] = useState(3.5);
  return (
    <View style={styles.content}>
      <SafeAreaView />
      <TabNaviTitle naviName="Profile" />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.userView}>
            <View style={styles.infoView}>
              <Image source={user} style={styles.userImg} />
              <View style={styles.nameView}>
                <Text style={styles.nameText}>{userInfo?.name}</Text>
                <View style={styles.userPersView}>
                  <Image source={email} style={styles.ic} />
                  <Text style={styles.infoText} numberOfLines={1}>
                   {userInfo?.email}
                  </Text>
                </View>
                <View style={styles.userPersView}>
                  <Image source={phone} style={styles.ic} />
                  <Text style={styles.infoText} numberOfLines={1}>
                    {userInfo?.phone}
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
              <Text style={styles.horseCount}>{userInfo?.horsees.lenght}</Text>
            </View>
          </View>
          <View style={styles.gFlex}>
            <View style={styles.addHorse}>
              <Text style={styles.rateText}>
                ✋Hey Jane, It seems like you have not added any horses yet.
              </Text>
              <TouchableOpacity onPress={()=>navigation.navigate('HorseRegister')}>
                <Image source={add} style={styles.add} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.gFlex}>
            <TouchableOpacity style={styles.filterView} onPress={()=>navigation.navigate('MyHorses')}>
              <Text style={styles.gText}>My Horses</Text>
              <Image source={right} style={styles.rightIc} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterView} onPress={()=>navigation.navigate('MyFavorites')}>
              <Text style={styles.gText}>My Favorites</Text>
              <Image source={right} style={styles.rightIc} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterView} onPress={()=>navigation.navigate('AccountInfo')}>
              <Text style={styles.gText}>Accounts</Text>
              <Image source={right} style={styles.rightIc} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterView}>
              <Text style={styles.gText}>Privacy and Policy</Text>
              <Image source={right} style={styles.rightIc} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterView}>
              <Text style={styles.gText}>Notifications</Text>
              <Image source={right} style={styles.rightIc} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.logoutView}>
          <TouchableOpacity
            style={styles.filterView}
            onPress={async () => {
              await AsyncStorage.removeItem('token');
              navigation.replace('SignIn');
            }}>
            <Text style={styles.gText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
