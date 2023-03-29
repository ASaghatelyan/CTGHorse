import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import filter from 'app/assets/img/filter.png';
import goToTop from 'app/assets/img/expand.png';
import {styles} from './style'; 


export   function ProfileScreen(props) {
  return (
    <View>
    <SafeAreaView />
    <View style={{paddingHorizontal: 16}}>
      
      <View style={styles.titleView}>
        <Text style={styles.filterCount}>Applied Filters:0</Text>
        <TouchableOpacity
          style={styles.filterView}
          onPress={() => props.navigation.navigate('Filter')}>
          <Text style={styles.filterText}>Filter</Text>
          <Image source={filter} style={styles.filterIc} />
        </TouchableOpacity>
      </View>
    </View>
    <ScrollView ref={scrollRef} contentContainerStyle={styles.itemContainer}>
     
    </ScrollView>
    <TouchableOpacity style={styles.bottomBtnView} onPress={onFabPress}>
      <Image source={goToTop} style={styles.expend} />
      <Text style={styles.goToTopText}>Go to top</Text>
    </TouchableOpacity>
   
  </View>
  )
}