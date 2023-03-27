import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import {CheckBoxComp, FilterItem, HeaderNavi} from 'app/components';
import CheckBox from '@react-native-community/checkbox';

import {styles} from './style';

export function FilterDetiles({route, navigation}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={route.params.text}
        rightBtn="Reset"
        leftOnPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.itemsView} showsHorizontalScrollIndicator={false}>
        {route.params.info.map((item, index) => {
          return (
            <View style={styles.checkView}>
              <Text>{item.title}</Text>
              <CheckBoxComp/>
             
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
