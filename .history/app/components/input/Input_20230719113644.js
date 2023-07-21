import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import error from 'app/assets/img/error.png';

export function Input(props) {
  const [color, setColor] = useState(false);
 console.log(props.secure?props.secure:false,'props.secure?props.secure:false');
  return (
    <View style={[styles.container, props.topStyle]}>
      <Text style={styles.title}>{props.title}</Text>
      <View
        style={[styles.inputVIew,!props.err? color && styles.selectedInput : props.errStyle, ]}>
        <TextInput
          style={[
            styles.styleInput,
            props.style,
            // !props.err ? color && styles.selectedInput : props.errStyle,
          ]}
          // onChangeText={props.onChange}
          // value={props.value}
          // placeholder={props.placeholder}
          // placeholderTextColor="#A6A6A6"
          // secureTextEntry={props.secure?props.secure:false}
          // passwordRules={props.pass}
          // id={props.id}
          // type={props.type}
          // multiline={props.multiline}
          // numberOfLines={props.numberOfLines}
          // onBlur={() => setColor(false)}
          // keyboardType={props.keyType}
          // editable={props.editable}
          // maxLength={props.lengthNumber}
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
