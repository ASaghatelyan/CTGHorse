import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

export function CheckBoxComp(props) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
 
  return (
    <CheckBox
      disabled={false}
      onCheckColor="#FFF"
      onFillColor="#190C04"
      onTintColor="#190C04"
      tintColors={{true: 'red', false: 'red'}}
      value={props.item.status}
      onValueChange={newValue => {
        console.log(props.item);
        
        setToggleCheckBox(newValue)}}
      style={[
        {margin: 0, padding: 0},
        Platform.OS === 'ios' ? {width: 25, height: 20} : null,
      ]}
      boxType="square"
      onAnimationType="fade"
      hideBox="false"
    />
  );
}
