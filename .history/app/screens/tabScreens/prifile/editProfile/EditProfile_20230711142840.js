import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useRef, useState} from 'react';
import user from 'app/assets/img/noimg.png';
import edit from 'app/assets/img/editp.png';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StarRating from 'react-native-star-rating';
import {
  EditProfileInput,
  ErrorModal,
  GButton,
  GeneralModal,
  HeaderNavi,
  LoadingModal,
} from 'app/components';
import {useDispatch, useSelector} from 'react-redux';
import {ChooseImage} from 'app/components/imagePicker';
import axiosInstance from 'app/networking/api';

export function EditProfile({navigation}) {
  let dispatch = useDispatch();
  let userInfo = useSelector(state => state.userInfo);
  const [loading, setLoading] = useState(false);
  const [errModal, setErrModal] = useState(false);
  const [err, setErr] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmChanges, setConfirmChanges] = useState(false); 
  const [city, setCity] = useState(userInfo.city === 'null' ? '' : userInfo.city,);
  const [state, setState] = useState(userInfo.name === 'null' ? '' : userInfo.name,);
  const [zipCode, setZipCode] = useState('');
  const [name, setName] = useState(
    userInfo.name === 'null' ? '' : userInfo.name,
  );
  const [surname, setSurname] = useState(
    userInfo.surname === 'null' ? '' : userInfo.surname,
  );
  const [address, setAddress] = useState(
    userInfo.address === 'null' ? null : userInfo.address,
  );
  const [phone, setPhone] = useState(
    userInfo.phone === 'null' ? null : userInfo.phone,
  );
  const [email, setEmail] = useState(userInfo.email ? userInfo.email : '');
  const [img, setImg] = useState(userInfo.avatar ? userInfo.avatar : '');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const chekChanges = () => {
    if (
      name === userInfo.name && surname === userInfo.surname &&
      (address === null ? '' : address) ===
        (userInfo?.address === 'null' ? '' : userInfo?.address) &&
      (phone === null ? '' : phone) ===
        (userInfo?.phone === 'null' ? '' : userInfo?.phone)
    ) {
      navigation.goBack();
    } else {
      setConfirmChanges(!confirmChanges);
    }
  };

  let editInfo = async () => {
    setLoading(true);
    try {
      let formData = new FormData();
      formData.append('name', name);
      formData.append('surname', surname);
      formData.append('address', address);
      formData.append('phone', phone);
      formData.append('city', city);
      formData.append('state', state);
      formData.append('zip', zipCode);
      typeof img === 'object' &&
        formData.append(`avatar`, {
          name: img.fileName,
          uri: img.uri,
          type: img.type,
        });
      let res = await axiosInstance.post(`/edit-user-profile`, formData);
      dispatch({
        type: 'SET_USERINFO',
        payload: {...res.data.user.user, horses: res.data.user.horses},
      });
      setLoading(false);
      navigation.goBack();
    } catch (error) {
      console.log(error.response);

      setLoading(false);
    }
  };

  let onDelet = async () => {
    try {
      await axiosInstance.delete(`/delete-user`);
      AsyncStorage.removeItem('token');
      setModalVisible(!modalVisible);
      navigation.replace('SignIn');
    } catch (error) {
      console.log(error);
    }
  };
console.log(userInfo,'userInfo');
  return (
    <View style={styles.content}>
      <SafeAreaView />
      <HeaderNavi leftBtn={'Edit Profile'} leftOnPress={chekChanges} />
      <KeyboardAvoidingView
        behavior={Platform === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}>
          <View style={styles.editImg}>
            <TouchableOpacity
              style={styles.editView}
              onPress={() => {
                ChooseImage(async imageRes => {
                  setImg(imageRes.assets[0]);
                }, 'photo');
              }}>
              <Image
                source={img ? {uri: img.uri ? img.uri : img} : user}
                style={styles.userImg}
              />
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
            title="Surname"
            onChange={t => {
              setSurname(t);
              setHasUnsavedChanges(true);
            }}
            value={surname}
          />
          <EditProfileInput
            title="Street address"
            onChange={t => {
              setAddress(t);
              setHasUnsavedChanges(true);
            }}
            value={address}
          />
          <EditProfileInput
            title="City"
            onChange={t => {
              setCity(t);
              setHasUnsavedChanges(true);
            }}
            value={city}
          />
          <EditProfileInput
            title="State"
            onChange={t => {
              setState(t);
              setHasUnsavedChanges(true);
            }}
            value={state}
          />
          <EditProfileInput
            title="Zip code"
            onChange={t => {
              setZipCode(t);
              setHasUnsavedChanges(true);
            }}
            value={zipCode}
          />
          <EditProfileInput
            title="Phone number"
            onChange={t => {
              setPhone(t);
              setHasUnsavedChanges(true);
            }}
            value={phone}
            keyType="phone-pad"
          />
          <EditProfileInput
            title="Email"
            onChange={t => {
              setEmail(t);
              setHasUnsavedChanges(true);
            }}
            editable={false}
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
        <GButton btnName="Save Changes" handelMove={editInfo} />
      </View>
      <GeneralModal
        isVisible={modalVisible}
        title="Delete account"
        subTitle="Are you sure you want to delete your account?"
        infoText="All your data will be permanently deleted."
        btnText="Yes"
        borderBtnText="No"
        btns={false}
        onLeftFunc={() => setModalVisible(!modalVisible)}
        onRightFunc={onDelet}
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
      <LoadingModal visible={loading} />
      <ErrorModal
        isVisible={errModal}
        err={err}
        onClose={() => setErrModal(!errModal)}
      />
    </View>
  );
}
