 
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
  
  export function Notifications({navigation}) {
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
  
    return (
      <View style={styles.content}>
        <View>
          <SafeAreaView />
          <HeaderNavi
            leftBtn={'Notification'}
            leftOnPress={() => navigation.goBack()}
          />
        </View>
        <View style={{paddingHorizontal:12}}>
            <TouchableOpacity>
                <Text>You havw</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
  