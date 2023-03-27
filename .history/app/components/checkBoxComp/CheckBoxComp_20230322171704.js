import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import React, { useState } from 'react'; 
  import CheckBox from '@react-native-community/checkbox';
  
 
  

export   function CheckBoxComp(props) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View>
      <Text>CheckBoxComp</Text>
    </View>
  )
}