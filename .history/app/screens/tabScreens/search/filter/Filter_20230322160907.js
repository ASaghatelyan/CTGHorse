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
        <FilterItem text="Color"  color={color}/>
        <FilterItem text="Sex" sex={sex}/>
        <FilterItem text="Height" height={height}/>
        <FilterItem text="Weight" weight={weight}/>
        <FilterItem text="Earnings" price={price}/>
        <FilterItem text="Breed" breed={breed}/>
        <FilterItem text="Training" breed={training}/>
        <FilterItem text="Discipline" discipline={discipline}/>
      </View>
    </View>
  );
}
