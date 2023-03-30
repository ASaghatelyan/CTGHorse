import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {HeaderNavi, HorseItemComponent} from 'app/components';
import {styles} from './style';
import topimg from 'app/assets/img/topimg.png';

export function ChangeHorseInfo({navigation, route}) {
 
  return (
    <View style={styles.content}>
      <View>
        <SafeAreaView />
        <HeaderNavi
          leftBtn={route.params.item.name}
          leftOnPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView contentContainerStyle={styles.generalView}>
        <Text style={styles.titleText}>Gallery</Text>
        <View>
          <ImageBackground source={topimg} style={styles.topimg}>
            <TouchableOpacity style={styles.chooseBtn}>
              <Text>Choose new profile picture</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
}
