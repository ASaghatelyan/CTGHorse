import {View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';
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
import deleteItem from 'app/assets/img/delete.png'
export function Filter({navigation}) {
  let [allData, setAllData] = useState([]);

  return (
    <View>
      <SafeAreaView />
      <HeaderNavi
        leftBtn="Filter"
        rightBtn="Clear all"
        leftOnPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={{}}>
        {allData.map((item, index) => {
          return (
            <View style={styles.filtered}>
              <TouchableOpacity style={styles.delView}>
              <Image source={deleteItem} style={styles.del}/>
              </TouchableOpacity>
              <Text>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.itemsView}>
        <FilterItem
          text="Color"
          info={color}
          navigation={navigation}
          saveInfo={d => {
            setAllData([...allData, ...d]);
          }}
        />
        <FilterItem
          text="Sex"
          info={sex}
          navigation={navigation}
          saveInfo={d => {
            setAllData([...allData, ...d]);
          }}
        />
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
