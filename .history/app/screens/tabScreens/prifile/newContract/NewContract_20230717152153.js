import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  GButton,
  HeaderNavi,
  HorseItemComponent,
  SignatureModal,
} from 'app/components';
import {styles} from './style';
import Pdf from 'react-native-pdf';
import {useSelector, useDispatch} from 'react-redux';
import axiosInstance from 'app/networking/api';
import source from 'app/assets/files/contract.pdf';
import signatureIc from 'app/assets/img/singnature.png';

export function NewContract({navigation, route}) {
  let dispatch = useDispatch();
  const [singModal, setSingModal] = useState(false);
  let userInfos = useSelector(state => state.userInfo);
  const [userInfo, setUserInfo] = useState(userInfos);
  const [signature, setSignature] = useState('');
console.log();
  let sendinfo = async () => {
    try {
      if (signature) {
        if (userInfos.id === route.params.senderId) {
          let formData = new FormData();
          formData.append('id', route.params.notiId);
          formData.append('signature', signature);
          formData.append('user_id', route.params.senderId);
          formData.append('horse_id', route.params.contract.horse_id);
          formData.append('contract_id', route.params.contract.id);
          console.log('eee',formData);
          let res = await axiosInstance.post(`/contract-agreement`, formData);
        } else {
          let formData = new FormData();
          formData.append('id', route.params.notiId);
          formData.append('signature', signature);
          formData.append('user_id', route.params.senderId);
          formData.append('horse_id', route.params.contract.horse_id);
          console.log(formData,'ggggggg');
          let res = await axiosInstance.post(`/contract-agreement`, formData);
        }
        console.log('-------------------');
        setSignature('');
        navigation.goBack();
      } else alert('Please put your signature');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.content}>
      <View>
        <SafeAreaView />
        <HeaderNavi
          leftBtn={'New Contract'}
          leftOnPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <Pdf
            showsVerticalScrollIndicator={false}
            source={{uri: route.params.contract.contract}}
            onError={error => {
              console.log(error);
            }}
            onPressLink={async uri => {
              await Linking.openURL(`${uri}`);
            }}
            style={styles.pdf}
          />
        </View>
        <View style={styles.agreeView}>
          <View style={styles.singnatureView}>
            <TouchableOpacity
              style={styles.signatureIcView}
              onPress={() => setSingModal(!singModal)}>
              <Image source={signatureIc} style={styles.signatureIc} />
            </TouchableOpacity>
          </View>
          <GButton btnName="I Agree" handelMove={sendinfo} />
        </View>
      </ScrollView>
      <SignatureModal
        isVisible={singModal}
        onOK={async s => {
          setSignature(s);
        }}
        onCancel={() => setSingModal(!singModal)}
      />
    </View>
  );
}
