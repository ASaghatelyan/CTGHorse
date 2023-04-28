import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
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
import axiosInstance from 'app/networking/api';

export function Filter({navigation, route}) {
  let dispatch = useDispatch();
  let useFilterData = useSelector(store => store.filterData);
  let useFilerItems = useSelector(store => store.filterItem);

 
  let [colorH, setColorH] = useState(
    useFilerItems.Color
      ? JSON.parse(JSON.stringify(useFilerItems.Color))
      : JSON.parse(JSON.stringify(color)),
  );
  let [sexH, setSexH] = useState(
    useFilerItems.Sex
      ? JSON.parse(JSON.stringify(useFilerItems.Sex))
      : JSON.parse(JSON.stringify(sex)),
  );
  let [heightH, setHeightH] = useState(
    useFilerItems.Height
      ? JSON.parse(JSON.stringify(useFilerItems.Height))
      : JSON.parse(JSON.stringify(height)),
  );
  let [weightH, setWeightH] = useState(
    useFilerItems.Weight
      ?  JSON.parse(JSON.stringify(useFilerItems.Weight))
      : JSON.parse(JSON.stringify(weight)),
  );
  let [priceH, setPriceH] = useState(
    useFilerItems.Earnings
      ?  JSON.parse(JSON.stringify(useFilerItems.Earnings))
      : JSON.parse(JSON.stringify(price)),
  );
  let [trainingH, setTrainingH] = useState(
    useFilerItems.Training
      ?  JSON.parse(JSON.stringify(useFilerItems.Training))
      : JSON.parse(JSON.stringify(training)),
  );
  let [filterData, setFilterData] = useState(
    JSON.parse(JSON.stringify(useFilterData)),
  );
  let [disciplineH, setDisciplineH] = useState(
    useFilerItems.Discipline
      ?  JSON.parse(JSON.stringify(useFilerItems.Discipline))
      : JSON.parse(JSON.stringify(discipline)),
  );
  let [breedH, setbreedH] = useState(
    useFilerItems.Breed
      ?  JSON.parse(JSON.stringify(useFilerItems.Breed ))
      : JSON.parse(JSON.stringify(breed)),
  );
  let [allData, setAllData] = useState([]);

  
  useEffect(() => {
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

  let onDeletFilter = ()=>{
    
  }
  return (
    <View style={styles.content}>
      <SafeAreaView />
      <HeaderNavi
        leftBtn="Filter"
        rightBtn="Clear all"
        leftOnPress={async () => {
          try {
            // dispatch({
            //   type: 'RESET_FILTERDATA',
            // });
            let arr = Object.values(useFilterData);
            let arrConcat = [];
            for (let index = 0; index < arr.length; index++) {
              for (let j = 0; j < arr[index].length; j++) {
                arrConcat.push(arr[index][j]);
              }
            }
            let res = await axiosInstance.post(`/filter`, {
              arr: allData,
            });
            route.params.onConfirmFilters(
              res.data,
              arrConcat.length,
              arrConcat,
            );
            setAllData([...arrConcat]);
            navigation.goBack();
          } catch (error) {
            console.log(error.response);
          }
        }}
        rightOnPress={() => {
          setFilterData({
            color: [],
            sex: [],
            height: [],
            weight: [],
            earnings: [],
            breed: [],
            training: [],
            discipline: [],
          });
          dispatch({
            type: 'RESET_FILTERDATA',
          });
        }}
      />
      <View style={styles.itemsView}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.allDataView}>
          {allData.map((item, index) => {
            return (
              <View style={styles.filtered}>
                <TouchableOpacity style={styles.delView} onPress={}>
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
          saveInfo={() => {}}
          data={JSON.parse(JSON.stringify(colorH))}
        />
        <FilterItem
          text="Sex"
          addFilter={addFilter}
          info={sexH}
          navigation={navigation}
          onReset={() => {
            setSexH(JSON.parse(JSON.stringify(sex)));
          }}
          saveInfo={d => {}}
        />
        <FilterItem
          addFilter={addFilter}
          text="Height"
          info={heightH}
          navigation={navigation}
          onReset={() => {
            setHeightH(JSON.parse(JSON.stringify(height)));
          }}
          saveInfo={d => {}}
        />
        <FilterItem
          addFilter={addFilter}
          text="Weight"
          info={weightH}
          navigation={navigation}
          onReset={() => {
            setWeightH(JSON.parse(JSON.stringify(weight)));
          }}
          saveInfo={d => {}}
        />
        <FilterItem
          text="Earnings"
          addFilter={addFilter}
          info={priceH}
          navigation={navigation}
          onReset={() => {
            setPriceH(JSON.parse(JSON.stringify(price)));
          }}
          saveInfo={d => {}}
        />
        <FilterItem
          addFilter={addFilter}
          text="Breed"
          info={breedH}
          navigation={navigation}
          onReset={() => {
            setbreedH(JSON.parse(JSON.stringify(breed)));
          }}
          saveInfo={d => {}}
        />
        <FilterItem
          addFilter={addFilter}
          text="Training"
          info={trainingH}
          navigation={navigation}
          onReset={() => {
            setTrainingH(JSON.parse(JSON.stringify(training)));
          }}
          saveInfo={d => {}}
        />
        <FilterItem
          addFilter={addFilter}
          text="Discipline"
          info={disciplineH}
          navigation={navigation}
          onReset={() => {
            setHeightH(JSON.parse(JSON.stringify(discipline)));
          }}
          saveInfo={d => {}}
        />
      </View>
      <View style={styles.bottomView}>
        <GButton
          btnName="View Results"
          handelMove={async () => {
            try {
              dispatch({
                type: 'SET_FILTERDATA',
                payload: filterData,
              });
              dispatch({
                type: 'SET_FILTERITEM',
                payload: {
                  Color: colorH,
                  Sex: sexH,
                  Height: heightH,
                  Weight: weightH,
                  Earnings: priceH,
                  Breed: breedH,
                  Training: trainingH,
                  Discipline: disciplineH,
                  count: allData.length,
                },
              });
              let res = await axiosInstance.post(`/filter`, {
                arr: allData,
              });
              route.params.onConfirmFilters(res.data, allData.length, allData);
              navigation.goBack();
            } catch (error) {
              console.log(error.response);
            }
          }}
        />
      </View>
    </View>
  );
}
