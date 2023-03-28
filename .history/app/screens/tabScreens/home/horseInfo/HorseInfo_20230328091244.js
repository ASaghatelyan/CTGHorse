import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import topimg from 'app/assets/img/topimg.png';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {GButton, HorseItemHorizontal} from 'app/components';
import StarRating from 'react-native-star-rating';
import data from '../src/data';
import owner from 'app/assets/img/owner.png';
import chat from 'app/assets/img/chat.png';
import doc from 'app/assets/img/doc.png';
import like from 'app/assets/img/like.png';
import dislike from 'app/assets/img/dislike.png';
import back from 'app/assets/img/back.png';

export function HorseInfo(props) {
  const [likeDisLike, setLikeDisLike] = useState(false);
  const [starCount, setStarCount] = useState(0);
  const [choosed, setChoosed] = useState(topimg);
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={choosed} style={styles.topImg} />
        <TouchableOpacity>
          <Image source={back} style={styles.backIc} />
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
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.horseImgView}
              onPress={() => setChoosed(item.image)}>
              <Image source={item.image} style={styles.horseIc} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 16}}>
        <View style={styles.infoView}>
          <Text style={styles.titleInfo}>About</Text>
          <Text style={styles.titleName}>Friesian</Text>
          <Text style={styles.titleName}>Reg N: 4564646</Text>
          <Text style={styles.titleName}>Date of Birth: June 14 1995</Text>
          <Text style={styles.titlePrice}>$18,000</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.horseImgView}>
              <Image source={doc} style={styles.docIc} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.horseImgView}>
              <Image source={doc} style={styles.docIc} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.horseImgView}>
              <Image source={doc} style={styles.docIc} />
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.ownerView}>
          <Text style={styles.ownerText}>Owner</Text>
          <View style={styles.gFlex}>
            <View style={styles.picView}>
              <Image source={owner} style={styles.ownerImg} />
              <View>
                <Text style={styles.nameText}>Jane Cooper</Text>
                <StarRating
                  halfStarEnabled={true}
                  disabled={false}
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
            <TouchableOpacity>
              <Image source={chat} style={styles.chatIc} />
            </TouchableOpacity>
          </View>
          <GButton btnName="Buy now" />
        </View>
        <Text style={styles.title}>More from Jane</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.moreView}>
          {data.map((item, index) => {
            return (
              <HorseItemHorizontal item={item} index={index} props={props} />
            );
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
