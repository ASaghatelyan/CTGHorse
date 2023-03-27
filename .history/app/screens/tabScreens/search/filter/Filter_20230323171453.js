import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
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

export function Filter({navigation}) {
  let [colors, setColors] = useState([]);
  console.log(colors, 'ccccc');
  return (
    <View>
      <SafeAreaView />
      <HeaderNavi
        leftBtn="Filter"
        rightBtn="Clear all"
        leftOnPress={() => navigation.goBack()}
      />
      <View style={styles.itemsView}>
        <FilterItem
          text="Color"
          info={color}
          navigation={navigation}
          saveInfo={d => {
            let data = colors
            setColors([...colors, d]);
          }}
        />
        <FilterItem text="Sex" info={sex} navigation={navigation} />
        <FilterItem text="Height" info={height} navigation={navigation} />
        <FilterItem text="Weight" info={weight} navigation={navigation} />
        <FilterItem text="Earnings" info={price} navigation={navigation} />
        <FilterItem text="Breed" info={breed} navigation={navigation} />
        <FilterItem text="Training" info={training} navigation={navigation} />
        <FilterItem
          text="Discipline"
          info={discipline}
          navigation={navigation}
        />
      </View>
    </View>
  );
}
