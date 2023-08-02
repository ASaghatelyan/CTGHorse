import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import DropShadow from 'react-native-drop-shadow';
import {styles} from './style';
import StarRating from 'react-native-star-rating';
import noAva from 'app/assets/img/noimg.png';
import like from 'app/assets/img/like.png';
import dislike from 'app/assets/img/dislike.png';


export function UserInfoItem({item}) {
  const [starCount, setStarCount] = useState(0);
  const [likeDisLike, setLikeDisLike] = useState(true);
  console.log('====================================');
  console.log(item);
  console.log('====================================');
  let onLikeDisLike = async num => {
    try {
      setLikeDisLike(!likeDisLike);
      let res = await axiosInstance.post(
        `/favorite-user/${item.id}/${num}`,
      );
      getFavorites && getFavorites();
      upDatePrev && upDatePrev();
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <DropShadow
      style={{
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
      }}>
      <TouchableOpacity style={styles.listContainer}>
        <Image
          source={item.avatar ? {uri: item.avatar} : noAva}
          style={styles.avatar}
        />
        <Text style={styles.nameText}>
          {item.name} {item.surname}
        </Text>
        <StarRating
          halfStarEnabled={true}
          disabled={true}
          maxStars={5}
          rating={starCount}
          selectedStar={rating => setStarCount(rating)}
          emptyStar={require('app/assets/img/st.png')}
          fullStar={require('app/assets/img/starF.png')}
          halfStar={require('app/assets/img/sth.png')}
          starSize={20}
          starStyle={styles.stars}
        />
          {  likeDisLike ? (
              <TouchableOpacity
                style={styles.likeView}
                onPress={() => onLikeDisLike(0)}>
                <Image source={like} style={styles.like} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.likeView}
                onPress={() => onLikeDisLike(1)}>
                <Image source={dislike} style={styles.like} />
              </TouchableOpacity>
            )}
      </TouchableOpacity>
    </DropShadow>
  );
}