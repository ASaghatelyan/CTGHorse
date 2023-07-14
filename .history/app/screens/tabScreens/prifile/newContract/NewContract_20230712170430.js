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
import RNFS from 'react-native-fs';
import ImgToBase64 from 'react-native-image-base64';

export function NewContract({navigation, route}) {
  let dispatch = useDispatch();
  const [singModal, setSingModal] = useState(false);
  let userInfos = useSelector(state => state.userInfo);
  const [userInfo, setUserInfo] = useState(userInfos);
  const [signature, setSignature] = useState('');
  let sendinfo = async () => {
    try {
      if (signature) {
        console.log(signature, 'ddd');
        let res = await axiosInstance.post(`/contract-agreement`, {
          id: route.params.notiId,
          signature: signature,
          user_id: route.params.senderId,
        });
        setSignature('');
        console.log(res, 'res');
      } else alert('Please put your signature');
    } catch (error) {
      console.log(error);
    }
  };

  console.log(route.params.senderId);
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
          <GButton btnName="I Agree" handelMove={getinfo} />
        </View>
      </ScrollView>
      <SignatureModal
        isVisible={singModal}
        onOK={async s => {
          setSignature(s);
          console.log(s, 'ssss');
          // let dataa = await RNFS.readFile(
          //   `${s}`,
          //   'base64',
          // ).then(res => {
          //   return res;
          // });
          // ImgToBase64.getBase64String(imageRes.assets[0].uri)
          //   .then(base64String => {
          //     data.avatar = `data:${imageRes.assets[0].type};base64,${base64String}`;
          //   })
          //   .catch(err => doSomethingWith(err));
          // // console.log(data)
        }}
        onCancel={() => setSingModal(!singModal)}
      />
    </View>
  );
}
