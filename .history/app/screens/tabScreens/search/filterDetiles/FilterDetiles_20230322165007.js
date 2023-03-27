import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {FilterItem, HeaderNavi} from 'app/components';
import {styles} from './style';

export function FilterDetiles({route, navigation}) {
  console.log(route.params.info);
  return (
    <View>
      <SafeAreaView />
      <HeaderNavi
        leftBtn={route.params.text}
        rightBtn="Reset"
        leftOnPress={() => navigation.goBack()}
      />
      <Scroll style={styles.itemsView}>
        {route.params.info.map((item, index) => {
          return (
            <TouchableOpacity>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </Scroll>
    </View>
  );
}
