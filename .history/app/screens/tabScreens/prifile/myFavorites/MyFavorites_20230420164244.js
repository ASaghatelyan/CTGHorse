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
import {HeaderNavi, HorseItemComponent} from 'app/components';
import data from '../../home/src/data';
import axiosInstance from 'app/networking/api';

export function MyFavorites({navigation}) {
  const [favoritData, setFavoriteData] = useState([]);
  useEffect(() => {
    getFavorites();
  }, []);

  let getFavorites = async num => {
    try {
      let res = await axiosInstance.get(`/get-favorite-horses`);
      setFavoriteData(res.data);
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
        <Text style={styles.title}>All horses from Jane</Text>
        <ScrollView
          contentContainerStyle={styles.generalView}
          showsVerticalScrollIndicator={false}>
          {data.map((item, index) => {
            return (
              <HorseItemComponent
                item={item}
                index={index}
                navigation={navigation}
              />
            );
          })}
        </ScrollView>
      </ScrollView>
      <Loa
    </View>
  );
}
