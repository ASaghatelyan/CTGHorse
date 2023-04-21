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

export const HorseItemComponent = ({item, index, owner, navigation}) => {
  const [likeDisLike, setLikeDisLike] = useState(false);
  let getAllIfo = () => {
    owner
      ? navigation.navigate('ChangeHorseInfo', {item, index})
      : navigation.navigate('HorseInfo', item.id);
  };
  console.log(likeDisLike, item.id);
let onLike = ()=>{

}
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
            <Image
              source={{uri: item?.medias?.[0]?.url}}
              style={styles.image}
            />
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
