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

export function MyFavorites({navigation}) {
  const [load,setLoad]=useState(false)
  const [favoritData, setFavoriteData] = useState([]);
  useEffect(() => {
    getFavorites();
  }, []);

  let getFavorites = async num => {
    setLoad(true)
    try {
      let res = await axiosInstance.get(`/get-favorite-horses`);
      setFavoriteData(res.data);
      setLoad(false)
    } catch (error) {
      console.log(error.response.data.message);
      setLoad(false)
    }
  };
 
  let onLikeDisLike = async num => {
    try { 
      // await axiosInstance.post(`/favorite/${item.id}/${num}`); 
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
          {favoritData.map((item, index) => {
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
      <LoadingModal visible={load}/>
    </View>
  );
}
