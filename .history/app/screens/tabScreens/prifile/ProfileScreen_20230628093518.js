import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import user from 'app/assets/img/noimg.png';
import email from 'app/assets/img/email.png';
import phone from 'app/assets/img/phone.png';
import edit from 'app/assets/img/edit.png';
import right from 'app/assets/img/right.png';
import add from 'app/assets/img/addhorse.png';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StarRating from 'react-native-star-rating';
import {GeneralModal, TabNaviTitle} from 'app/components';
import {useSelector} from 'react-redux';
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
import Clipboard from '@react-native-clipboard/clipboard';

export function ProfileScreen({navigation}) {
  let userInfo = useSelector(state => state.userInfo);
  const [copiedText, setCopiedText] = useState('');

  const [starCount, setStarCount] = useState(Number(userInfo?.rate));
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
    });
  }, []);

  useEffect(() => {
    getTokenFcm();
  }, []);

  const copyToClipboard = (a) => {
    Clipboard.setString(a);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };
  const getTokenFcm = async () => {
    try {
      const fcmtoken = await AsyncStorage.getItem('fcmtoken');
      console.log(fcmtoken, 'gggggggggg');
      copyToClipboard(fcmtoken)
      if (!fcmtoken) {
        const fcmtoken = await messaging().getToken();
        copyToClipboard(fcmtoken)
        try {
          if (fcmtoken) {
            console.log('token new generate', fcmtoken);
            await AsyncStorage.setItem('fcmtoken', fcmtoken);
          }
        } catch (error) {
          console.log(error, 'errrrorrr');
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.content}>
      <SafeAreaView />
      <TabNaviTitle naviName="Profile" />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={'#E9A13A'}
          />
        }
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.userView}>
            <View style={styles.infoView}>
              <Image
                source={userInfo.avatar ? {uri: userInfo.avatar} : user}
                style={styles.userImg}
              />
              <View style={styles.nameView}>
                <Text style={styles.nameText}>{userInfo?.name}</Text>
                <View style={styles.userPersView}>
                  <Image source={email} style={styles.ic} />
                  <Text style={styles.infoText} numberOfLines={1}>
                    {userInfo?.email === 'null' ? '' : userInfo.email}
                  </Text>
                </View>
                <View style={styles.userPersView}>
                  <Image source={phone} style={styles.ic} />
                  <Text style={styles.infoText} numberOfLines={1}>
                    {userInfo?.phone === 'null' ? '' : userInfo.phone}
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.editView}
              onPress={() => navigation.navigate('EditProfile')}>
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
                emptyStar={require('app/assets/img/st.png')}
                fullStar={require('app/assets/img/stf.png')}
                halfStar={require('app/assets/img/sth.png')}
                starSize={13}
                starStyle={styles.stars}
              />
            </View>
            <View style={styles.rateView}>
              <Text style={styles.rateText}>Horses</Text>
              <Text style={styles.horseCount}>{userInfo?.horses?.length}</Text>
            </View>
          </View>
          <View style={styles.gFlex}>
            <View style={styles.addHorse}>
              {userInfo?.horses?.length === 0 ? (
                <Text style={styles.rateText}>
                  ✋Hey {userInfo?.name}, It seems like you have not added any
                  horses yet.
                </Text>
              ) : (
                <Text style={styles.rateText}>
                  ✋Hey {userInfo?.name}, Have a new horse to add? Click here.
                </Text>
              )}
              <TouchableOpacity
                onPress={() => navigation.navigate('HorseRegister')}>
                <Image source={add} style={styles.add} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.gFlex}>
            <TouchableOpacity
              style={styles.filterView}
              onPress={() => navigation.navigate('MyHorses')}>
              <Text style={styles.gText}>My Horses</Text>
              <Image source={right} style={styles.rightIc} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.filterView}
              onPress={() => navigation.navigate('MyFavorites')}>
              <Text style={styles.gText}>My Favorites</Text>
              <Image source={right} style={styles.rightIc} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.filterView}
              onPress={() => navigation.navigate('MyBoughtenHorses')}>
              <Text style={styles.gText}>My Purchased Horses</Text>
              <Image source={right} style={styles.rightIc} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.filterView}
              onPress={() => navigation.navigate('AccountInfo')}>
              <Text style={styles.gText}>Accounts</Text>
              <Image source={right} style={styles.rightIc} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.filterView}
              onPress={() => navigation.navigate('Privacy')}>
              <Text style={styles.gText}>Privacy and Policy</Text>
              <Image source={right} style={styles.rightIc} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('MyContracts')}
              style={styles.filterView}>
              <Text style={styles.gText}>My Contracts</Text>
              <Image source={right} style={styles.rightIc} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.filterView}
              onPress={() => navigation.navigate('Notifications')}>
              <Text style={styles.gText}>Notifications</Text>
              <Image source={right} style={styles.rightIc} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.logoutView}>
          <TouchableOpacity
            style={styles.filterView}
            onPress={async () => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.gText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <GeneralModal
        isVisible={modalVisible}
        nav
        subTitle="Are you sure you want to logout?"
        btnText="Logout"
        borderBtnText="Cancel"
        btns={false}
        onClose={() => setModalVisible(!modalVisible)}
        onRightFunc={async () => {
          await AsyncStorage.removeItem('token');
          setModalVisible(!modalVisible);
          navigation.replace('StackNavigation', {screen: 'SignIn'});
        }}
        onLeftFunc={async () => {
          setModalVisible(!modalVisible);
        }}
      />
    </View>
  );
}
