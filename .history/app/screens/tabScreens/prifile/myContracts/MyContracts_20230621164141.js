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
import show from 'app/assets/img/show.png';
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
  ];
  return (
    <View style={styles.content}>
      <View>
        <SafeAreaView />
        <HeaderNavi
          leftBtn={'My Contracts'}
          leftOnPress={() => navigation.goBack()}
        />
      </View>
      <View style={{paddingHorizontal: 16}}>
        {data.map((item, index) => {
          return (
            <ContractItem />
            <View style={styles.itemView}>
              <View style={styles.leftView}>
                <View
                  style={[
                    styles.cycleView,
                    item.status === 'in process' && {
                      backgroundColor: '#E9A13A',
                    },
                    item.status === 'refused' && {backgroundColor: '#FF2323'},
                  ]}
                />
                <View>
                  <Text
                    style={[
                      styles.statusText,
                      item.status === 'in process' && {color: '#E9A13A'},
                      item.status === 'refused' && {color: '#FF2323'},
                    ]}>
                    {item.status}!
                  </Text>
                  <Text style={styles.nameText}>{item.name}</Text>
                  <Text style={styles.dateText}>{item.date}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.showIcView}>
                <Image source={show} style={styles.showIc} />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
}