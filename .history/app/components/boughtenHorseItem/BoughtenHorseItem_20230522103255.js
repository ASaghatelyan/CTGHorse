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
  import white from 'app/assets/img/bgw.png';

export   function BoughtenHorseItem({ item,
    index,
    owner,
    navigation,
    getFavorites,
    getinfo,
    boughten}) {

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
    <View>
      <Text>BoughtenHorseItem</Text>
    </View>
  )
}