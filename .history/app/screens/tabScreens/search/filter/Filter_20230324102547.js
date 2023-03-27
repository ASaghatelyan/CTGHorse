import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
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
import deleteItem from 'app/assets/img/delete.png';
export function Filter({navigation}) {
  let [colorH, setColorH] = useState(JSON.parse(JSON.stringify(color)));
  let [sexH, setSexH] = useState(JSON.parse(JSON.stringify(sex)));
  let [heghtH,setHeghtH]=useState(JSON.parse(JSON.stringify(height)))
  let [allData, setAllData] = useState([]);

  return (
    <View>
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
                  {item.title}
                </Text>
              </View>
            );
          })}
        </ScrollView>
        <FilterItem
          text="Color"
          info={colorH}
          onReset={() => {
            setColorH(JSON.parse(JSON.stringify(color)));
          }}
          navigation={navigation}
          saveInfo={d => {
            setAllData([...allData, ...d]);
          }}
        />
        <FilterItem
          text="Sex"
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
          text="Height"
          info={heghtH}
          navigation={navigation}
          onReset={() => {
            setSexH(JSON.parse(JSON.stringify(hei)));
          }}
          saveInfo={d => {
            setAllData([...allData, ...d]);
          }}
        />
        <FilterItem
          text="Weight"
          info={weight}
          navigation={navigation}
          saveInfo={d => {
            setAllData([...allData, ...d]);
          }}
        />
        <FilterItem
          text="Earnings"
          info={price}
          navigation={navigation}
          saveInfo={d => {
            setAllData([...allData, ...d]);
          }}
        />
        <FilterItem
          text="Breed"
          info={breed}
          navigation={navigation}
          saveInfo={d => {
            setAllData([...allData, ...d]);
          }}
        />
        <FilterItem
          text="Training"
          info={training}
          navigation={navigation}
          saveInfo={d => {
            setAllData([...allData, ...d]);
          }}
        />
        <FilterItem
          text="Discipline"
          info={discipline}
          navigation={navigation}
        />
      </View>
    </View>
  );
}
