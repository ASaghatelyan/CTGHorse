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

export function OwnerProfile({navigation, route}) {
  const [likeDisLike, setLikeDisLike] = useState(false);
  const [starCount, setStarCount] = useState(route.params.rate);
  const [choosed, setChoosed] = useState(topimg);
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  let phoneNumber = 8777111223;

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
                  route.params.avatar ? {uri: route.params.avatar} : owner
                }
                style={styles.ownerImg}
              />
              <View>
                <Text style={styles.nameText}>{route.params.name}</Text>
                <Text style={styles.contactType}>Contact: Phone Number</Text>
                <Text style={styles.nameText}>
                  {route.params.phone !== 'null' && route.params.phone}
                </Text>
                <Text style={styles.address} numberOfLines={1}>
                  Address:{' '}
                  {route.params.address !== 'null' && route.params.address}
                </Text>
                <Text style={styles.address}>Email: {route.params.email}</Text>
                <StarRating
                  halfStarEnabled={true}
                  disabled={true}
                  maxStars={5}
                  rating={starCount}
                  selectedStar={rating => setStarCount(rating)}
                  emptyStar={require('app/assets/img/starE.png')}
                  fullStar={require('app/assets/img/starF.png')}
                  halfStar={require('app/assets/img/starH.png')}
                  starSize={20}
                  starStyle={styles.stars}
                />
              </View>
            </View>
            <View style={styles.rightView}>
              <TouchableOpacity>
                <Image source={chat} style={styles.chatIc} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL(`tel:${phoneNumber}`)}>
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
          {route.params.horses.map((item, index) => {
            return (
              <HorseItemHorizontal
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
