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
import user from 'app/assets/img/userImg.jpeg';
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
import { useSelector } from 'react-redux';

export function EditProfile({navigation}) {
  let userInfo = useSelector(state => state.userInfo);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('Jaine');
  const [hasUnsavedChanges,setHasUnsavedChanges] = useState(false);
 
 
   
  return (
    <View style={styles.content}>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={'Edit Profile'}
        leftOnPress={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <View style={styles.editImg}>
          <TouchableOpacity style={styles.editView}>
            <Image source={user} style={styles.userImg} />
            <Image source={edit} style={styles.editIc} />
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView >
          <EditProfileInput
            title="Name"
            onChange={t => {
              let da =name
              console.log(name,t);
              setName(t)
                setHasUnsavedChanges(true)
            }}
            value={name}
          />
          <EditProfileInput title="Address" />
          <EditProfileInput title="Phone number" />
          <EditProfileInput title="Email" />
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
        </KeyboardAvoidingView>
      </ScrollView>
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
    </View>
  );
}
