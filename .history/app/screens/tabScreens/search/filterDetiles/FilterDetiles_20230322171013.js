import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import {FilterItem, HeaderNavi} from 'app/components';
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
      <ScrollView contentContainerStyle={styles.itemsView}>
        {route.params.info.map((item, index) => {
          return (
            <View style={styles.checkView}>
              <Text>{item.title}</Text>
              <CheckBox
                    disabled={false}
                    onCheckColor='#171717'
                    onFillColor='red'
                    onTintColor='red'
                    tintColors={{ true: 'red', false: 'red' }}
                    value={toggleCheckBox}
                    onValueChange={newValue => setToggleCheckBox(newValue)}
                    style={[{ margin: 0, padding: 0 }, Platform.OS === "ios" ? { width: 25, height: 20 } : null]}
                    boxType='square'
                    onAnimationType='fill'
                    hideBox="false"
                />
             
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
