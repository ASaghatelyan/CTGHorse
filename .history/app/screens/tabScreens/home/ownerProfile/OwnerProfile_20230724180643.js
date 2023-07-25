import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Linking,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import AsyncStorage from '@react-native-async-storage/async-storage';
import StarRating from 'react-native-star-rating';
import {
  HeaderNavi,
  HorseItemComponent,
  HorseItemHorizontal,
} from 'app/components';
import topimg from 'app/assets/img/topimg.png';
import owner from 'app/assets/img/owner.png';
import chat from 'app/assets/img/chat.png';
import doc from 'app/assets/img/doc.png';
import like from 'app/assets/img/like.png';
import dislike from 'app/assets/img/dislike.png';
import back from 'app/assets/img/back.png';
import call from 'app/assets/img/call.png';
import data from '../src/data';
import axiosInstance from 'app/networking/api';

export function OwnerProfile({navigation, route}) {
  const [likeDisLike, setLikeDisLike] = useState(false);
  const [starCount, setStarCount] = useState(Number(route.params.owner.rate));

  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  let getOwnerData = async rating => {
    try {
      let res = await axiosInstance.post(`/rate-store/`, {
        rating: rating,
        user_id: route.params.owner.id,
      });
      route.params?.getData && route.params?.getData();
      route.params?.getFavorites && route.params?.getFavorites();
      route.params?.getData && route.params?.getData();  
      upDatePrev 
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <View style={styles.content}>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={'Owner profile'}
        leftOnPress={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <View style={styles.ownerView}>
          <Text style={styles.ownerText}>Owner</Text>
          <View style={styles.gFlex}>
            <View style={styles.picView}>
              <Image
                source={
                  route.params.owner.avatar
                    ? {uri: route.params.owner.avatar}
                    : owner
                }
                style={styles.ownerImg}
              />
              <View>
                <Text style={styles.nameText}>
                  {route.params.owner.name} {route.params.owner.surname}
                </Text>
                <Text style={styles.contactType}>Contact: Phone Number</Text>
                <Text style={styles.nameText}>
                  {route.params.owner.phone !== 'null' &&
                    route.params.owner.phone}
                </Text>
                <Text style={styles.address}>
                  Address:{' '}
                  {route.params.owner.address !== 'null' &&
                    route.params.owner.address}
                  as as as as asa s
                </Text>
                <Text style={styles.address}>
                  Email: {route.params.owner.email}
                </Text>
                <View style={styles.rateView}>
                  <StarRating
                    halfStarEnabled={true}
                    maxStars={5}
                    rating={starCount}
                    selectedStar={rating => {
                      setStarCount(rating);
                      getOwnerData(rating);
                    }}
                    emptyStar={require('app/assets/img/st.png')}
                    fullStar={require('app/assets/img/stf.png')}
                    halfStar={require('app/assets/img/sth.png')}
                    starSize={20}
                    starStyle={styles.stars}
                  />
                </View>
              </View>
            </View>
            <View style={styles.rightView}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('OpenChat', {item: route.params.owner})
                }>
                <Image source={chat} style={styles.chatIc} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  route.params?.owner?.phone &&
                  Linking.openURL(`tel:${route.params.owner.phone}`)
                }>
                <Image source={call} style={styles.callIc} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.title}>All horses from Jane</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.moreView}>
          {route.params.owner.horses.map((item, index) => {
            return (
              <HorseItemHorizontal
                key={index}
                item={item}
                index={index}
                navigation={navigation}
              />
            );
          })}
        </ScrollView>
        {/* <Text style={styles.titleNew}>New from Jane</Text>
        <ScrollView contentContainerStyle={styles.generalView}>
          {data.map((item, index) => {
            return (
              <HorseItemComponent
                item={item}
                index={index}
                navigation={navigation}
              />
            );
          })}
        </ScrollView> */}
      </ScrollView>
    </View>
  );
}
