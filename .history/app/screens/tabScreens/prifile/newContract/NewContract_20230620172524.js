import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HeaderNavi, HorseItemComponent, SignatureModal} from 'app/components';
import {styles} from './style';
import NoHorse from 'app/assets/img/nohorse.png';
import Pdf from 'react-native-pdf';
import {useSelector, useDispatch} from 'react-redux';
import axiosInstance from 'app/networking/api';

export function NewContract({navigation}) {
  let dispatch = useDispatch();
  const [singModal, setSingModal] = useState(false);
  let userInfos = useSelector(state => state.userInfo);
  const [userInfo, setUserInfo] = useState(userInfos);
  const [signature, setSignature] = useState('');
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
  console.log(signature);
  return (
    <View style={styles.content}>
      <View>
        <SafeAreaView />
        <HeaderNavi
          leftBtn={'New Contract'}
          leftOnPress={() => navigation.goBack()}
        />
      </View>
      <View>
        <View style={styles.container}>
          <Pdf
            showsVerticalScrollIndicator={false}
            source={source}
            onError={error => {
              console.log(error);
            }}
            onPressLink={async uri => {
              await Linking.openURL(`${uri}`);
            }}
            style={styles.pdf}
          />
        </View>
      </View>
      <SignatureModal
        isVisible={!singModal}
        onOK={s => setSignature(s)}
        onCancel={() => setSingModal(!singModal)}
      />
    </View>
  );
}
