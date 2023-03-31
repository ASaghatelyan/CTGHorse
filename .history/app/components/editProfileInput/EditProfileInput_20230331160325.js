import { View, Text,TextInput } from 'react-native'
import React from 'react'

export   function EditProfileInput(props) {
  return (
    <View style={[styles.container, props.topStyle,]}>
    <Text style={[styles.title, props.colorT]}>{props.title}</Text>
    <TextInput
      style={[
        styles.styleInput,
        props.style,
        !props.err ? color && styles.selectedInput : props.errStyle,
        props.colorT
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
          style={[props.inputBtnIcon, styles.btnShowhide]}
          source={props.inputBtn}
        />
      )}
    </TouchableOpacity>
    {props.err ? (
      <View style={styles.errView}>
        {/* <Image source={errImg} style={styles.errIcon} /> */}
        <Text style={styles.errText}>{props.err}</Text>
      </View>
    ) : (
      <Text style={styles.err}></Text>
    )}
  </View>
  )
}