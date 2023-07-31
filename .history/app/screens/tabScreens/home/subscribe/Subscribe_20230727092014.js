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
import {useFocusEffect} from '@react-navigation/native';

const {width: screenWidth} = Dimensions.get('window');

export function Subscribe({navigation}) {
  const [load, setLoad] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [plans, setPlans] = useState([]);
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);
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
      price: '4.99',
      currency: '$',
      on: [
        'To dowload the App',
        ' Use as a horse management tool',
        'Buy and sell horses',
      ],
      off: ['Have sale horses featured on the app'],
    },
    {
      img,
      title: 'Lorem Ipsum',
      subTitle: 'Lorem Ipsum is simply dummy text',
      price: '9.99',
      currency: '$',
      on: [
        'To dowload the App',
        ' Use as a horse management tool',
        'Buy and sell horses',
        'Have sale horses featured on the app',
      ],
    },
  ];

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setEntries(data);
    });
    return unsubscribe;
  }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, [navigation]),
  );

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.items}>
        <SubscribeItem
          key={index}
          img={item.img}
          title={item.title}
          subTitle={item.subTitle}
          price={item.price}
          currency={item.currency}
          on={item.on}
          off={item.off}
          navigation={navigation}
        />
      </View>
    );
  };
  const subscribe = async id => {
    setLoad(true);
    try {
      let res = await axiosInstance.get(`/subscribtion-to-plan/${id} `);
      console.log(res);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.log(error.response);
    }
  };

  let getData = async () => {
    setLoad(true);
    try {
      let res = await axiosInstance.get(`/all-plans`);

      setPlans([...res.data]);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.log(error.response);
    }
  };

  return (
    <View style={styles.content}>
      <SafeAreaView />
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={6000}
        loop={true}
      />
      <LoadingModal visible={load} />
    </View>
  );
}
