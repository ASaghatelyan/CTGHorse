/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Image,
  Keyboard,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {InputToolbar, Actions, Composer, Send} from 'react-native-gifted-chat';
import send from 'app/assets/img/send.png';
import rec from 'app/assets/img/rec.png';
export const renderInputToolbar = (props) => {
  return (
    <InputToolbar
      {...props}
      containerStyle={[
        {
          position: 'absolute',
          padding: 0,
          backgroundColor: '#F2F8FF',
          paddingVertical: 8,
          paddingRight: 16,
          paddingLeft: 14,
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.51,
          shadowRadius: 13.16,
          elevation: 20,
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

export const renderActions = (props) => {
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
        <Image
        //   source={require('../../../../assets/img/screp.png')}
          style={styles.chooseFileIcon}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export const renderComposer = (props) => {
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
        ]}
      />
      <View style={styles.zoomButtonsContainer}>
        {canSendTextMessage ? (
          <Send
            {...props}
            // disabled={!props.text}
            sendButtonProps={
              props.withAttachments
                ? {
                    onPress: () => {
                      props.sendMessageWithFiles();
                    },
                  }
                : {}
            }
            containerStyle={{
              width: 36,
              height: 36,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 24, height: 24}}
            //   source={require('../../../../assets/img/sendActive.png')}
            />
          </Send>
        ) : null}
      </View>
    </View>
  );
};

export const renderSend = (props) => {
  let lines = props.text.split('\n');

  let canSendTextMessage =
    (props.text && props.text.trim().length > 0 && !props.zoomInputActive) ||
    (props.withAttachments && !props.zoomInputActive);
  return (
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
        width: 36,
        height: 36,

        marginLeft: 8,
        opacity: canSendTextMessage !== 0 ? 1 : 0.5,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={[
          {width: 24, height: 24},
          lines.length > 2 ? {marginBottom: 30} : null,
        ]}
        source={send}
      />
    </Send>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,

    flexDirection: 'row',
  },
  inputZoomButton: {
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputZoomIcon: {
    height: 20,
    width: 20,
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
