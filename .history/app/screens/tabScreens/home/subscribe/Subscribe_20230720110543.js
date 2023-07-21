// import React, {useRef, useState, useEffect} from 'react';
// import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
// import {
//   View,
//   Text,
//   Dimensions,
//   StyleSheet,
//   TouchableOpacity,
//   Platform,
//   SafeAreaView,
// } from 'react-native';
// import { SubscribeItem } from 'app/components';

// const ENTRIES1 = [
//   {
//     title: 'Beautiful and dramatic Antelope Canyon',
//     subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//     illustration: 'https://i.imgur.com/UYiroysl.jpg',
//   },
//   {
//     title: 'Earlier this morning, NYC',
//     subtitle: 'Lorem ipsum dolor sit amet',
//     illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
//   },
//   {
//     title: 'White Pocket Sunset',
//     subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
//     illustration: 'https://i.imgur.com/MABUbpDl.jpg',
//   },
//   {
//     title: 'Acrocorinth, Greece',
//     subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//     illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
//   },
//   {
//     title: 'The lone tree, majestic landscape of New Zealand',
//     subtitle: 'Lorem ipsum dolor sit amet',
//     illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
//   },
// ];
// const {width: screenWidth} = Dimensions.get('window');

// export const Subscribe = props => {
//   const [entries, setEntries] = useState([]);
//   const carouselRef = useRef(null);

//   const goForward = () => {
//     carouselRef.current.snapToNext();
//   };

//   useEffect(() => {
//     setEntries(ENTRIES1);
//   }, []);

//   const renderItem = ({item, index}, parallaxProps) => {
//     return (
//       <View style={styles.item}>
//        <SubscribeItem
//        />
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Carousel
//         ref={carouselRef}
//         sliderWidth={screenWidth}
//         sliderHeight={screenWidth}
//         itemWidth={screenWidth - 60}
//         data={entries}
//         renderItem={renderItem}
//         hasParallaxImages={true}
//       />
//       <TouchableOpacity onPress={goForward}>
//         <Text>go to next slide</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     width: screenWidth - 60,
//     height: screenWidth - 60,
//   },
//   imageContainer: {
//     flex: 1,
//     marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
//     backgroundColor: 'white',
//     borderRadius: 8,
//   },
//   image: {
//     ...StyleSheet.absoluteFillObject,
//     resizeMode: 'cover',
//   },
// });

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';

import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorseItemComponent, LoadingModal, TabNaviTitle} from 'app/components';
import {useSelector, useDispatch} from 'react-redux';
import axiosInstance from 'app/networking/api';
import {SubscribeItem} from 'app/components';
const {width: screenWidth} = Dimensions.get('window');

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
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
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <SubscribeItem />
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
            data={entries}
            renderItem={renderItem}
            hasParallaxImages={true}
          />
        </ScrollView>
      </View>
      <LoadingModal visible={load} />
    </View>
  );
}
