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

export function HorseRegFourth(props) {
  
  let dispatch = useDispatch();
  let store = useSelector(state => state.horseRegister);
  let [data, setData] = useState([]);
  const [result, setResult] = useState([]);
  const deletItem = ind => {
    let arr = data.filter((item, index) => {
      console.log(ind, index);
      ind === index;
    });
    setData(arr);
  };
 console.log(data);
  return (
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
            props.chooseIm([imageRes.assets[0].uri]);
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
                    Size: {item.size}, Format: {item.format}
                  </Text>
                </View>
                <Image source={uplDone} style={styles.uplDone} />
                <TouchableOpacity
                  style={styles.deleteItemView}
                  onPress={() => deletItem(index)}>
                  <Image source={deleteItem} style={styles.deleteItem} />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}
