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
  const [data, setData] = useState([route.params.item[0]]);
  const [starCount, setStarCount] = useState(3.5);
  const [choosed, setChoosed] = useState(topimg);
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  let phoneNumber = 8777111223;
  console.log(data[0], 'dfgbn');
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={choosed} style={styles.topImg} />
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
        {/* {data.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.horseImgView}
              onPress={() => setChoosed(item.image)}>
              <Image source={item.image} style={styles.horseIc} />
            </TouchableOpacity>
          );
        })} */}
      </ScrollView>
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
            <TouchableOpacity style={styles.horseImgView}>
              <Image source={doc} style={styles.docIc} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.horseImgView}>
              <Image source={doc} style={styles.docIc} />
            </TouchableOpacity>
           { data[0].medias.map((itemIndex)=>{

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
                <Image source={owner} style={styles.ownerImg} />
                <View>
                  <Text style={styles.nameText}>Jane Cooper</Text>
                  <Text style={styles.contactType}>Contact: Phone Number</Text>
                  <Text style={styles.nameText}>54646 646546 64</Text>
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
        <Text style={styles.title}>More from Jane</Text>
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
      </ScrollView>
    </View>
  );
}
