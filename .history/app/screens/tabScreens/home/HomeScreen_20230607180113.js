import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState, useLayoutEffect} from 'react';
import topimg from 'app/assets/img/topimg.png';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorseItemComponent, LoadingModal, TabNaviTitle} from 'app/components';
import axiosInstance from 'app/networking/api';
import {useFocusEffect} from '@react-navigation/native';
import {PaymentScreen} from './paymentScreen';
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
export function HomeScreen({navigation}) {
  const [refreshing, setRefreshing] = React.useState(false);
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const [horseData, setHorseData] = useState([]);
  const [load, setLoad] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      getNotificationInfo();
      setRefreshing(false);
    });
  }, []);

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
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={styles.generalView}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={'#CCE63E'}
            />
          }>
          {horseData.length > 0 ? (
            horseData.map((item, index) => {
              return (
                <HorseItemComponent
                  key={index}
                  item={item}
                  index={index}
                  navigation={navigation}
                />
              );
            })
          ) : (
            <View style={styles.noDataView}>
              <Text style={styles.noData}>No Data</Text>
            </View>
          )}
        </ScrollView>
      </View>
      <LoadingModal visible={load} />
    </View>
  );
}
