import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useRef} from 'react';
import Modal from 'react-native-modal';
import close from 'app/assets/img/close.png';
import unpic from 'app/assets/img/unpic.png';
import pic from 'app/assets/img/pic.png';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import topimg from 'app/assets/img/topimg.png';


export function UpdatePassModal({
  isVisible,
  title,
  infoText,
  btnText,
  onClose,
}) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const scrollRef = useRef();
  let im = [1, 2, 3];
  return (
    <Modal
      isVisible={true}
      style={{
        height: '100%',
        backgroundColor: '#fff',
        margin: 0,
        paddingHorizontal: 15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: statusBarHeight,
      }}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Change password</Text>
        <Text style={styles.title}>
          Your password has been changed succesfully
        </Text>
      </View>
    </Modal>
  );
}
