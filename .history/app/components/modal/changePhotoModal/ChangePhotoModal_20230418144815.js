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

export function ChangePhotoModal({
  isVisible,
  title,
  infoText,
  btnText,
  onClose,
  img
}) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const scrollRef = useRef();
  let im = [1, 2, 3];
  return (
    <Modal
      isVisible={isVisible}
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
        <Text style={styles.title}>Gallery</Text>
      </View>
      <TouchableOpacity
        style={[styles.closeView, {top: statusBarHeight}]}
        onPress={onClose}>
        <Image source={close} style={styles.closeIc} />
      </TouchableOpacity >
      <ImageBackground
        source={topimg}
        style={styles.topimg}
        borderTopLeftRadius={22}
        borderTopRightRadius={22}>
        <View style={styles.chooseBtn}>
          <Text style={styles.chooseBtnText}>Profile Picture</Text>
        </View>
      </ImageBackground>
      <View style={styles.container}>
        {im.map((item, index) => {
          return (
            <TouchableOpacity>
              <Image source={topimg} style={[styles.img]} />
              <Image source={pic} style={styles.pic}/>
              {/* <Image source={unpic} style={styles.pic}/> */}
            </TouchableOpacity>
          );
        })}
      </View>
    </Modal>
  );
}
