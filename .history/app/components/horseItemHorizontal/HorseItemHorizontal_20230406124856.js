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

export function HorseItemHorizontal({item,index,navigation}) {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => alert(`${item.name}`)}>
        <View
          style={styles.listContainer}
          from={{opacity: 0, translateY: 50}}
          animate={{opacity: 1, translateY: 0}}
          transition={{delay: 1000 + index * 200}}>
          <TouchableOpacity>
            <Image />
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.regN}>Reg N: {item.regNumber}</Text>
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const [likeDisLike, setLikeDisLike] = useState(false);
  return (
    //   <FlatList
    //     data={props.data}
    //     renderItem={renderItem}
    //     keyExtractor={item => item.id}
    //     numColumns={2}
    //     showsVerticalScrollIndicator={false}
    //     contentContainerStyle={{paddingBottom:230}}
    //   />
   
      <TouchableOpacity onPress={() => props.navigation.navigate('HorseInfo')}>
        <View
          style={styles.listContainer}
          from={{opacity: 0, translateY: 50}}
          animate={{opacity: 1, translateY: 0}}
          transition={{delay: 1000 + index * 200}}
          >
          <View style={styles.imageContainer}>
            <Image source={item?.image} style={styles.image} />
            
          </View>
          <Text style={styles.nameText}>{item?.name}</Text>
          <Text style={styles.regN}>Reg N: {item?.regNumber}</Text>
          <Text style={styles.priceText}>{item?.price}</Text>
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
                <Image source={dislike} style={styles.likeed} />
              </TouchableOpacity>
            )}
        </View>
      </TouchableOpacity>
 
  );
}
