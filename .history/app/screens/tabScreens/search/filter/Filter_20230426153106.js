import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FilterItem, GButton, HeaderNavi} from 'app/components';
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
import deleteItem from 'app/assets/img/delete.png';
import * as _ from 'lodash';
import {useSelector, useDispatch} from 'react-redux';

export function Filter({navigation}) {
  let dispatch = useDispatch();
  let useFilterData = useSelector(store => store.filterData);
 
  let [colorH, setColorH] = useState(JSON.parse(JSON.stringify(color)));
  let [sexH, setSexH] = useState(JSON.parse(JSON.stringify(sex)));
  let [heightH, setHeightH] = useState(JSON.parse(JSON.stringify(height)));
  let [weightH, setWeightH] = useState(JSON.parse(JSON.stringify(weight)));
  let [priceH, setPriceH] = useState(JSON.parse(JSON.stringify(price)));
  let [trainingH, setTrainingH] = useState(
    JSON.parse(JSON.stringify(training)),
  );
  let [filterData, setFilterData] = useState(useFilterData);
  let [disciplineH, setDisciplineH] = useState(
    JSON.parse(JSON.stringify(discipline)),
  );
  let [breedH, setbreedH] = useState(JSON.parse(JSON.stringify(breed)));
  let [allData, setAllData] = useState([]);

  let openMap = () => {
    Platform.OS === 'ios'
      ? Linking.openURL('http://maps.apple.com/maps?daddr=Yerevan azatutyan 24')
      : Linking.openURL('http://maps.google.com/maps?daddr=Yerevan');
  };

  useEffect(() => {
    let arr1 = [];
    let arr = Object.values(filterData);
    let arrConcat = [];
    for (let index = 0; index < arr.length; index++) {
      for (let j = 0; j < arr[index].length; j++) {
        arrConcat.push(arr[index][j]);
      }
    }
    setAllData([...arrConcat]);
  }, [filterData]);

  let addFilter = (item, type) => {
    let filtered = _.includes(filterData[type], item);
    if (!filtered) {
      filterData[type].push(item);
    } else {
      _.remove(filterData[type], el => {
        return el === item;
      });
    }
    setFilterData({...filterData});
  };
console.log(filterData,'fffff');
  return (
    <View style={styles.content}>
      <SafeAreaView />
      <HeaderNavi
        leftBtn="Filter"
        rightBtn="Clear all"
        leftOnPress={() => navigation.goBack()}
      />
      <View style={styles.itemsView}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            flexDirection: 'row',
            paddingHorizontal: 15,
          }}>
          {allData.map((item, index) => {
            return (
              <View style={styles.filtered}>
                <TouchableOpacity style={styles.delView}>
                  <Image source={deleteItem} style={styles.del} />
                </TouchableOpacity>
                <Text numberOfLines={1} style={styles.choosedText}>
                  {item}
                </Text>
              </View>
            );
          })}
        </ScrollView>
        <FilterItem
          text="Color"
          addFilter={addFilter}
          info={colorH}
          onReset={() => {
            setColorH(JSON.parse(JSON.stringify(color)));
          }}
          navigation={navigation}
          saveInfo={d => {
            setAllData([...allData, ...d]);
          }}
          data={JSON.parse(JSON.stringify(colorH))}
        />
        <FilterItem
          text="Sex"
          addFilter={addFilter}
          info={sexH}
          navigation={navigation}
          onReset={() => {
            setSexH(JSON.parse(JSON.stringify(sexH)));
          }}
          saveInfo={d => {
            setAllData([...allData, ...d]);
          }}
        />
        <FilterItem
          addFilter={addFilter}
          text="Height"
          info={heightH}
          navigation={navigation}
          onReset={() => {
            setHeightH(JSON.parse(JSON.stringify(height)));
          }}
          saveInfo={d => {
            setAllData([...allData, ...d]);
          }}
        />
        <FilterItem
          addFilter={addFilter}
          text="Weight"
          info={weightH}
          navigation={navigation}
          onReset={() => {
            setWeightH(JSON.parse(JSON.stringify(weight)));
          }}
          saveInfo={d => {
            setAllData([...allData, ...d]);
          }}
        />
        <FilterItem
          text="Earnings"
          addFilter={addFilter}
          info={priceH}
          navigation={navigation}
          onReset={() => {
            setPriceH(JSON.parse(JSON.stringify(price)));
          }}
          saveInfo={d => {
            setAllData([...allData, ...d]);
          }}
        />
        <FilterItem
          addFilter={addFilter}
          text="Breed"
          info={breedH}
          navigation={navigation}
          onReset={() => {
            setbreedH(JSON.parse(JSON.stringify(breed)));
          }}
          saveInfo={d => {
            setAllData([...allData, ...d]);
          }}
        />
        <FilterItem
          addFilter={addFilter}
          text="Training"
          info={trainingH}
          navigation={navigation}
          onReset={() => {
            setTrainingH(JSON.parse(JSON.stringify(training)));
          }}
          saveInfo={d => {
            setAllData([...allData, ...d]);
          }}
        />
        <FilterItem
          addFilter={addFilter}
          text="Discipline"
          info={disciplineH}
          navigation={navigation}
          onReset={() => {
            setHeightH(JSON.parse(JSON.stringify(discipline)));
          }}
          saveInfo={d => {
            setAllData([...allData, ...d]);
          }}
        />
      </View>
      <View style={styles.bottomView}>
        <GButton
          btnName="View Results"
          handelMove={openMap}
        />
      </View>
    </View>
  );
}
