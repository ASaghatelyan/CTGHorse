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
import {HorseItemComponent, LoadingModal, TabNaviTitle} from 'app/components';
import axiosInstance from 'app/networking/api';
import {useFocusEffect} from '@react-navigation/native';
import {PaymentScreen} from './paymentScreen';

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

  // useFocusEffect(
  //   React.useCallback(() => {
  //     getData()
  //   }, [navigation]))

  let getData = async () => {
    setLoad(true);
    try {
      let res = await axiosInstance.get(`/get-all-horses`);
      setHorseData([...res.data]);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.log(error.response);
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
                key={index}
                item={item}
                index={index}
                navigation={navigation}
              />
            );
          })}
          <View style={{height:222,alignItems:'center',}}>
            <Text>No Data</Text>
          </View>
        </ScrollView>
      </ScrollView>
      <LoadingModal visible={load} />
    </View>
  );
}
