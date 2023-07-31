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
import {
  AddNewCard,
  HorseItemComponent,
  LoadingModal,
  TabNaviTitle,
} from 'app/components';
import {useSelector, useDispatch} from 'react-redux';
import axiosInstance from 'app/networking/api';
import {SubscribeItem} from 'app/components';
import img from 'app/assets/img/h.png';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width: screenWidth} = Dimensions.get('window');

export function Subscribe({navigation}) {
  const [load, setLoad] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [plans, setPlans] = useState([]);
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);
  const [addCardModal, setAddCardModal] = useState(false);
  const [method, setMethod] = useState([]);
  let data = [
    {
      id: 6,
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
      id: 7,
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
      id: 8,
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
  let getFirstLog = async () => {
    let data = await AsyncStorage.getItem('firstLog');
    return JSON.parse(data);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setEntries(data);
    });
    return unsubscribe;
  }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
      getData();
      getCards();
    }, [navigation]),
  );

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.items}>
        <SubscribeItem
          id={item.id}
          key={index}
          img={item.img}
          title={item.title}
          subTitle={item.subTitle}
          price={item.price}
          currency={item.currency}
          on={item.on}
          off={item.off}
          navigation={navigation}
          onSubscribe={onSubscribe}
        />
      </View>
    );
  };

  const onSubscribe = async id => {
    if (method.length > 0) {
      setLoad(true);
      try {
        console.log(id);
        let firstLog = await getFirstLog();
        let formData = new FormData();
        formData.append('id', id);
        console.log(formData, 'formData');
        let res = await axiosInstance.post(`/subscribtion-to-plan`, {formData});
        // !firstLog
        //   ? navigation.replace('FirstLogin')
        //   : navigation.replace('TabNavigation');
        console.log(res, 'rrrrrrr');
        setLoad(false);
      } catch (error) {
        setLoad(false);
        console.log(error.response,'errr');
      }
    } else setAddCardModal(!addCardModal);
  };
  let getCards = async (id, ind) => {
    try {
      setLoad(true);
      let res = await axiosInstance.get(`/get-cards`);

      setMethod(
        res.data.sort(function (x, y) {
          return x.default == 1 ? -1 : y.default == 1 ? 1 : 0;
        }),
      );
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
      <AddNewCard
        isVisible={addCardModal}
        onClose={() => setAddCardModal(!addCardModal)}
        navigation={navigation}
        getDate={getCards}
      />
    </View>
  );
}
