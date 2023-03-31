import {View, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';
import React, {useRef} from 'react';
import Modal from 'react-native-modal';
import close from 'app/assets/img/close.png';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { PassUpdated } from 'app/screens';
import topimg from 'app/assets/img/topimg.png';

export function ChangePhotoModal({
  isVisible,
  title,
  infoText,
  btnText,
  onClose,
}) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const scrollRef = useRef();
  return (
    <Modal
      isVisible={isVisible} 
      style={{
        height: '100%',
        backgroundColor: '#fff',
        margin: 0,
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingTop:statusBarHeight
      }}>
      <TouchableOpacity style={[styles.closeView,{top:statusBarHeight}]} onPress={onClose}>
        <Image source={close} style={styles.closeIc} />
      </TouchableOpacity>
      <Text style={styles.title}>Gallery</Text>
      <View style={styles.container}>

      <ImageBackground
          source={topimg}
          style={styles.topimg}
          borderTopLeftRadius={22}
          borderTopRightRadius={22}>
          <TouchableOpacity style={styles.chooseBtn}>
            <Text style={styles.chooseBtnText}>Choose new profile picture</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </Modal>
  );
}
