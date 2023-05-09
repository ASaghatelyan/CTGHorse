import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CheckBoxComp, FilterItem, GButton, HeaderNavi} from 'app/components';
import CheckBox from '@react-native-community/checkbox';

import {styles} from './style';

export function FilterDetiles({route, navigation}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [allInfo, setAllInfo] = useState(route.params.info);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [err, setErr] = useState('');

  useEffect(() => {
    if (searchText.length > 2) {
      let setTime = setTimeout(() => {
        const res = route.params.info.filter(o => o.title.includes(searchText));
        setAllInfo([...res]);
      }, 1000);
      return () => {
        clearTimeout(setTime);
      };
    } else {
      setAllInfo(route.params.info);
    }
  }, [searchText]);
  console.log(
    allInfo.filter((item, index) => {
      if (item.status) {
        return  route.params.addFilter(item, route.params.text.toLowerCase());
      }
    }),
    'route.params.info',
  );
  return (
    <View style={styles.content}>
      <View>
        <SafeAreaView />
        <HeaderNavi
          leftBtn={route.params.text}
          rightBtn="Reset"
          leftOnPress={() => navigation.goBack()}
          rightOnPress={() => {
            setAllInfo(route.params.data);
            route.params.onReset();
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={'rgba(25, 12, 4, 0.64)'}
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.itemsView}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        {allInfo.map((item, index) => {
          return (
            <View style={styles.checkView}>
              <Text numberOfLines={2} style={styles.text}>
                {item.title}
              </Text>
              <CheckBox
                disabled={false}
                onCheckColor="#FFF"
                onFillColor="#190C04"
                onTintColor="#190C04"
                tintColors={{true: 'red', false: 'red'}}
                value={item.status}
                onValueChange={newValue => {
                  route.params.info.filter((it, ind) => {
                    if (it.id === item.id) {
                      item.status = !item.status;
                    }
                  });
                  // route.params.addFilter(item, route.params.text.toLowerCase());
                }}
                style={[
                  {margin: 0, padding: 0},
                  Platform.OS === 'ios' ? {width: 25, height: 20} : null,
                ]}
                boxType="square"
                onAnimationType="fade"
                hideBox="false"
              />
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.bottomView}>
        <GButton
          btnName="Done"
          handelMove={() => {
            route.params.saveInfo();
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
}
