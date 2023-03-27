import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              placeholder="Search your issues                                      "
              keyboardShouldPersistTaps
              onChangeText={text =>
                this.props.chnageInputText(text.toLowerCase())
              }
            />
            <Image
              style={styles.imT}
              source={require('../assets/images/maglass1.png')}
            />
          </View>
          <TextInput style={styles.searchInput} />
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.calcelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor: 'rgba(219, 192, 147, 0.3)', flex: 1}}>
        <Text>asdfda</Text>
      </View>
    </Modal>
  );
}
