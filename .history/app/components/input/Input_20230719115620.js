import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import error from 'app/assets/img/error.png';

export function Input({
  topStyle,
  title,
  err,
  errStyle,
  style,
  placeholder,
  onChange,
  secure,
  pass,
  value,
  id,
  type,
  multiline,
  numberOfLines,keyType
}) {
  const [color, setColor] = useState(false);
  return (
    <View style={[styles.container, props.topStyle]}>
      <Text style={styles.title}>{props.title}</Text>
      <View
        style={[
          styles.inputVIew,
          !props.err ? color && styles.selectedInput : props.errStyle,
        ]}>
        <TextInput
          style={[
            styles.styleInput,
            props.style,
            // !props.err ? color && styles.selectedInput : props.errStyle,
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
        {props.inputBtn && (
          <TouchableOpacity
            style={styles.inputBtnView}
            onPress={props.handleShowPass}>
            {props.inputBtn && (
              <Image
                style={[
                  props.inputBtnIcon,
                  styles.btnShowhide,
                  props.err && {tintColor: '#FF453A'},
                ]}
                source={props.inputBtn}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
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
