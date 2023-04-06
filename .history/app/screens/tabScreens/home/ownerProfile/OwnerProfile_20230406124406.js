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
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import AsyncStorage from '@react-native-async-storage/async-storage';
import StarRating from 'react-native-star-rating';
import {HeaderNavi, HorseItemComponent} from 'app/components';
import topimg from 'app/assets/img/topimg.png'; 
import owner from 'app/assets/img/owner.png';
import chat from 'app/assets/img/chat.png';
import doc from 'app/assets/img/doc.png';
import like from 'app/assets/img/like.png';
import dislike from 'app/assets/img/dislike.png';
import back from 'app/assets/img/back.png';
import call from 'app/assets/img/call.png';

export function OwnerProfile({navigation}) {
  const [likeDisLike, setLikeDisLike] = useState(false);
  const [starCount, setStarCount] = useState(3.5);
  const [choosed, setChoosed] = useState(topimg);
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  let phoneNumber = 8777111223;
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
        <View style={styles.ownerView}>
          <Text style={styles.ownerText}>Owner</Text>
          <View style={styles.gFlex}>
            <View style={styles.picView}>
              <Image source={owner} style={styles.ownerImg} />
              <View>
                <Text style={styles.nameText}>Jane Cooper</Text>
                <Text style={styles.contactType}>Contact: Phone Number</Text>
                <Text style={styles.nameText}>54646 646546 64</Text>
                <Text style={styles.addres}>Address: </Text>
                <Text style={styles.}>Email:  </Text>
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
            <View>
              <TouchableOpacity
                onPress={() => Linking.openURL(`tel:${phoneNumber}`)}>
                <Image source={call} style={styles.callIc} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={chat} style={styles.chatIc} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
