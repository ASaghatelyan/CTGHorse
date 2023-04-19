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
import {HorseItemComponent, TabNaviTitle} from 'app/components';
import data from './src/data';

export function HomeScreen({navigation}) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
useEffect(() => {
  let res = await axiosInstance.post(`/password-change`, {
    old_password: oldPass,
    new_password: pass,
    c_password: passConfirm,
  }); 

 
}, [ ])

  return (
    <View style={styles.content}>
      <Image source={topimg} style={styles.topImg} />
      <SafeAreaView />
      <TabNaviTitle naviName="Home" />
      <Text style={styles.title}>Featured Horses</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView contentContainerStyle={styles.generalView}>
          {data.map((item, index) => {
            return (
              <HorseItemComponent
                item={item}
                index={index}
                navigation={navigation}
              />
            );
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
