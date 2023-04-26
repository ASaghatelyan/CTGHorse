import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import searchIc from 'app/assets/img/search.png';
import deleteIc from 'app/assets/img/delete.png';
import historIc from 'app/assets/img/history.png';
import {GlobalHeight} from 'app/constant/styleConstants';
import axiosInstance from 'app/networking/api';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export function SearchModal({onClose, isVisible}) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  let [searchText, setSearchText] = useState('');
let [data,setData]=useState([])
  useEffect(() => {
    if (searchText.length > 2) {
      let setTime = setTimeout(async () => {
        console.log(searchText);
        try {
          let response = await axiosInstance.get(
            `/search/${searchText}`,
          );
          console.log(response);
          setData(response.data.results);
        } catch (e) {
          setError('Please try again later');
          setErrorVisable(true);
        }
      }, 1000);
      return () => {
        clearTimeout(setTime);
      };
    }
  }, [searchText]);
  console.log(data);
  return (
    <Modal
      style={{backgroundColor: '#F5F5F5', margin: 0, flex: 1}}
      visible={isVisible}
      transparent={true}>
      <View
        style={[
          styles.firstView,
          {paddingTop: statusBarHeight + GlobalHeight(31)},
        ]}>
        <View style={styles.topView}>
          <View style={styles.inputView}>
            <Image style={styles.searchIc} source={searchIc} />
            <TextInput
              style={styles.searchInput}
              value={searchText}
              onChangeText={text => setSearchText(text)}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              setSearchText('');
              onClose()
            }}>
            <Text style={styles.calcelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor: 'rgba(219, 192, 147, 0.3)', flex: 1}}>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <TouchableOpacity style={styles.hisItem}>
              <View style={styles.nameView}>
                <Image source={historIc} style={styles.historyIc} />
                <Text style={styles.nameText}>
                  Lorem ipsum dolor sit amet consectetur.
                </Text>
              </View>
              <TouchableOpacity style={styles.delView}>
                <Image source={deleteIc} style={styles.delIc} />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        })}
      </View>
    </Modal>
  );
}
