/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Image,
  Keyboard,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {InputToolbar, Actions, Composer, Send} from 'react-native-gifted-chat';
import send from 'app/assets/img/send.png';
import rec from 'app/assets/img/rec.png';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';
export const renderInputToolbar = props => {
  return (
    <InputToolbar
      {...props}
      containerStyle={[
        {
          position: 'absolute',
          padding: 0,
          backgroundColor: '#FFF',
          paddingVertical: 8,
          paddingRight: 16,
          paddingLeft: 14,
          borderTopWidth: 0,
          borderTopRightRadius: 22,
          borderTopLeftRadius: 22,
          paddingBottom: 22,
        },
        props.zoomInputActive
          ? {
              top: 0,
            }
          : null,
      ]}
      primaryStyle={[
        {
          padding: 0,
          alignItems: 'center',
        },
        props.zoomInputActive
          ? {
              height: '100%',
              alignItems: 'stretch',
            }
          : null,
      ]}
    />
  );
};

export const renderActions = props => {
  let lines = props.text.split('\n');
  return props.zoomInputActive ? null : (
    <TouchableWithoutFeedback
      onPress={() => {
        props.openPicker();
      }}>
      <View
        style={[
          styles.chooseFile,
          lines.length > 2 ? {marginBottom: 15} : null,
        ]}>
        <Image source={rec} style={styles.chooseFileIcon} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export const renderComposer = props => {
  let canSendTextMessage =
    (props.text && props.text.trim().length > 0 && props.zoomInputActive) ||
    (props.withAttachments && props.zoomInputActive);
  return (
    <View
      style={[
        styles.inputContainer,
        props.zoomInputActive ? {height: null} : null,
      ]}>
      <Composer
        {...props}
        textInputStyle={[
          {
            padding: 0,
            color: '#303030',
            marginLeft: 0,
            paddingHorizontal: 8,
            paddingTop: 2,
            maxHeight: 100,
            paddingBottom: 4,
            fontWeight: null,
            // fontFamily: 'Raleway-SemiBold',
            fontSize: 14,
            lineHeight: 18,
          },
          props.zoomInputActive
            ? {
                minHeight: '100%',
                maxHeight: '100%',
                textAlignVertical: 'top',
                paddingTop: 6,
                paddingBottom: 6,
              }
            : null,
        ]}></Composer>
    </View>
  );
};

export const renderSend = props => {
  console.log(props.recordAudio,'props.recordAudio');
  let lines = props.text.split('\n');

  let canSendTextMessage =
    (props.text && props.text.trim().length > 0 && !props.zoomInputActive) ||
    (props.withAttachments && !props.zoomInputActive);

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Send
        {...props}
        disabled={!props.text}
        sendButtonProps={
          props.withAttachments && canSendTextMessage
            ? {
                onPress: () => {
                  props.sendMessageWithFiles();
                },
              }
            : {}
        }
        containerStyle={{
          width: GlobalWidth(36),
          height: GlobalHeight(36),
          marginLeft: GlobalWidth(8),
          opacity: canSendTextMessage !== 0 ? 1 : 0.5,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          right: GlobalHeight(55),
        }}>
        <Image
          style={[
            {width: GlobalWidth(24), height: GlobalHeight(24)},
            lines.length > 2 ? {marginBottom: GlobalHeight(30)} : null,
          ]}
          source={send}
        />
      </Send>
      <TouchableOpacity 
          onPress={ () => {
            props.recordAudio()  
        } }
        containerStyle={{
          width: GlobalWidth(36),
          height: GlobalHeight(36),

          marginLeft: GlobalWidth(8),
          opacity: canSendTextMessage !== 0 ? 1 : 0.5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={[
            {width: GlobalWidth(50), height: GlobalHeight(50),marginLeft:GlobalWidth(4)},
            lines.length > 2 ? {marginBottom: GlobalHeight(30)} : null,
          ]}
          source={rec}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    borderRadius: 28,
    flexDirection: 'row',
    paddingLeft: GlobalWidth(12),
    paddingRight: GlobalWidth(40),
  },
  inputZoomButton: {
    height: GlobalHeight(36),
    width: GlobalWidth(36),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputZoomIcon: {
    height: GlobalHeight(20),
    width: GlobalWidth(20),
  },
  zoomButtonsContainer: {
    height: '100%',
    justifyContent: 'space-between',
  },
  chooseFile: {
    height: 36,
    width: 36,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chooseFileIcon: {
    height: 24.6,
    width: 12,
  },
});
