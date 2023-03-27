import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {CheckBoxComp, FilterItem, HeaderNavi} from 'app/components';
import CheckBox from '@react-native-community/checkbox';

import {styles} from './style';

export function FilterDetiles({route, navigation}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
console.log(saveInfo);
  return (
    <View>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={route.params.text}
        rightBtn="Reset"
        leftOnPress={() => navigation.goBack()}
      />

      <TextInput style={styles.input} placeholder="Search" placeholderTextColor={'rgba(25, 12, 4, 0.64)'}/>

      <ScrollView
        contentContainerStyle={styles.itemsView}
        showsHorizontalScrollIndicator={false}
        bounces={false}>
        {route.params.info.map((item, index) => {
          return (
            <View style={styles.checkView}>
              <Text>{item.title}</Text>
              <CheckBoxComp item={item}/>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
