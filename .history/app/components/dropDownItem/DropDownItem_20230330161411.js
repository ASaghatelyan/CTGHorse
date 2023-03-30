import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import openIc from 'app/assets/img/open.png';
import LinearGradient from 'react-native-linear-gradient';
import {DropDownModal} from '../modal';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

export function DropDownItem(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [choosed, setChoosed] = useState('');
  const [date, setDate] = useState('');

  return (
    <View style={styles.gView}>
      <Text style={[styles.titleText]}>{props.title}</Text>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          props.date ? setOpen(true) : setModalVisible(!modalVisible);
        }}>
        <Text numberOfLines={1} style={styles.openText}>
          {props.date ? date : choosed}
        </Text>
        <Image source={openIc} style={styles.openIc} />
      </TouchableOpacity>
      <DropDownModal
        info={props.info}
        isVisible={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
        onAccept={d => {
          props.saveInfo(d);
          setChoosed(d);
          setModalVisible(!modalVisible);
        }}
      />
      <DatePicker
        modal
        open={open}
        date={new Date()}
        onConfirm={date => {
          setOpen(false);
          setDate(moment(`${date}`).format('MMM DD YYYY'));
        }}
        mode="date"
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
}
