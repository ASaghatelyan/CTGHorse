import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React,{useState} from 'react';
import {styles} from './style';
import show from 'app/assets/img/show.png';

export function ContractItem({status, name, date}) {
    const []
  return (
    <View style={styles.itemView}>
      <View style={styles.leftView}>
        <View
          style={[
            styles.cycleView,
            status === 'in process' && {
              backgroundColor: '#E9A13A',
            },
            status === 'refused' && {backgroundColor: '#FF2323'},
          ]}
        />
        <View>
          <Text
            style={[
              styles.statusText,
              status === 'in process' && {color: '#E9A13A'},
              status === 'refused' && {color: '#FF2323'},
            ]}>
            {status}!
          </Text>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.showIcView}>
        <Image source={show} style={styles.showIc} />
      </TouchableOpacity>
    </View>
  );
}
