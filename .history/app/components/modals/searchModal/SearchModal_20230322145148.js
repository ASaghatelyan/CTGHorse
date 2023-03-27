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

export function SearchModal(props) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  return (
    <Modal
      style={{backgroundColor: '#F5F5F5', margin: 0}}
      visible={props.isVisible}
      transparent={true}>
      <View style={{position: 'absolute', top: statusBarHeight}}>
        <TouchableOpacity >
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
