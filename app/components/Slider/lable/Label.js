import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';
import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styles} from './style';

export const Label = memo(({text,type, ...restProps}) => {
  return (
    <View style={styles.root} {...restProps}>
      <Text style={styles.text}>{text} {type}</Text>
    </View>
  );
});
