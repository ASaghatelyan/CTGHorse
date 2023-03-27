import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import error from 'app/assets/img/error.png'
export function Input(props) {
  const [color, setColor] = useState(false);
 
  return (
    <View style={[styles.container, props.topStyle]}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        style={[
          styles.styleInput,
          props.style,
          !props.err ? color && styles.selectedInput : props.errStyle,
        ]}
        placeholder={props.placeholder}
        placeholderTextColor="#A6A6A6"
        onChangeText={props.onChange}
        secureTextEntry={props.secure}
        passwordRules={props.pass}
        value={props.value}
        id={props.id}
        type={props.type}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        onBlur={() => setColor(false)}
        keyboardType={props.keyType}
        editable={props.editable}
        maxLength={props.lengthNumber}
        // onFocus={() => {
        //   setColor(true);
        // }}
      />
      <TouchableOpacity
        style={props.inputBtnView}
        onPress={props.handleShowPass}>
        {props.inputBtn && (
          <Image
            style={[props.inputBtnIcon, styles.btnShowhide,props.err && {tintColor:'#FF453A'}]}
            source={props.inputBtn}
          />
        )}
      </TouchableOpacity>
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
