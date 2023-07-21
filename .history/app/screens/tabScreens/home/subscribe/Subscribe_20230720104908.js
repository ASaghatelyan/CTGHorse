 
import React, {useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('screen');
const IMG_WIDTH = width * 0.75;
const IMG_HEIGHT = IMG_WIDTH * 1.45;

const img = [
  'https://images.pexels.com/photos/6346639/pexels-photo-6346639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/14519806/pexels-photo-14519806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/3257803/pexels-photo-3257803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/3352860/pexels-photo-3352860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/6445669/pexels-photo-6445669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/5760479/pexels-photo-5760479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/12905016/pexels-photo-12905016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/4214998/pexels-photo-4214998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/9203428/pexels-photo-9203428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1879864/pexels-photo-1879864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];
let data =[
    {
        img:'',
        tilte:'Lorem Ipsum',
        subTitle:'Lorem Ipsum is simply dummy text',
        price:'0.99',
        peiceType:'$',
        on:['To dowload the App',' Use as a horse management tool'],
        off:['Ability to buy or sell horses','Have sale horses featured on the app']
    }
]
const resources = img.map((image, index)=> ({
  key: String(index),
  photo: image
}))

export const Subscribe = () => {
  const scrollX = useRef(new Animated.Value(0)).current


  return (
    <SafeAreaView style={styles.container}>  
      <View >
      <Text style={styles.Text}>Animated Parallax Effect</Text>
        <Animated.FlatList
        data={resources}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * .7, 0, width * .7]
          })
          return (
            <View style={{width, justifyContent: "center", alignItems: "center"}}> 
            <View style={{borderRadius: 22 , borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.4)', shadowColor: '#000', shadowOpacity: 0.6, shadowRadius: 20, shadowOffset: {width: 0, height: 0},}}>
            <View style={{width: IMG_WIDTH, borderRadius: 22, height: IMG_HEIGHT, overflow: "hidden", alignItems: "center", }}>
            <Animated.Image
            source={{uri: item.photo}}
            style={{width: IMG_WIDTH, height: IMG_HEIGHT, resizeMode: "cover", transform: [ {translateX}]}}
            />
            </View>
           </View>
           </View>

          )
        }}

        />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: "#000", 
    fontSize: 20, 
    paddingTop: 20,
    fontWeight: "900", 
    textAlign: "center", 
  }
});
import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

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
const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = props => {
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
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goForward}>
        <Text>go to next slide</Text>
      </TouchableOpacity>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
