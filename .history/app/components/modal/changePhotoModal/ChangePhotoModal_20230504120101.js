import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useLayoutEffect, useRef, useState} from 'react';
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
  img,
  genImg,
  changeMainPic,
}) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const [mainImg, setMainImg] = useState();
  let [allImg, setAllImg] = useState(JSON.parse(JSON.stringify(img)));

  useLayoutEffect(() => {
    let arr = JSON.parse(JSON.stringify(img)); 
    setAllImg(arr);
    setMainImg(
      arr.filter((item, index) => {
        return item.main === 1;
      }),
    );
  }, []);

  let changePic = item => {
    let arr = allImg;
    arr.map((i, index) => {
      if (i.id === item.id) {
        i.main = 1;
      } else {
        i.main = 0;
      }
    });
    setAllImg([...arr]);
    setMainImg(
      arr.filter((item, index) => {
        return item.main === 1;
      }),
    );
  };
console.log('ddd');
  return (
    <Modal
      isVisible={isVisible}
      style={[
        styles.modalView,
        {
          paddingTop: statusBarHeight,
        },
      ]}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Gallery</Text>
      </View>
      <TouchableOpacity
        style={[styles.closeView, {top: statusBarHeight}]}
        onPress={() => {
          let arr = img;
          let filtered = arr?.filter((item, index) => {
            if (item.types === 'photos') {
              return item;
            }
          });
          setMainImg(
            filtered.filter((item, index) => {
              return item.main === 1;
            }),
          );
          setAllImg(filtered);
          onClose();
        }}>
        <Image source={close} style={styles.closeIc} />
      </TouchableOpacity>
      <ImageBackground
        source={{uri: mainImg?.[0]?.url}}
        style={styles.topimg}
        resizeMode="contain"
        borderTopLeftRadius={22}
        borderTopRightRadius={22}>
        <View style={styles.chooseBtn}>
          <Text style={styles.chooseBtnText}>Profile Picture</Text>
        </View>
      </ImageBackground>
      <View style={styles.container}>
        {img &&
          allImg?.map((item, index) => { 
            return (
              <TouchableOpacity
                onPress={() => changePic(item)}
                style={{marginBottom: 16}}>
                <Image source={{uri: item.url}} style={[styles.img]} />
                <Image
                  source={item.main === 1 ? unpic : pic}
                  style={styles.pic}
                />
                {/* <Image source={unpic} style={styles.pic}/> */}
              </TouchableOpacity>
            );
          })}
      </View>
      <View style={styles.addBtn}>
        <TouchableOpacity
          style={[styles.updView, {alignItems: 'center'}]}
          onPress={() => changeMainPic(mainImg[0]?.id, allImg)}>
          <Text style={styles.updText}>Update information</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
