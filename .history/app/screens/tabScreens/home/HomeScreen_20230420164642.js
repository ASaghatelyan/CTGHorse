import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState, useLayoutEffect} from 'react';
import topimg from 'app/assets/img/topimg.png';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorseItemComponent, TabNaviTitle} from 'app/components';
import axiosInstance from 'app/networking/api';

export function HomeScreen({navigation}) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const [horseData, setHorseData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, [navigation]);

  let getData = async () => {
    setLoad(true);
    try {
      let res = await axiosInstance.get(`/get-all-horses`);
      setHorseData(res.data);
      setLoad(true);
    } catch (error) {
      
    }
  };

  return (
    <View style={styles.content}>
      <Image source={topimg} style={styles.topImg} />
      <SafeAreaView />
      <TabNaviTitle naviName="Home" />
      <Text style={styles.title}>Featured Horses</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView contentContainerStyle={styles.generalView}>
          {horseData.map((item, index) => {
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
    </View>
  );
}
