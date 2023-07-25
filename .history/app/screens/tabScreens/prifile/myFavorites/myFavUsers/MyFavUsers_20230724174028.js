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
import {HeaderNavi, HorseItemComponent, LoadingModal, UserInfoItem} from 'app/components';

import axiosInstance from 'app/networking/api';
import {useSelector} from 'react-redux';

export function MyFavUsers({navigation, route}) {
  let userInfo = useSelector(state => state.userInfo);
  const [load, setLoad] = useState(false);
  const [favoriteUsers, setFavoriteUsers] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  let getFavorites = async num => {
    setLoad(true);
    try {
      let res = await axiosInstance.get(`/get-favorites`);
      console.log(res, 'res');
      setFavoriteUsers([...res.data.users]);
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
        leftBtn={'My favorites horses'}
        leftOnPress={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        {load ? null : favoriteUsers.length > 0 ? (
          <View>
            <View style={styles.generalView}>
              {favoriteUsers.map((item, index) => {
                return (
                    <UserInfoItem
                    key={index}
                    item={item}
                    index={index}
                    navigation={navigation}  upDatePrev={route.params}
                    getFavorites={getFavorites}
                  />
                );
              })}
            </View>
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
