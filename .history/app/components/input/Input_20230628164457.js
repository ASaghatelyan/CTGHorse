import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import error from 'app/assets/img/error.png';

export function Input(props) {
  const [color, setColor] = useState(false);
  return (
    <View style={[styles.container, props.topStyle]}>
      <Text style={styles.title}>{props.title}</Text>
     
      {props.err ? (
        <View style={styles.errView}>
          <Image source={error} style={styles.errIcon} />
          <Text style={styles.errText}>{props.err}</Text>
        </View>
      ) : (
        <Text style={styles.err}></Text>
      )}
    </View>
  );
}
