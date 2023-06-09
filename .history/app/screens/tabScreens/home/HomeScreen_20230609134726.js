import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  RefreshControl,
  StatusBar,
  Platform,
} from 'react-native';
import React, {useEffect, useState, useLayoutEffect} from 'react';
import topimg from 'app/assets/img/topimg.png';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AudioRecorder, HorseItemComponent, LoadingModal, TabNaviTitle} from 'app/components';
import axiosInstance from 'app/networking/api';
import {GlobalHeight} from 'app/constant/styleConstants';
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
export function HomeScreen({navigation}) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top + GlobalHeight(18);
  const [horseData, setHorseData] = useState([]);
  const [load, setLoad] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      getData();
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
      <StatusBar
        translucent
        backgroundColor="transparent"
        animated={true}
        barStyle="dark-content"
      />
      <Image source={topimg} style={styles.topImg} />
      <SafeAreaView
        style={{marginBottom: Platform === 'android' && statusBarHeight}}
      />
      <TabNaviTitle naviName="Home" />
      <Text style={styles.title}>Featured Horses</Text>
      <View style={{flex: 1}}>
        <AudioRecorder/>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.generalView}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={'#E9A13A'}
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