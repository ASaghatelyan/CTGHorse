import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import user from 'app/assets/img/userImg.jpeg';
import right from 'app/assets/img/right.png';
import cal from 'app/assets/img/calendar.png';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GButton, HeaderNavi} from 'app/components';

export function TransactionFilter({navigation, route}) {
  const [startDate, setStartDate] = useState('');
  const [endDate,setEndDate]=useState('')
  return (
    <View style={styles.content}>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={'View all transactions'}
        leftOnPress={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <View>
          <Text>Select the date</Text>
          <Text style={styles.selectedTitleText}>Start date</Text>
          <TouchableOpacity style={styles.calView}>
             <Text style={styles.selectedText}>{startDate? startDate:'Select start date'}</Text>
            <Image source={cal} style={styles.calendarIc} />
          </TouchableOpacity>
          <Text style={styles.selectedTitleText}>End date</Text>
          <TouchableOpacity style={styles.calView}>
          <Text style={[styles.selectedText , endDate && {color:'#190C04;'}]}>{endDate? endDate:'Select end date'}</Text>
             <Image source={cal} style={styles.calendarIc} />
          </TouchableOpacity>
        </View>
        <GButton
          btnName="Submit"
          handelMove={() => {
            navigation.goBack();
            route.params('ssss');
          }}
        />
      </ScrollView>
    </View>
  );
}
