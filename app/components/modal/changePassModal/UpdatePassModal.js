import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useRef} from 'react';
import Modal from 'react-native-modal';
import logo from 'app/assets/img/chpass.png';
import unpic from 'app/assets/img/unpic.png';
import pic from 'app/assets/img/pic.png';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import topimg from 'app/assets/img/topimg.png';
import { GButton } from 'app/components/gButton';


export function UpdatePassModal({
  isVisible,
  title,
  infoText,
  btnText,
  onClose,
  navigation
}) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const scrollRef = useRef();
  let im = [1, 2, 3];
  return (
    <Modal
      isVisible={isVisible}
      style={{
        // height: '30%',
        backgroundColor: '#fff',
        margin: 0,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: statusBarHeight,

      }}>
      <View style={styles.titleView}>
        <Image source={logo} style={styles.log}/>
        <Text style={styles.title}>Change password</Text>
        <Text style={styles.subTitle}>
          Your password has been changed succesfully
        </Text>
        <View style={styles.btnView}>
          <GButton btnName="Ok" handelMove={()=>navigation.goBack()} />
        </View>
      </View>
    </Modal>
  );
}
