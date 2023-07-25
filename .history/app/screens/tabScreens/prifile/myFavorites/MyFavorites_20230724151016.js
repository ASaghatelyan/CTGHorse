import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StarRating from 'react-native-star-rating';
import {HeaderNavi, HorseItemComponent, LoadingModal} from 'app/components';
import data from '../../home/src/data';
import axiosInstance from 'app/networking/api';
import {useSelector} from 'react-redux';

export function MyFavorites({navigation}) {
  let userInfo = useSelector(state => state.userInfo); 
  const [load, setLoad] = useState(false);
  const [favoriteHorses, setFavoriteHorses] = useState([]);
  const [favoriteUsers, setFavoriteUsers] = useState([]);
  useEffect(() => {
    getFavorites();
  }, []);
console.log(favoriteHorses,'favoriteHorses');
console.log(favoriteUsers,'favoriteUsers');
  let getFavorites = async num => {
    setLoad(true);
    try {
      let res = await axiosInstance.get(`/get-favorites`);
      setFavoriteHorses([...res.data.horses]);
      setFavoriteUsers([...res.data.users])
      setLoad(false);
    } catch (error) {
      console.log(error.response.data.message);
      setLoad(false);
    }
  };

  let onLikeDisLike = async (id, num) => {
    try {
      // await axiosInstance.post(`/favorite/${item.id}/${num}`);
      console.log(id, num);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

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
        {load ? null : favoriteHorses.length > 0 ? (
          <View>
            <View>
            <Text style={styles.title}>All horses from {userInfo.name}</Text>
            <TouchableOpacity>
              <Text>See All</Text>
            </TouchableOpacity>
            </View>
            <ScrollView style={styles.generalView} horizontal>
              {favoriteHorses.map((item, index) => {
                return (
                  <HorseItemComponent
                    key={index}
                    item={item}
                    index={index}
                    navigation={navigation}
                    getFavorites={getFavorites}
                  />
                );
              })}
            </ScrollView>
          </View>
        ) : (
          <View style={styles.noFavView}>
            <Text style={styles.noFavText}>No favorite horses</Text>
          </View>
        )}
      </ScrollView>
      <LoadingModal visible={load} />
    </View>
  );
}
