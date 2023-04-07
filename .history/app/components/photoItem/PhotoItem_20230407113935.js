import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import camera from 'app/assets/img/camera.png';
import { ChooseImage } from '../imagePicker';
import { styles } from './style';

export function PhotoItem(props) {
  const [image, setImage] = useState('');
  console.log(props.item);
  return (
    <TouchableOpacity
      onPress={() => {
        ChooseImage(async imageRes => {
          setImage(imageRes.assets[0].uri);
          props.chooseIm(imageRes.assets[0].uri);
        }, 'photo');
      }}
      style={styles.itemsSmall}>
      <Image
        source={image ? {uri: image} : camera}
        style={
          image
            ? {width: 76, height: 70, borderRadius: 8}
            : {width: 16, height: 16}
        }
      />
    </TouchableOpacity>
  );
}
