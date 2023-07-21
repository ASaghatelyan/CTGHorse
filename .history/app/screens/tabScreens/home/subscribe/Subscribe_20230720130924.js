import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  RefreshControl,
  Dimensions,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';

import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorseItemComponent, LoadingModal, TabNaviTitle} from 'app/components';
import {useSelector, useDispatch} from 'react-redux';
import axiosInstance from 'app/networking/api';
import {SubscribeItem} from 'app/components';
import img from 'app/assets/img/h.png';

const {width: screenWidth} = Dimensions.get('window');
let data = [
  {
    img,
    title: 'Lorem Ipsum',
    subTitle: 'Lorem Ipsum is simply dummy text',
    price: '0.99',
    currency: '$',
    on: ['To dowload the App', ' Use as a horse management tool'],
    off: [
      'Ability to buy or sell horses',
      'Have sale horses featured on the app',
    ],
  },
  {
    img,
    title: 'Lorem Ipsum',
    subTitle: 'Lorem Ipsum is simply dummy text',
    price: '0.99',
    currency: '$',
    on: ['To dowload the App', ' Use as a horse management tool'],
    off: [
      'Ability to buy or sell horses',
      'Have sale horses featured on the app',
    ],
  },
  {
    img,
    title: 'Lorem Ipsum',
    subTitle: 'Lorem Ipsum is simply dummy text',
    price: '0.99',
    currency: '$',
    on: ['To dowload the App', ' Use as a horse management tool'],
    off: [
      'Ability to buy or sell horses',
      'Have sale horses featured on the app',
    ],
  },
];

export function Subscribe({navigation}) {
  const [horseData, setHorseData] = useState([]);
  const [load, setLoad] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  //   useEffect(() => {
  //     const unsubscribe = navigation.addListener('focus', () => {
  //       // getData();
  //     });
  //     return unsubscribe;
  //   }, [navigation]);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     getData()
  //   }, [navigation]))

  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(data);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <SubscribeItem
          img={item.img}
          title={item.title}
          subTitle={item.subTitle}
          price={item.price}
          currency={item.currency}
          on={item.on}
          off={item.off}
        />
      </View>
    );
  };

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
      <SafeAreaView />
      <TabNaviTitle />
      <View style={{flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.generalView}>
          <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 60}
            data={data}
            renderItem={renderItem}
            hasParallaxImages={true}
          />
        </ScrollView>
      </View>
      <LoadingModal visible={load} />
    </View>
  );
}
