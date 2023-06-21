import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HeaderNavi, HorseItemComponent} from 'app/components';
import {styles} from './style';
import NoHorse from 'app/assets/img/nohorse.png';
import user from 'app/assets/img/noimg.png';
import email from 'app/assets/img/email.png';
import phone from 'app/assets/img/phone.png';
import data from '../../home/src/data';
import {useSelector, useDispatch} from 'react-redux';
import axiosInstance from 'app/networking/api';

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
    },
    {
      name: 'Jane Cooper - Masha Rasputina ',
      date: '21.06.2023 11:25 AM',
      status: 'in process',
    },
    {
      name: 'Jane Cooper - Masha Rasputina ',
      date: '21.06.2023 11:25 AM',
      status: 'refused',
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
      <View style={{ paddingHorizontal:16}}>
        {data.map((item, index) => {
          return (
            <View>
              <View>
                <View  />
                <View>
                  <Text style={[styles.statusText,item.status==='in process' {color:''}&&item.status==='reused']}>{item.status}!</Text>
                  <Text >{item.name}</Text>
                  <Text>{item.date}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
