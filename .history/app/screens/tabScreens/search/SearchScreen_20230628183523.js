import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import filter from 'app/assets/img/filter.png';
import goToTop from 'app/assets/img/expand.png';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorseItemComponent, LoadingModal, SearchBtn} from 'app/components';

import {SearchModal} from 'app/components/modals';
import axiosInstance from 'app/networking/api';

export function SearchScreen({navigation}) {
  const [searchModal, setSearchModal] = useState(false);
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const scrollRef = useRef();
  const [data, setData] = useState([]);
  const [history, setHistory] = useState([]);
  const [load, setLoad] = useState(false);
  const [filterCount, setFilterCount] = useState(0);
  const [filterArr, setFilterArr] = useState([]);
  const [err, setErr] = useState('');
  const onFabPress = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  useEffect(() => {
    getHistory();
    // getData();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, [navigation, filterArr]);

  let getHistory = async () => {
    try {
      let res = await axiosInstance.get(`/history`);
      setHistory(res.data);
    } catch (e) {
      setErr('Please try again later');
      setErrorVisable(true);
    }
  };

  let getItem = async text => {
    try {
      let res = await axiosInstance.get(`/search/${text}`);
      setData(res.data);
    } catch (e) {
      setErr('Please try again later');
      setErrorVisable(true);
    }
  };

  let getData = async () => {
    setLoad(true);
    try {
      const formData = new FormData(); 
      formData.append('arr[]', filterArr);
      // let res = await axiosInstance.get(`/get-all-horses`);
      let res = await axiosInstance.post(`/filter`, filterArr.length>0 ? {} formData);
      setData([...res.data]);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.log(error.response);
    }
  };

  let onConfirmFilters = (allData, count, arr) => {
    console.log(allData, count, arr,'ssss');
    setData([...allData]);
    setFilterCount(count);
    setFilterArr(arr);
  };

  return (
    <View style={styles.content}>
      <SafeAreaView />
      <View style={{paddingHorizontal: 16}}>
        <SearchBtn onSearch={() => setSearchModal(!searchModal)} />
        <View style={styles.titleView}>
          <Text style={styles.filterCount}>Applied Filters:{filterCount}</Text>
          <TouchableOpacity
            style={styles.filterView}
            onPress={() => navigation.navigate('Filter', {onConfirmFilters})}>
            <Text style={styles.filterText}>Filter</Text>
            <Image source={filter} style={styles.filterIc} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.itemContainer}
        showsVerticalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <HorseItemComponent
              key={item.id}
              item={item}
              index={index}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
      <TouchableOpacity style={styles.bottomBtnView} onPress={onFabPress}>
        <Image source={goToTop} style={styles.expend} />
        <Text style={styles.goToTopText}>Go to top</Text>
      </TouchableOpacity>
      <SearchModal
        isVisible={searchModal}
        onClose={() => setSearchModal(!searchModal)}
        history={history}
        getItem={getItem}
      />
      <LoadingModal visible={load} />
    </View>
  );
}
