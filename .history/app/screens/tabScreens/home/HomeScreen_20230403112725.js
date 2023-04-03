import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import topimg from 'app/assets/img/topimg.png';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorseItemComponent} from 'app/components';
import data from './src/data';

export function HomeScreen(props) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  return (
    <View style={styles.content}>
      <Image source={topimg} style={styles.topImg} />
      
      <SafeAreaView />
      <Text style={styles.title}>Featured Horses</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView
          contentContainerStyle={styles.generalView}>
          {data.map((item, index) => {
            return (
              <HorseItemComponent item={item} index={index} props={props} />
            );
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
