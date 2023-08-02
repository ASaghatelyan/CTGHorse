import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ContractItem, HeaderNavi, HorseItemComponent} from 'app/components';
import {styles} from './style';
import NoHorse from 'app/assets/img/nohorse.png';
import {useSelector, useDispatch} from 'react-redux';
import axiosInstance from 'app/networking/api';
import pdfFile from 'app/assets/files/contract.pdf';
export function MyContracts({navigation}) {
  let dispatch = useDispatch();
  let userInfos = useSelector(state => state.userInfo);
  const [userInfo, setUserInfo] = useState(userInfos);
  const [data, setData] = useState([]);
  let getinfo = async () => {
    try {
      let res = await axiosInstance.get(`/get-all-contracts`, {});
      console.log(res.data);

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getinfo();
    return () => {};
  }, []);

  return (
    <View style={styles.content}>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={'My Contracts'}
        leftOnPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.itemView}>
        {data.map((item, index) => {
          return (
            <ContractItem
              status={item.status}
              seller={item.seller}
              buyer={item.seller}
              date={item.created_at}
              info={item.pdf}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
