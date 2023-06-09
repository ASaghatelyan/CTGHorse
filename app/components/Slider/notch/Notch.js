import { GlobalHeight, GlobalWidth } from 'app/constant/styleConstants';
import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { styles } from './style';

export const Notch =memo(props => {
  return (
    <View style={styles.root} {...props}/>
  );
});

 

 
