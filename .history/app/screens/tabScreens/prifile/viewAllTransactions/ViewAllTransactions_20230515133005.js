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
import deleteItem from 'app/assets/img/delete.png';
import right from 'app/assets/img/right.png';
import filter from 'app/assets/img/filter.png';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {HeaderNavi, LoadingModal} from 'app/components';
import axiosInstance from 'app/networking/api';
import moment from 'moment';

export function ViewAllTransactions({navigation}) {
  const [load, setLoad] = useState(false);
  let [searchText, setSearchText] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
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
  }, [year, month]);

  useEffect(() => {
    if (searchText.length > 2) {
      let setTime = setTimeout(async () => {
        console.log(searchText);
        try {
          let response = await axiosInstance.get(`/suggest/${searchText}`);
          console.log(response.data);
          setHistory(response.data);
        } catch (e) {
          setError('Please try again later');
          setErrorVisable(true);
        }
      }, 1000);
      return () => {
        clearTimeout(setTime);
      };
    }
  }, [searchText]);


  let getDate = async () => {
    try {
      setLoad(true);
      let res = await axiosInstance.get(`/get-transactins/${year}/${month}`);
      setData(res.data);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.log(error.response);
    }
  };
  let getFilteredDate = async (start, end) => {
    try {
      setLoad(true);
      let res = await axiosInstance.get(`/filter-transactins/${start}/${end}`);
      setStartDate(start), setEndDate(end);
      setData(res.data);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.log(error.response);
    }
  };

  let nextMonths = () => {
    setMonth(Number(month) + 1);
    if (month === 12) {
      setMonth(Number(1));
      setYear(Number(year) + 1);
    }
  };

  let prevMonths = () => {
    setMonth(Number(month) - 1);
    if (month === 1) {
      setMonth(Number(12));
      setYear(Number(year) - 1);
    }
  };

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
          value={searchText}
          onChangeText={(t)=}
          placeholderTextColor={'rgba(25, 12, 4, 0.64)'}
        />
        <View style={styles.filterBtn}>
          {startDate && endDate ? (
            <View style={styles.filterView}>
              <Text style={styles.filterText}>
                Filter by {startDate}-{endDate}{' '}
              </Text>
              <TouchableOpacity
                style={styles.delView}
                onPress={() => {
                  setYear(moment().subtract(0, 'years').format('YYYY'));
                  setMonth(moment().subtract(0, 'months').format('MM'));
                  setEndDate('');
                  setStartDate('');
                  getDate();
                }}>
                <Image source={deleteItem} style={styles.del} />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.filterView}
              onPress={() =>
                navigation.navigate('TransactionFilter', getFilteredDate)
              }>
              <Text style={styles.filterText}>Filter by period </Text>
              <Image source={filter} style={styles.filterIc} />
            </TouchableOpacity>
          )}
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
                  <Text style={styles.dateText}>
                    {moment(item.created_at).format('DD/MM/YYYY')}
                  </Text>
                  <Text style={styles.transactionNumText} numberOfLines={1}>
                    UPI/2323232323/TRASANCTION
                  </Text>
                  <Text style={styles.transactionNumText}>
                    {moment(item.created_at).format('dddd')}
                  </Text>
                </View>
                <View style={styles.rightView}>
                  <Text style={styles.transactionPrice}>
                    ${item?.amount / 100}
                  </Text>
                  <Image source={right} style={styles.rigthT} />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.borderBtn} onPress={prevMonths}>
          <Text style={styles.borderText}>Previous month</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bgBtn} onPress={nextMonths}>
          <Text style={styles.bgText}>Next month</Text>
        </TouchableOpacity>
      </View>
      <LoadingModal visible={load} />
    </View>
  );
}
