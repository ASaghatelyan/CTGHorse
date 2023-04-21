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
import React, {useState} from 'react';
import {styles} from './style';
import like from 'app/assets/img/like.png';
import dislike from 'app/assets/img/dislike.png';
import DropShadow from 'react-native-drop-shadow';
import axiosInstance from 'app/networking/api';

export function HorseItemHorizontal({item, index, owner, navigation}) {
  const [likeDisLike, setLikeDisLike] = useState(item.favorite
    );
  let getAllIfo = () => {
    owner
      ? navigation.navigate('ChangeHorseInfo', {item, index})
      : navigation.navigate('HorseInfo', item.id);
  };

  let onLikeDisLike = async num => {
    try {
      setLikeDisLike(!likeDisLike);
      let res = await axiosInstance.post(`/favorite/${item.id}/${num}`); 
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  console.log(item?.medias,'dfgasnd c');
  return ( 

    <TouchableOpacity onPress={() => navigation.push('HorseInfo', item.id)}>
      <View
        style={styles.listContainer}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 1000 + index * 200}}>
        <View style={styles.imageContainer}>
          {/* <Image source={{uri:item?.medias[0].url}} style={styles.image} /> */}
        </View>
        <Text style={styles.nameText}>{item?.name}</Text>
        <Text style={styles.regN}>Reg N: {item?.registration_number}</Text>
        <Text style={styles.priceText}>${item?.price}</Text>
        {likeDisLike ? (
          <TouchableOpacity
            style={styles.likeView}
            onPress={() => onLikeDisLike(0)}>
            <Image source={like} style={styles.like} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.likeView}
            onPress={() => onLikeDisLike(1)}>
            <Image source={dislike} style={styles.likeed} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}
