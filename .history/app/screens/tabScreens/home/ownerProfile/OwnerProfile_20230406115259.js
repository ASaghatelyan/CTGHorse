import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Alert,
    TouchableOpacityBase,
  } from 'react-native';
  import React, {useRef, useState} from 'react'; 
  import {styles} from './style';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import StarRating from 'react-native-star-rating';
  import {HeaderNavi, HorseItemComponent} from 'app/components';
  import data from '../../home/src/data';
  

export  function OwnerProfile({navigation}) {
  return (
    <View style={styles.content}>
    <SafeAreaView />
    <HeaderNavi
      leftBtn={'My favorites'}
      leftOnPress={() => navigation.goBack()}
    />
    <ScrollView
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}>
      <TouchableOpacityBase style={styles.ownerView} onPress={()=>navigation.navigate('OwnerProfile')} >
            <Text style={styles.ownerText}>Owner</Text>
            <View style={styles.gFlex}>
              <View style={styles.picView}>
                <Image source={owner} style={styles.ownerImg} />
                <View>
                  <Text style={styles.nameText}>Jane Cooper</Text>
                  <Text style={styles.contactType}>Contact: Phone Number</Text>
                  <Text style={styles.nameText}>54646 646546 64</Text>
                  <StarRating
                    halfStarEnabled={true}
                    disabled={true}
                    maxStars={5}
                    rating={starCount}
                    selectedStar={rating => setStarCount(rating)}
                    emptyStar={require('app/assets/img/starE.png')}
                    fullStar={require('app/assets/img/starF.png')}
                    halfStar={require('app/assets/img/starH.png')}
                    starSize={20}
                    starStyle={styles.stars}
                  />
                </View>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:${phoneNumber}`)}>
                  <Image source={call} style={styles.callIc} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={chat} style={styles.chatIc} />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
    </ScrollView>
  </View>
  )
}