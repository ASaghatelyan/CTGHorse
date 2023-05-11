import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import user from 'app/assets/img/noimg.png';
import right from 'app/assets/img/right.png';
import added from 'app/assets/img/addCard.png';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AddNewCard, HeaderNavi, LoadingModal} from 'app/components';
import {useSelector} from 'react-redux';
import axiosInstance from 'app/networking/api';
import {PaymentIcon} from 'react-native-payment-icons';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Swipeable} from 'react-native-gesture-handler';
import deleteChat from 'app/assets/img/deletChat.png';

export function AccountInfo({navigation}) {
  let userHorseInfo = useSelector(state => state.userInfo);
  const [method, setMethod] = useState([]);
  const [addCardModal, setAddCardModal] = useState(false);
  const [load, setLoad] = useState(false);
  let row = [];
  let prevOpenedRow;
  console.log(userHorseInfo);
  let a = [1, 3, 5, 6, 7];
  useEffect(() => {
    getDate();
  }, []);

  let getDate = async () => {
    try {
      setLoad(true);
      let res = await axiosInstance.get(`/get-cards`);
      setMethod(res.data);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.log(error.response);
    }
  };

  let deletCard = async it => {
    try {
      setLoad(true);
      await axiosInstance.delete(`/delete-card/${it.item.db_id}`);
      setMethod([...method.filter((item, index) => index !== it.index)]);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.log(error.response);
    }
  };

  const renderItem = ({item, index}, onClick) => {
    const closeRow = index => {
      console.log('closerow');
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    const renderRightActions = (progress, dragX, onClick) => {
      return (
        <TouchableOpacity style={styles.deleteChatView} onPress={onClick}>
          <Image source={deleteChat} style={styles.deleteChat} />
        </TouchableOpacity>
      );
    };

    return (
      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, onClick)
        }
        onSwipeableOpen={() => {
          closeRow(index);
        }}
        ref={ref => (row[index] = ref)}
        rightOpenValue={-140}>
        <View style={styles.addItem}>
          <View style={styles.addLeftView}>
            <PaymentIcon
              style={{marginRight: 10}}
              type={item.brand.replace(' ', '-').toLowerCase()}
              width={40}
              height="20%"
            />
            <View>
              <Text style={styles.saveingText}>{item.brand}</Text>
              <Text style={styles.saveNumText}></Text>
              <Text style={styles.saveNumText}>
                {' '}
                ***** ***** **** {item.last4}
              </Text>
            </View>
          </View>
          {/* <Image source={right} style={styles.rigth} /> */}
        </View>
      </Swipeable>
    );
  };

  return (
    <View style={styles.content}>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={'Accounts'}
        leftOnPress={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <View style={styles.userInfo}>
          <View style={styles.information}>
            <Image
              source={
                userHorseInfo?.avatar ? {uri: userHorseInfo.avatar} : user
              }
              style={styles.userImg}
            />
            <View style={styles.infoTextView}>
              <Text style={styles.infoText}>{userHorseInfo?.name}</Text>
              <Text style={styles.infoText}>{userHorseInfo?.address}</Text>
            </View>
            <TouchableOpacity style={styles.statementView}>
              <Text style={styles.statementText}>View Statement</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.incomesBalance}>
            <Text style={styles.accountText}>Incomes</Text>
            <Text style={styles.priceText}>$2120122.32</Text>
          </View>
          <View style={styles.accountBalance}>
            <Text style={styles.accountText}>Outgoing</Text>
            <Text style={styles.priceText}>$2120122.32</Text>
          </View>
        </View>
        <View>
          <FlatList
            style={{}}
            contentContainerStyle={{}}
            showsVerticalScrollIndicator={false}
            data={method}
            renderItem={v =>
              renderItem(v, () => {
                deletCard(v);
              })
            }
            keyExtractor={item => item.id}
            // ListFooterComponent={<View style={{height: 40}} />}
          />
          <TouchableOpacity
            style={styles.addTextView}
            onPress={() => {
              setAddCardModal(!addCardModal);
            }}>
            <Text style={styles.addText}>+Add new</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rescentView}>
          <Text style={styles.recentText}>Recent Transactions</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewAllTransactions')}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transactionView}>
          {a.map((item, index) => {
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
      <LoadingModal visible={load} />
      <AddNewCard
        isVisible={addCardModal}
        onClose={() => setAddCardModal(!addCardModal)}
        navigation={navigation}
        getDate={getDate}
      />
    </View>
  );
}
