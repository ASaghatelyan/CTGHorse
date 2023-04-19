import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import topimg from 'app/assets/img/topimg.png';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {GButton, HorseItemHorizontal} from 'app/components';
import StarRating from 'react-native-star-rating';
import owner from 'app/assets/img/noimg.png';
import chat from 'app/assets/img/chat.png';
import doc from 'app/assets/img/doc.png';
import like from 'app/assets/img/like.png';
import dislike from 'app/assets/img/dislike.png';
import back from 'app/assets/img/back.png';
import call from 'app/assets/img/call.png';

export function HorseInfo({navigation, route}) {
  const [likeDisLike, setLikeDisLike] = useState(false);
  const [data, setData] = useState([route.params?.item[0] ? route.params?.item[0]:'']);
  const [more, setMore] = useState([route.params?.item[1] ? route.params?.item[1]:""]);
  const [starCount, setStarCount] = useState(data[0].user.rate);
  const [choosed, setChoosed] = useState(data[0].medias[0].url);
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  let phoneNumber = 8777111223;
  console.log(more, 'dfgbn');
  return (
    <View style={[styles.container,more.length > 0 && {height:'100%'}]}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: choosed}}
            style={styles.topImg}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={[styles.backView, {top: statusBarHeight}]}
            onPress={() => navigation.pop(1)}>
            <Image source={back} style={styles.backIc} />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          {likeDisLike ? (
            <TouchableOpacity
              style={styles.likeView}
              onPress={() => setLikeDisLike(!likeDisLike)}>
              <Image source={like} style={styles.like} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.likeView}
              onPress={() => setLikeDisLike(!likeDisLike)}>
              <Image source={dislike} style={styles.like} />
            </TouchableOpacity>
          )}
        </View>
        <ScrollView
          bounces={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.topImgView}>
          {data[0].medias.map((item, index) => {
            if (item.type === 'photos') {
              return (
                <TouchableOpacity
                  style={styles.horseImgView}
                  onPress={() => setChoosed(item.url)}>
                  <Image source={{uri: item.url}} style={styles.horseIc} />
                </TouchableOpacity>
              );
            }
          })}
        </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 16}}>
        <View style={styles.infoView}>
          <Text style={styles.titleInfo}>About</Text>
          <Text style={styles.titleName}>{data[0]?.name}</Text>
          <Text style={styles.titleName}>
            Reg N: {data[0]?.registration_number}
          </Text>
          <Text style={styles.titleName}>
            Date of Birth: {data[0]?.date_of_birth}
          </Text>
          <Text style={styles.titlePrice}>${data[0]?.price}</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {data[0].medias.map((item, Index) => {
              if (item.type === 'document') {
                return (
                  <TouchableOpacity style={styles.horseImgView}>
                    <Image source={doc} style={styles.docIc} />
                  </TouchableOpacity>
                );
              }
            })}
          </ScrollView>
        </View>
        <View style={styles.ownerTop}>
          <TouchableOpacity
            style={styles.ownerView}
            onPress={() => navigation.navigate('OwnerProfile')}>
            <Text style={styles.ownerText}>Owner</Text>
            <View style={styles.gFlex}>
              <View style={styles.picView}>
                <Image
                  source={
                    data[0].user?.avatar ? {uri: data[0].user.avatar} : owner
                  }
                  style={styles.ownerImg}
                />
                <View>
                  <Text style={styles.nameText}>{data[0].user.name}</Text>
                  <Text style={styles.contactType}>Contact: Phone Number</Text>
                  <Text style={styles.nameText}>{data[0].user.phone}</Text>
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
          </TouchableOpacity>
          <GButton
            btnName="Buy now"
            customStyle={styles.custom}
            handelMove={() => navigation.navigate('PaymentMethod')}
          />
        </View>
        {more.length >0 && (
          <Text style={styles.title}>More from {data[0].user.name}</Text>
        )}
        {more.length > 0 && (
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.moreView}>
            {data.map((item, index) => {
              return (
                <HorseItemHorizontal
                  item={item}
                  index={index}
                  navigation={navigation}
                />
              );
            })}
          </ScrollView>
        )}
      </ScrollView>
    </View>
  );
}
