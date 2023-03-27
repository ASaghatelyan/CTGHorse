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
 const [data,setDat]=useState([])
  return (
    <View>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={route.params.text}
        rightBtn="Reset"
        leftOnPress={() => navigation.goBack()}
      />

      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={'rgba(25, 12, 4, 0.64)'}
      />

      <ScrollView
        contentContainerStyle={styles.itemsView}
        showsHorizontalScrollIndicator={false}
        bounces={false}>
        {route.params.info.map((item, index) => {
          return (
            <View style={styles.checkView}>
              <Text>{item.title}</Text>
              <CheckBox
                disabled={false}
                onCheckColor="#FFF"
                onFillColor="#190C04"
                onTintColor="#190C04"
                tintColors={{true: 'red', false: 'red'}}
                value={item.status}
                onValueChange={newValue => {
                  console.log(item);
                  route.params.info[index].status=!route.params.info[index].status
                  route.params.saveInfo(item);
                  setToggleCheckBox(newValue);
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
    </View>
  );
}
