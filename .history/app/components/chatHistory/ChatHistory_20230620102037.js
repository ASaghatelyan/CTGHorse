import React, {useEffect, useRef, useState, useMemo} from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import {styles} from '../../style/ChatStyle';
import {inputRef, componentDidMount} from "../../component/keyboard/Keyboard";
import ModalCamera from "../../component/modalCamera/ModalCamera";
import {useSelector} from "react-redux";
import axiosInstance from "../../networking/axiosinstance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Pusher from 'pusher-js/react-native';
import {ReplyMap} from "../../component/data/Data";
import Loading from './loading/Loading';
// import ListImg from "../../component/list/List";


export   function ChatHistory({}) {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : null}
    style={{flex: 1}}
>
    <View style={styles.chatScrool}>
        <StatusBar backgroundColor={"rgb(250, 250, 250)"} barStyle={"dark-content"}/>
        <View style={styles.inputViewBlue}>
            <View style={styles.textinputPosition}>
                {/* <Image
                    source={require('../../assets/image/iconfinder.png')}
                    style={styles.vectorIcons}
                /> */}
                <TextInput
                    style={styles.TextInputBlue}
                    ref={inputRef}
                    onChangeText={(evt) => {
                        setSearchText(evt)
                    }}/>
            </View>
            {/* <ListImg/> */}
        </View>
        <View style={styles.backJaneView}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                    props.navigation.goBack();
                }}>
                {/* <Image
                    source={require('../../assets/image/backblue.png')}
                    style={styles.backimage}
                /> */}
            </TouchableOpacity>
            <Text style={styles.lastnameText}>{name}</Text>
        </View>
        <ScrollView
            showsVerticalScrollIndicator={false}
            ref={scrollViewRef}
            onContentSizeChange={() => {
                if (scrollToEnd && chat.length) {
                    scrollViewRef.current.scrollToEnd({
                        y: 0,
                        animated: true,
                    });
                    setScrollToEnd(false)
                }
            }}>
            {filteredChat.map((item, index) => {
                return (
                    <View key={index}>
                        <View
                            style={[styles.placeHolderImageViewText, {alignItems: item.sender_id == MY_ID ? 'flex-end' : `flex-start`}]}
                        >
                            <Text style={styles.commentText}>{item.username}</Text>
                            <View style={[styles.messageView, {
                                backgroundColor: item.sender_id == MY_ID ? 'gray' : '#136A8A',
                            }]}>
                                {item.message &&(
                                    <Text style={[styles.placeholderText,]}>{item.message}</Text>)}

                                {
                                    item.path ?
                                        <Image source={{uri:item.path}} style={styles.messageImage}/>

                                        :
                                        null
                                }
                            </View>
                            <View style={[styles.commentViewWatch, {width: 210, marginRight: 5}]}>
                                <Text style={styles.commentText}>{item.time}</Text>
                                <TouchableOpacity style={styles.replyView} onPress={() => {
                                    componentDidMount()
                                    setReplyIndex(index)
                                }}>
                                    <Image source={require("../../assets/image/reply.png")}
                                           style={styles.replyImage}/>
                                    <Text style={styles.replyText}>Reply</Text>
                                </TouchableOpacity>
                            </View>
                            <ReplyMap dataChatComment={item.reply}/>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
        <View style={styles.chatInputView}>
            <TouchableOpacity onPress={() => onPressModal(true)}>
                <Image source={require('../../assets/image/Chatplus.png')} style={styles.chatPlusImg}/>
            </TouchableOpacity>
            <TextInput
                style={styles.textInputChat}
                ref={inputRef}
                value={addInput}
                onChangeText={(evt) => {
                    setAddInput(evt)
                    setText('')
                }}/>
            <TouchableOpacity onPress={() => {
                if (replyIndex !== null) {
                    handleEveReply()
                } else {
                    handleEve()
                }
                setAddInput('')
            }}>
                <Image source={require('../../assets/image/Chat.png')} style={styles.chatIcon}/>
            </TouchableOpacity>
        </View>
    </View>
    <Loading loading={visible}/>
    <ModalCamera onPressModal={onPressModal} visible={cameraModal} photoFunc={photoFunc}
                 cameraImageFunc={cameraImageFunc} user={"user"}/>
</KeyboardAvoidingView>
  )
}