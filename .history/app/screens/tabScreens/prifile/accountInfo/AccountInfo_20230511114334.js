import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import user from 'app/assets/img/userImg.jpeg';
import right from 'app/assets/img/right.png';
import added from 'app/assets/img/addCard.png';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AddNewCard, HeaderNavi, LoadingModal} from 'app/components';
import {useSelector} from 'react-redux';
import axiosInstance from 'app/networking/api';
import {PaymentIcon} from 'react-native-payment-icons';
import { SwipeListView } from 'react-native-swipe-list-view';

export function AccountInfo({navigation}) {
  let userHorseInfo = useSelector(state => state.userInfo);
  const [method, setMethod] = useState([]);
  const [addCardModal, setAddCardModal] = useState(false);
  const [load, setLoad] = useState(false);

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
  console.log(method);

  let deletCard = async (cardId, ind) => {
    try {
      setLoad(true);
      await axiosInstance.delete(`/delete-card/${cardId}`);
      setMethod([...method.filter((item, index) => index !== ind)]);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.log(error.response);
    }
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
            <Image source={user} style={styles.userImg} />
            <View style={styles.infoTextView}>
              <Text style={styles.infoText}>Adrian Gonzalez</Text>
              <Text style={styles.infoText}>Monterrey,</Text>
              <Text style={styles.infoText}>Mexico</Text>
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
              <SwipeListView
            columnWrapperStyle={}
            data={method}
            renderItem={ (data, rowMap) => (
                 <TouchableOpacity
                style={styles.addItem}
                onPress={() => {
                  deletCard(data.item.db_id, index);
                }}>
                <View style={styles.addLeftView}>
                  <PaymentIcon
                    style={{marginRight: 10}}
                    type={data.item.brand.replace(' ', '-').toLowerCase()}
                    width={40}
                    height="20%"
                  />
                  <View>
                    <Text style={styles.saveingText}>{data.item.brand}</Text>
                    <Text style={styles.saveNumText}>91212192291221</Text>
                    <Text style={styles.saveNumText}>
                      {' '}
                      ***** ***** **** {data.item.last4}
                    </Text>
                  </View>
                </View>
                {/* <Image source={right} style={styles.rigth} /> */}
              </TouchableOpacity>
            )}
            renderHiddenItem={ (data, rowMap) => (
                <View style={styles.rowBack}>
                  
                    <TouchableOpacity style={styles.delBtnView}>
                      <Text style={styles.delBtn}>Delete</Text>
                    </TouchableOpacity>
                </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
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
