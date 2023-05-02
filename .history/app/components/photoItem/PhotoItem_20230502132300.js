import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import camera from 'app/assets/img/camera.png';
import { ChooseImage } from '../imagePicker';
import { styles } from './style';

export function PhotoItem(props) {
  const [image, setImage] = useState(''); 
  return (
    <TouchableOpacity
      onPress={() => {
        ChooseImage(async imageRes => { 
          props.chooseIm(imageRes.assets[0]);
        }, 'photo');
      }}
      style={styles.itemsSmall}>
      <Image
        source={props.path ? {uri: props.path} : camera}
        style={
          props.path
            ? {width: 76, height: 70, borderRadius: 8}
            : {width: 16, height: 16}
        }
        resizeMode='cover'
      />
    </TouchableOpacity>
  );
}
