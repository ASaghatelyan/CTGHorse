import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export function SearchModal({onClose,isVisible}) {
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
          paddingTop: statusBarHeight,
        }}>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.cal}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: 'blue', flex: 1}}>
        <Text>asdfda</Text>
      </View>
    </Modal>
  );
}
