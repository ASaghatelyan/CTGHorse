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
  numberOfLines,
  keyType,
  editable,
  lengthNumber,
  inputBtn,
  handleShowPass,
  inputBtnIcon
}) {
  const [color, setColor] = useState(false);
  return (
    <View style={[styles.container, topStyle]}>
      <Text style={styles.title}>{title}</Text>
      <View
        style={[
          styles.inputVIew,
          !err ? color && styles.selectedInput : errStyle,
        ]}>
        <TextInput
          style={[
            styles.styleInput,
            style,
            // !err ? color && styles.selectedInput : errStyle,
          ]}
          placeholder={placeholder}
          placeholderTextColor="#A6A6A6"
          onChangeText={onChange}
          secureTextEntry={secure}
          passwordRules={pass}
          value={value}
          id={id}
          type={type}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onBlur={() => setColor(false)}
          keyboardType={keyType}
          editable={editable}
          maxLength={lengthNumber}
          // onFocus={() => {
          //   setColor(true);
          // }}
        />
        {inputBtn && (
          <TouchableOpacity
            style={styles.inputBtnView}
            onPress={handleShowPass}>
            {inputBtn && (
              <Image
                style={[
                  inputBtnIcon,
                  styles.btnShowhide,
                  err && {tintColor: '#FF453A'},
                ]}
                source={inputBtn}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
      {err ? (
        <View style={styles.errView}>
          <Image source={error} style={styles.errIcon} />
          <Text style={styles.errText}>{err}</Text>
        </View>
      ) : (
        <Text style={styles.err}></Text>
      )}
    </View>
  );
}
