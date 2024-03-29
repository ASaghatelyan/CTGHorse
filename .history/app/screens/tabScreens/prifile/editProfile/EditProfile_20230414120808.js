import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import user from 'app/assets/img/noimg.png';
import edit from 'app/assets/img/editp.png';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StarRating from 'react-native-star-rating';
import {
  EditProfileInput,
  GButton,
  GeneralModal,
  HeaderNavi,
} from 'app/components';
import {useSelector} from 'react-redux';
import {ChooseImage} from 'app/components/imagePicker';
import axiosInstance from 'app/networking/api';

export function EditProfile({navigation}) {
  let userInfo = useSelector(state => state.userInfo);

  const [modalVisible, setModalVisible] = useState(false);
  const [confirmChanges, setConfirmChanges] = useState(false);
  const [name, setName] = useState(userInfo.name);
  const [address, setAddress] = useState(userInfo.address);
  const [phone, setPhone] = useState(userInfo.phone);
  const [email, setEmail] = useState(userInfo.email);
  const [img, setImg] = useState('');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const chekChanges = () => {
    if (
      name === userInfo.name &&
      address === userInfo?.address &&
      phone === userInfo?.phone &&
      email === userInfo?.email
    ) {
      navigation.goBack()
    } else {
      setConfirmChanges(!confirmChanges);
    }
  };

  let editIfo = async () => {
    try {
      let formData =FormData()
      

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.content}>
      <SafeAreaView />
      <HeaderNavi leftBtn={'Edit Profile'} leftOnPress={chekChanges} />
      <KeyboardAvoidingView behavior="padding">
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}>
          <View style={styles.editImg}>
            <TouchableOpacity
              style={styles.editView}
              onPress={() => {
                ChooseImage(async imageRes => {
                  setImg(imageRes.assets[0].uri);
                }, 'photo');
              }}>
              <Image source={img ? {uri: img} : user} style={styles.userImg} />
              <Image source={edit} style={styles.editIc} />
            </TouchableOpacity>
          </View>
          <EditProfileInput
            title="Name"
            onChange={t => {
              setName(t);
              setHasUnsavedChanges(true);
            }}
            value={name}
          />
          <EditProfileInput
            title="Address"
            onChange={t => {
              setAddress(t);
              setHasUnsavedChanges(true);
            }}
            value={address}
          />
          <EditProfileInput
            title="Phone number"
            onChange={t => {
              setPhone(t);
              setHasUnsavedChanges(true);
            }}
            value={phone}
          />
          <EditProfileInput
            title="Email"
            onChange={t => {
              setEmail(t);
              setHasUnsavedChanges(true);
            }}
            value={email}
          />
          <TouchableOpacity
            style={styles.changePass}
            onPress={() => navigation.navigate('ChangePassword')}>
            <Text style={styles.changePassText}>Change password</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              style={styles.deletAccount}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.deletAccountText}>Delete Profile</Text>
            </TouchableOpacity>
            <Text style={styles.infoText}>
              If you delete your account now, you lose all information in your
              profile
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.saveBtn}>
        <GButton btnName="Save Canges" />
      </View>
      <GeneralModal
        isVisible={modalVisible}
        title="Delete account"
        subTitle="Are you sure you want to delete your account?"
        infoText="All your data will be permanently deleted."
        btnText="Yes"
        borderBtnText="No"
        btns={false}
        onClose={() => setModalVisible(!modalVisible)}
      />
      <GeneralModal
        isVisible={confirmChanges}
        title="Unsaved Changes"
        subTitle="You have made changes."
        infoText="Do you want to save or discard them?"
        btnText="Save"
        borderBtnText="Discard changes"
        btns={false}
        onClose={() => setConfirmChanges(!confirmChanges)}
        onRightFunc={() => {
          setConfirmChanges(!confirmChanges);
        }}
        onLeftFunc={() => {
          setConfirmChanges(!confirmChanges);
          navigation.goBack();
        }}
      />
    </View>
  );
}
