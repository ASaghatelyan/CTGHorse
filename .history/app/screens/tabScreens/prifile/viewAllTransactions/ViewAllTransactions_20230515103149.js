import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import user from 'app/assets/img/userImg.jpeg';
import right from 'app/assets/img/right.png';
import filter from 'app/assets/img/filter.png';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {HeaderNavi} from 'app/components';
import axiosInstance from 'app/networking/api';
import moment from 'moment';

export function ViewAllTransactions({navigation}) {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const [year, setYear] = useState(
    moment().subtract(0, 'years').format('YYYY'),
  );
  const [month, setMonth] = useState(
    moment().subtract(0, 'months').format('MM'),
  );
  let a = [1, 3, 5, 6, 7, 4, 5];
  let filterByDate = d => console.log(d);

  useEffect(() => {
    getDate();
  }, [year]);

  console.log(data);
  let getDate = async () => {
    try {
      setLoad(true);
      let res = await axiosInstance.get(`/get-transactins/${year}/${month}`);
      console.log(res, 'res');
      setData(res.data);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.log(error.response);
    }
  };

  let nextMonths = () => {
    setMonth(mo)
  };

  let prevMonths = () => {};
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
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={'rgba(25, 12, 4, 0.64)'}
        />
        <View style={styles.filterBtn}>
          <TouchableOpacity
            style={styles.filterView}
            onPress={() =>
              navigation.navigate('TransactionFilter', filterByDate)
            }>
            <Text style={styles.filterText}>Filter by period </Text>
            <Image source={filter} style={styles.filterIc} />
          </TouchableOpacity>
        </View>
        <Text style={styles.allText}>All Transactions</Text>
        <Text style={styles.monthText}>
          {moment()
            .month(month - 1)
            .format('MMMM')}
        </Text>
        <View style={styles.transactionView}>
          {data?.map((item, index) => {
            return (
              <TouchableOpacity style={styles.transactionItem}>
                <View>
                  <Text style={styles.dateText}>23/12/2022</Text>
                  <Text style={styles.transactionNumText} numberOfLines={1}>
                    UPI/2323232323/TRASANCTION
                  </Text>
                  <Text style={styles.transactionNumText}>Tuesday</Text>
                </View>
                <View style={styles.rightView}>
                  <Text style={styles.transactionPrice}>$10.09</Text>
                  <Image source={right} style={styles.rigthT} />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.borderBtn}>
          <Text style={styles.borderText}>Previous month</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bgBtn}>
          <Text style={styles.bgText}>Next month</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}