import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import openIc from 'app/assets/img/open.png';
import LinearGradient from 'react-native-linear-gradient';
import {DropDownModal} from '../modal';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

import {useDispatch, useSelector} from 'react-redux';

export function DropDownItem(props) {
  let dispatch = useDispatch();
  let store = useSelector(state => state.horseRegister);
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [choosed, setChoosed] = useState(props.item ? props.item : '');
  const [date, setDate] = useState(store.date ? store.date : '');

  return (
    <View style={styles.gView}>
      <Text style={[styles.titleText, props.colorT]}>{props.title}</Text>
      { props.error && <Text style={styles.reqFields}>*</Text>}
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          props.date ? setOpen(true) : setModalVisible(!modalVisible);
        }}>
        <Text numberOfLines={1} style={[styles.openText, props.colorT]}>
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
          dispatch({
            type: 'SET_HORSEINFO',
            payload: {date: moment(`${date}`).format('MMM DD YYYY')},
          });
        }}
        mode="date"
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
}
