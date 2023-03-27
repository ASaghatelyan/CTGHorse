import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {styles} from './style';

export function ProgressBar(props) {
  return (
    <View style={{width: '100%', marginBottom: 6}}  >
      <Text style={styles.categoryText}>{props.categoryName}</Text>
      <View style={styles.progressBar}>
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: props.color,
              width: `${+props.procent}%`,
              borderRadius: 50,
              height: 10,
            },
          ]}
        />
      </View>
    </View>
  );
}
