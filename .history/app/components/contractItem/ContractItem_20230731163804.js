import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import show from 'app/assets/img/show.png';

import {OpenPdfModal} from '../modal';
import moment from 'moment';

export function ContractItem({status, name, seller,buyer,date, info}) {
  const [showHide, setShowHide] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.itemView}>
      <View style={styles.leftView}>
        <View
          style={[
            styles.cycleView,
            status === 'In process' && {
              backgroundColor: '#E9A13A',
            },
            status === 'refused' && {backgroundColor: '#FF2323'},
          ]}
        />
        <View>
          <Text
            style={[
              styles.statusText,
              status === 'In process' && {color: '#E9A13A'},
              status === 'refused' && {color: '#FF2323'},
            ]}>
            {status}!
          </Text>
          <Text style={styles.nameText}>Seller: {seller}</Text>
          <Text style={styles.nameText}>Buyer: {buyer}</Text>
          <Text style={styles.dateText}>
            {moment(date).format('DD, MMM YYYY')}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.showIcView}
        onPress={() => setShowHide(!showHide)}>
        <Image source={show} style={styles.showIc} />
      </TouchableOpacity>
      <OpenPdfModal
        onCancel={() => setShowHide(!showHide)}
        isVisible={showHide}
        info={info}
      />
    </View>
  );
}
