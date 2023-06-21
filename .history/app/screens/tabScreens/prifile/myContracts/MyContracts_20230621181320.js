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

  let getinfo = async () => {
    try {
      let res = await axiosInstance.get(`/get-user-details`, {});
      console.log(res.data.userData[0]);
      dispatch({
        type: 'SET_USERINFO',
        payload: res.data.userData[0],
      });
      setUserInfo(res.data.userData[0]);
    } catch (error) {
      console.log(error);
    }
  };

  let data = [
    {
      name: 'Jane Cooper - Masha Rasputina ',
      date: '21.06.2023 11:25 AM',
      status: 'approved',
      pdf: pdfFile,
    },
    {
      name: 'Jane Cooper - Masha Rasputina ',
      date: '21.06.2023 11:25 AM',
      status: 'in process',
      pdf: pdfFile,
    },
    {
      name: 'Jane Cooper - Masha Rasputina ',
      date: '21.06.2023 11:25 AM',
      status: 'refused',
      pdf: pdfFile,
    },
    {
      name: 'Jane Cooper - Masha Rasputina ',
      date: '21.06.2023 11:25 AM',
      status: 'approved',
      pdf: pdfFile,
    },
    {
      name: 'Jane Cooper - Masha Rasputina ',
      date: '21.06.2023 11:25 AM',
      status: 'in process',
      pdf: pdfFile,
    },
    {
      name: 'Jane Cooper - Masha Rasputina ',
      date: '21.06.2023 11:25 AM',
      status: 'refused',
      pdf: pdfFile,
    },
    {
      name: 'Jane Cooper - Masha Rasputina ',
      date: '21.06.2023 11:25 AM',
      status: 'approved',
      pdf: pdfFile,
    },
    {
      name: 'Jane Cooper - Masha Rasputina ',
      date: '21.06.2023 11:25 AM',
      status: 'in process',
      pdf: pdfFile,
    },
    {
      name: 'Jane Cooper - Masha Rasputina ',
      date: '21.06.2023 11:25 AM',
      status: 'refused',
      pdf: pdfFile,
    },
  ];
  return (
    <View style={styles.content}> 
        <SafeAreaView />
        <HeaderNavi
          leftBtn={'My Contracts'}
          leftOnPress={() => navigation.goBack()}
        />
      
      <ScrollView style={{paddingHorizontal: 16}} contentContainerStyle={{flexGrow:1}}>
        {data.map((item, index) => {
          return <ContractItem status={item.status} 
          name={item.name}
          date={item.date}
          info={item.pdf}
          />;
        })}
      </ScrollView>
    </View>
  );
}
