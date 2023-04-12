import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import upl from 'app/assets/img/upl.png';
import file from 'app/assets/img/file.png';
import deleteItem from 'app/assets/img/close.png';
import uplDone from 'app/assets/img/fileDone.png';
import camera from 'app/assets/img/camera.png';
import uplFileIc from 'app/assets/img/uplfileIc.png';
import {ChooseCamers} from 'app/components/imagePicker';
import FilePicker from 'app/components/filePicker/FilePicker';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';
import {useDispatch, useSelector} from 'react-redux';
import {BottomBtn} from 'app/components/bottomBtn';
import axiosInstance from 'app/networking/api';

export function HorseRegFourth({onNextPrev, percentage, navigation}) {
  let dispatch = useDispatch();
  let store = useSelector(state => state.horseRegister);
  let userId = useSelector(state => state.userInfo.id);
  let [data, setData] = useState(store.doc ? store.doc : []);
  const [result, setResult] = useState([]);

  const remove = i => {
    const arr = [...data];
    setData(arr.filter((item, index) => index !== i));
    dispatch({
      type: 'SET_HORSEINFO',
      payload: {doc: [...arr.filter((item, index) => index !== i)]},
    });
  };

  const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  function niceBytes(x) {
    let l = 0,
      n = parseInt(x, 10) || 0;

    while (n >= 1024 && ++l) {
      n = n / 1024;
    }
    return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l];
  }

  let goBack = () => {
    onNextPrev(prev => prev - 25);
  };
console.log(store);
  let formData = new FormData();
  formData.append('user_id', userId);
  formData.append('name', store.name);
  formData.append('registration_number', store.regNum);
  formData.append('date_of_birth', store.date);
  formData.append('price', store.price);
  formData.append('sex', store.sex);
  formData.append('height', store.height);
  formData.append('weight', store.weight);
  formData.append('color', store.color);
  formData.append('discipline', store.discipline);
  formData.append('training', store.training);
  formData.append('earnings', store.earnings);
  formData.append('main_photo', store);
  formData.append('secondary_photos', store);
  formData.append('videos', store);
  formData.append('documents', store);
  formData.append('sire', store);
  formData.append('dam', store);
  formData.append('produced_earnings', store);
  formData.append('condition', store);
  // formData.append(`image`, {
  //   name: `image.jpg`,
  //   uri: `${img}`,
  //   type: 'image/jpeg',
  // });

  let next = async () => {
    try {
      let res = await axiosInstance.post(`/add-horse`, formData);
      // dispatch({
      //   type: 'RESET_HORSEINFO',
      //   payload: {},
      // });
      // navigation.replace('HorseRegComplite')
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.gView}>
      <View style={styles.container}>
        <Image source={upl} style={styles.uplIc} />
        <TouchableOpacity
          style={styles.openItemView}
          onPress={async () => {
            try {
              let files = await DocumentPicker.pickMultiple({
                type: [
                  DocumentPicker.types.images,
                  DocumentPicker.types.pdf,
                  DocumentPicker.types.plainText,
                  DocumentPicker.types.video,
                  ...Platform.select({
                    ios: [
                      'com.microsoft.word.doc',
                      'com.microsoft.excel.xls',
                      'com.microsoft.powerpoint.​ppt',
                      'org.openxmlformats.wordprocessingml.document',
                      'org.openxmlformats.spreadsheetml.sheet',
                      'org.openxmlformats.presentationml.presentation',
                      'org.openxmlformats.presentationml.slideshow',
                    ],
                    android: ['application/*'],
                  }),
                ],
              });
              setData([...data, ...files]);
              dispatch({
                type: 'SET_HORSEINFO',
                payload: {doc: [...data, ...files]},
              });
            } catch (e) {}
          }}>
          <Image source={file} style={styles.fileIc} />
          <Text style={styles.openItemText}>Open Files</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.openItemView}
          onPress={() => {
            ChooseCamers(async imageRes => {
              setImage(imageRes.assets[0].uri);
              chooseIm([imageRes.assets[0].uri]);
            }, 'photo');
          }}>
          <Image source={camera} style={styles.fileIc} />
          <Text style={styles.openItemText}>Open Camera</Text>
        </TouchableOpacity>
        {data.length > 0 && (
          <View style={styles.uplView}>
            <Text style={styles.title}>Uploading</Text>
            {data.map((item, index) => {
              return (
                <View style={styles.uplFileView} key={index}>
                  <Image source={uplFileIc} style={styles.uplFileIc} />
                  <View>
                    <Text numberOfLines={1} style={styles.itemTitle}>
                      {item.name}
                    </Text>
                    <Text numberOfLines={1} style={styles.itemInfo}>
                      {/* Size: {Math.floor(item.size / Math.pow(1024, 1))} KB, */}
                      Size: {niceBytes(item.size)}
                    </Text>
                    <Text numberOfLines={1} style={styles.itemInfo}>
                      Format: {item.name.slice(-3)}
                    </Text>
                  </View>
                  <Image source={uplDone} style={styles.uplDone} />
                  <TouchableOpacity
                    style={styles.deleteItemView}
                    onPress={() => remove(index)}>
                    <Image source={deleteItem} style={styles.deleteItem} />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        )}
      </View>

      <BottomBtn
        nameL="Back"
        nameR="Next"
        onChangeL={goBack}
        onChangeR={next}
        styles={styles.bottomBtn}
      />
    </View>
  );
}
