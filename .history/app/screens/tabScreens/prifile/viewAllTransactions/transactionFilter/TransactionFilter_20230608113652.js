import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import cal from 'app/assets/img/calendar.png';
import {styles} from './style';
import {CalendarModal, GButton, HeaderNavi} from 'app/components';
import on from 'app/assets/img/pic.png'
import off from 'app/assets/img/unpic.png'

export function TransactionFilter({navigation, route}) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [modatlVisible, setModalVisible] = useState(false);
  const [modatlVisibleEnd, setModalVisibleEnd] = useState(false);
  const [choosed, setChoosed] = useState('All');
  const status = ['All', 'Completed', 'Incompleted'];
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
        {/* <Sign onOK={(a)=>console.log(a)}/> */}
        <View style={styles.topView}>
          <Text style={styles.titleText}>Select the date</Text>
          <Text style={styles.selectedTitleText}>Start date</Text>
          <TouchableOpacity
            style={styles.calView}
            onPress={() => setModalVisible(!modatlVisible)}>
            <Text
              style={[styles.selectedText, startDate && {color: '#190C04;'}]}>
              {startDate ? startDate : 'Select start date'}
            </Text>
            <Image source={cal} style={styles.calendarIc} />
          </TouchableOpacity>
          <Text style={styles.selectedTitleText}>End date</Text>
          <TouchableOpacity
            style={styles.calView}
            onPress={() => setModalVisibleEnd(!modatlVisibleEnd)}>
            <Text style={[styles.selectedText, endDate && {color: '#190C04;'}]}>
              {endDate ? endDate : 'Select end date'}
            </Text>
            <Image source={cal} style={styles.calendarIc} />
          </TouchableOpacity>
          <Text style={styles.titleText}>Select the status</Text>
          {status.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => setChoosed(item)} key={index} style={styles.statusItem}>
                <Image source={choosed===item ?off:on} />
                <Text style={styles.statusText}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <GButton
          btnName="Submit"
          handelMove={() => {
            if (startDate && endDate) {
              route.params(startDate, endDate);
              navigation.goBack();
            }
          }}
        />
      </ScrollView>
      <CalendarModal
        isVisible={modatlVisible}
        onClose={() => {
          setModalVisible(!modatlVisible);
        }}
        onNavi={a => {
          setStartDate(a.dateString);
          setModalVisible(!modatlVisible);
        }}
        choose={true}
        onDateInfo={() => {
          setOpen(true);
        }}
        data={new Date()}
      />
      <CalendarModal
        isVisible={modatlVisibleEnd}
        onClose={() => {
          setModalVisibleEnd(!modatlVisibleEnd);
        }}
        onNavi={a => {
          setEndDate(a.dateString);
          setModalVisibleEnd(!modatlVisibleEnd);
        }}
        choose={true}
        onDateInfo={() => {
          setOpen(true);
        }}
        data={new Date()}
      />
    </View>
  );
}
