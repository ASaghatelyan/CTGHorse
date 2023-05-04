import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {styles} from './style';
import like from 'app/assets/img/like.png';
import dislike from 'app/assets/img/dislike.png';
import DropShadow from 'react-native-drop-shadow';
import axiosInstance from 'app/networking/api';
import white from 'app/assets/img/bgw.jpg';

export const HorseItemComponent = ({
  item,
  index,
  owner,
  navigation,
  getFavorites,
  getinfo,
}) => {
  const [likeDisLike, setLikeDisLike] = useState(item.favorite);
  const [img, setImg] = useState([]);
  useLayoutEffect(() => {
    setLikeDisLike(item.favorite);
    let mainImg = item?.medias
      ?.filter((item, index) => {
        if (item.types === 'photos') {
          return item;
        }
      })
      .filter((item, index) => {
        return item.main === 1;
      });
    setImg(mainImg);
  }, [!item.favorite, item]);

  let getAllIfo = () => {
    owner
      ? navigation.navigate('ChangeHorseInfo', {item, index, getinfo})
      : navigation.navigate('HorseInfo', item.id);
  };

  let onLikeDisLike = async num => {
    try {
      setLikeDisLike(!likeDisLike);
      let res = await axiosInstance.post(`/favorite/${item.id}/${num}`);
      getFavorites && getFavorites();
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
      <TouchableOpacity onPress={getAllIfo}>
        <View
          style={styles.listContainer}
          from={{opacity: 0, translateY: 50}}
          animate={{opacity: 1, translateY: 0}}
          transition={{delay: 1000 + index * 200}}>
          <View style={styles.imageContainer}>
            <Image source={img.length></Image>{uri: img?.[0]?.url}} style={styles.image} />
            {owner ? null : likeDisLike ? (
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
          </View>
          <Text style={styles.nameText} numberOfLines={1}>
            {item?.name}
          </Text>
          <Text style={styles.regN} numberOfLines={1}>
            Reg N: {item?.registration_number}
          </Text>
          <Text style={styles.priceText} numberOfLines={1}>
            {item?.price}
          </Text>
        </View>
      </TouchableOpacity>
    </DropShadow>
  );
};
