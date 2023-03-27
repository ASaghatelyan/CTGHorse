import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import searchIc from 'app/assets/img/search.png';
import deleteIc from 'app/assets/img/delete.png';
import historIc from 'app/assets/img/history.png';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export function SearchModal({onClose, isVisible}) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  return (
    <Modal
      style={{backgroundColor: '#F5F5F5', margin: 0, flex: 1}}
      visible={isVisible}
      transparent={true}>
      <View
        style={{
          backgroundColor: '#190C04',
          flex: 0.1,
          paddingTop: statusBarHeight + 31,
          paddingHorizontal: 15,
        }}>
        <View style={styles.topView}>
          <View style={styles.inputView}>
            <Image style={styles.searchIc} source={searchIc} />
            <TextInput style={styles.searchInput} />
          </View>

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.calcelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor: 'rgba(219, 192, 147, 0.3)', flex: 1}}>
        <TouchableOpacity style={styles.hisItem}>
          <View style={styles.nameView}>
            <Image source={historIc} style={styles.historyIc}/>
            <Text>Lorem ipsum dolor sit amet consectetur.</Text>
          </View>
          <Image source={deleteIc}/>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
