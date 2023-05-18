import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  Linking,
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
import dfaultIc from 'app/assets/img/def.png';
import unDef from 'app/assets/img/undef.png';
import moment from 'moment';

export function AccountInfo({navigation}) {
  let userHorseInfo = useSelector(state => state.userInfo);
  const [earnsSpent, setEarnsSpent] = useState({e: 0, s: 0});
  const [method, setMethod] = useState([]);
  const [addCardModal, setAddCardModal] = useState(false);
  const [load, setLoad] = useState(false);
  const [lastTransaction, setLastTransaction] = useState([]);

  let row = [];
  let prevOpenedRow;

  let a = [1, 3, 5, 6, 7];
  useEffect(() => {
    getDate();
    getLastDate();
  }, []);

  let getDate = async () => {
    try {
      setLoad(true);
      let res = await axiosInstance.get(`/get-cards`);
      console.log(res);
      setMethod(
        res.data.sort(function (x, y) {
          return x.default == 1 ? -1 : y.default == 1 ? 1 : 0;
        }),
      );
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.log(error.response);
    }
  };

  let getLastDate = async () => {
    try {
      setLoad(true);
      let spents = await axiosInstance.get(`/spent`);
      let earns = await axiosInstance.get(`/earning`);
      setEarnsSpent({e: earns.data / 100, s: spents.data / 100});
      let res = await axiosInstance.get(`/last-transactins`);
      setLastTransaction(res.data);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.log(error.response);
    }
  };

  let deletCard = async id => {
    try {
      setLoad(true);
      await axiosInstance.delete(`/delete-card/${id}`);
      await getDate();
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.log(error.response);
    }
  };

  let setAsDefault = async id => {
    try {
      setLoad(true);
      await axiosInstance.put(`/make-card-default/${id}`);
      await getDate();
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
        <TouchableOpacity
          style={styles.deleteChatView}
          onPress={() => deletCard(item.db_id)}>
          <Image source={deleteChat} style={styles.deleteChat} />
        </TouchableOpacity>
      );
    };

    const rendeLeftActions = (progress, dragX, onClick, closeRow) => {
      return (
        <TouchableOpacity
          style={styles.dfaultIcView}
          onPress={() => {
            closeRow();
            setAsDefault(item.db_id);
          }}>
          {item.default === 1 && (
            <Image source={dfaultIc} style={styles.dfaultIc} />
            <Image source={unDef} style={styles.dfaultIc} />
          )}
          {/* <Text style={styles.dateText}>Default</Text> */}
        </TouchableOpacity>
      );
    };

    return (
      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, onClick, closeRow)
        }
        renderLeftActions={(progress, dragX) =>
          rendeLeftActions(progress, dragX, onClick, closeRow)
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

          {item.default === 1 && (
            <View style={styles.statementView}>
              <Text style={styles.statementText}>Default</Text>
            </View>
          )}
        </View>
      </Swipeable>
    );
  };

  const handleClick = link => {
    Linking.canOpenURL(link).then(supported => {
      if (supported) {
        Linking.openURL(link);
      } else {
        console.log("Don't know how to open URI: " + link);
      }
    });
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
            {/* <TouchableOpacity style={styles.statementView}>
              <Text style={styles.statementText}>View Statement</Text>
            </TouchableOpacity> */}
          </View>
          <View style={styles.incomesBalance}>
            <Text style={styles.accountText}>Incomes</Text>
            <Text style={styles.priceText}>${earnsSpent.e}</Text>
          </View>
          <View style={styles.accountBalance}>
            <Text style={styles.accountText}>Outgoing</Text>
            <Text style={styles.priceText}>${earnsSpent.s}</Text>
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
                return v;
                // deletCard(v);
              })
            }
            keyExtractor={item => item.id}
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
          {lastTransaction.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.transactionItem}
                onPress={() => handleClick(item.receipt_url)}>
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
                    ${item.amount / 100}
                  </Text>
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
