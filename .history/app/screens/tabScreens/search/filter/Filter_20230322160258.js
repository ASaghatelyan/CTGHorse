import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {FilterItem, HeaderNavi} from 'app/components';
import {styles} from './style';
import {
  breed,
  sex,
  height,
  weight,
  color,
  price,
  training,
  discipline,
} from 'app/constant/filterData';

export function Filter(props) {
  return (
    <View>
      <SafeAreaView />
      <HeaderNavi
        leftBtn="Filter"
        rightBtn="Clear all"
        leftOnPress={() => props.navigation.goBack()}
      />
      <View style={styles.itemsView}>
        <FilterItem text="Color" />
        <FilterItem text="Sex" sex={}/>
        <FilterItem text="Height" />
        <FilterItem text="Weight" />
        <FilterItem text="Earnings" />
        <FilterItem text="Breed" />
        <FilterItem text="Discipline" />
      </View>
    </View>
  );
}
