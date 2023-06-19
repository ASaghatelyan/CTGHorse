import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import React, {useRef, useState, useEffect, useMemo, useCallback} from 'react';
import {styles} from './style';
import online from 'app/assets/img/active.png';
import user1 from 'app/assets/img/user1.png';
import back from 'app/assets/img/back.png';
import send from 'app/assets/img/send.png';
import rec from 'app/assets/img/rec.png';
import {ChatHeader, MessagesList} from 'app/components';
import {Bubble, GiftedChat} from 'react-native-gifted-chat';
import Pusher from 'pusher-js/react-native';

import {
  renderActions,
  renderComposer,
  renderInputToolbar,
  renderSend,
} from 'app/components/chatComponent/InputToolbar';
import {AudioPlayer} from './audioPlayer';
import {useSelector} from 'react-redux';
import axiosInstance from 'app/networking/api';
import {GlobalHeight} from 'app/constant/styleConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function OpenChat({navigation, route}) {
  let userInfo = useSelector(store => store.userInfo);

  let downloadJobId = 0;
  let unreadMessageIdex = 0;
  let canLoadPage = true;
  let pageMessagesCount = 20;
  let messagesOffset = 0;
  let fileFormats = [
    'jpg',
    'jpeg',
    'png',
    'mp3',
    'mp4',
    'doc',
    'docx',
    'pdf',
    'txt',
    'gif',
    'tar',
    'zip',
    'xls',
    'xlsx',
  ];
  let chat = useRef();
  const [playStop, setPlayStop] = useState(false);
  const scrollViewRef = useRef(null);
  let scrollViewSizeChanged = height => {
    scrollViewRef.current?.scrollTo({y: height, animated: true});
  };
  let data = [1, 2, 3, 4, 5, 6];

  const [messages, setMessages] = useState([
    {
      text: '',
      audio:
        'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/pew2.aac',
      user: {
        _id: 2,
        name: 'John',
        avatar:
          'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      createdAt: '2023-03-29T05:28:54.670Z',
      _id: '14a71207-1579-4f4c-b6cf-2a069995d',
    },
    {
      text: '',
      audio:
        'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
      user: {
        _id: 2,
        name: 'John',
        avatar:
          'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      createdAt: '2023-03-29T05:28:54.680Z',
      _id: '14a71207-1579-4f4c-b6cf-dsdssdd',
    },
    {
      text: 'Gg',
      audio: '',
      user: {
        _id: 2,
        name: 'John',
        avatar:
          'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      createdAt: '2023-03-29T05:28:54.680Z',
      _id: '14a71207-1579-4f4c-b6cf-erwgsetcrtcdfbc',
    },
    {
      text: 'Gg yakjhgcbasdfaksjdnf asdfasdnf laskdnf lskdjf nsaldkfaslkfnasdlf jknaskldjf nsadjklfn asdklfjklsd nfjklasdnf kljsadfsjhdbf kjasbdjfkha sdkjfhb asdkhfb askd',
      user: {
        _id: 2,
        name: 'John',
        avatar:
          'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      createdAt: '2023-03-29T05:28:54.680Z',
      _id: '14a71207-1579-4f4c-b6cf-2a069995c5f8',
    },
    {
      audio:
        'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
      text: 'Gg yakjhgcbasdfaksjdnf asdfasdnf laskdnf lskdjf nsaldkfaslkfnasdlf jknaskldjf nsadjklfn asdklfjklsd nfjklasdnf kljsadfsjhdbf kjasbdjfkha sdkjfhb asdkhfb askd',
      user: {
        _id: 2,
        name: 'John',
        avatar:
          'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      createdAt: '2023-03-29T05:28:54.680Z',
      _id: '14a71207-1579-4f4c-b6cf-2ad06999dfg5c',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [text, setText] = useState('');
  const [zoomInputActive, setZoomInputActive] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  const [typing, setTyping] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);
  const [sendFilesLoading, setSendFilesLoading] = useState(false);
  const [visibleImageOptions, setVisibleImageOptions] = useState(false);
  const [visibleMessageOptions, setVisibleMessageOptions] = useState(false);
  const [visibleFileOptions, setVisibleFileOptions] = useState(false);
  const [startRec, setStartRec] = useState(false);
  const [tempBase64Array, setTempBase64Array] = useState([]);
  const [unreadMessageId, setUnreadMessageId] = useState(null);
  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        return value;
      }
    } catch (e) {
      console.log(e);
    }
  };
  let zoomInput = () => {
    setZoomInputActive(!zoomInputActive);
  };

  const onSend = useCallback(async (newMessages = []) => {
    try {
      const data = {
        rec_id: userInfo.id,
        msg: text,
      };
      const response = await axiosInstance.post('/messages', data);
      setMessages(prevMessages => GiftedChat.append(prevMessages, newMessages));
    } catch (e) {
      console.log(e.response);
    }
  }, []);

  const onInputValueChange = text => {
    setInputValue(text);
  };

  const customSystemMessage = props => {
    return (
      <View style={styles.sendView}>
        <View style={styles.msgView}>
          <TextInput
            multiline={true}
            style={styles.sendInput}
            placeholder="Send Message"
            numberOfLines={4}
          />
          <View>
            <TouchableOpacity style={styles.sendIcView}>
              <Image source={send} style={styles.sendIc} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.recIcView}>
          <Image source={rec} style={styles.recIc} />
        </TouchableOpacity>
      </View>
    );
  };

  let isCloseToTop = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToTop = 50;
    return (
      contentSize.height - layoutMeasurement.height - paddingToTop <=
      contentOffset.y
    );
  };

  let scrollToNewMessages = () => {
    setTimeout(() => {
      chat._messageContainerRef.current.scrollToIndex({
        index: unreadMessageIdex,
        viewOffset: 0,
        viewPosition: 1,
      });
    }, 0);
  };

  const loadChats = async () => {
    try {
      const response = await axiosInstance.post(
        '/fetchMessages/' + route.params.id,
      );
      console.log(response.data.data);
      // setMessages([...response.data.data]);

      await subscribeToPusher();
    } catch (e) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    loadChats();
  }, []);

  // const filteredChat = useMemo(
  //   () =>
  //     chat.filter(contact =>
  //       contact.message
  //         ? contact.message.toLowerCase().indexOf(SearchText.toLowerCase()) > -1
  //         : contact.path,
  //     ),
  //   [SearchText, chat],
  // );

  const sendVoiceMessage = voice => {
    console.log(voice, 'vvvvvvvv');
  };


  const subscribeToPusher = async () => {
    let a_tok = await getToken();
    const user_id = userInfo.id;
    Pusher.logToConsole = true;
    var pusher = new Pusher('821da38abbc9954afe90', {
      cluster: 'ap2',
      // authEndpoint: 'https://5704.freelancedeveloper.site/api/broadcasting/auth',
      encrypted: true,
      // auth: {
      //   headers: {
      //     Authorization: 'Bearer ' + a_tok,
      //   },
      // },
    });

    var pusher = new Pusher("PUBLIC_KEY", {
      cluster: 'eu',
      authEndpoint: `https://domain_name.com/broadcasting/auth`,
      auth: {
        headers: {
          "Authorization": "Bearer YOUR_JWT_TOKEN",
          "Access-Control-Allow-Origin": "*"
        }
      }
    });
    
    var channel = pusher.subscribe('private-user.1');
    channel.bind('PrivateEvent', function(data) {
      console.log(data);
    });
    var channel = pusher.subscribe('private-chat-' + userInfo.id);
    channel.bind('messageSend', d => {
      setChatSecond(d);
    });
  };

  const sendMsg = async e => {
    if (text) {
      try {
        const data = {
          rec_id: userInfo.id,
          msg: text,
        };
        const response = await axiosInstance.post('/messages', data, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
      } catch (e) {
        console.log(e.response);
      }
    }
  };

  let recordAudio = () => {
    setStartRec(!startRec);
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <SafeAreaView style={{backgroundColor: '#F5F5F5'}} />
      <ChatHeader item={route.params} />

      <GiftedChat
        textInputProps={{
          paddingTop: 8,
        }}
        maxComposerHeight={200}
        renderTime={() => null}
        listViewProps={{
          // onScrollToIndexFailed: (info) => {
          showsVerticalScrollIndicator: false,
          scrollEventThrottle: 400,
          // onScroll: ({nativeEvent}) => {
          //   if (isCloseToTop(nativeEvent) && canLoadPage && pageLoading) {
          //     // getMessages();
          //   }
          //   if (nativeEvent.contentOffset.y > 50) {
          //     if (!showScrollBottom) setShowScrollBottom(true);
          //   } else {
          //     if (showScrollBottom) setShowScrollBottom(false);
          //   }
          // },
        }}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              textStyle={{
                right: {
                  color: '#E9A13A',
                },
                left: {
                  color: '#190C04',
                },
              }}
              wrapperStyle={{
                left: {
                  backgroundColor: 'rgba(228, 228, 228, 0.83)',
                  borderRadius: 22,
                  paddingHorizontal: 8,
                  paddingVertical: 6,
                },
                right: {
                  backgroundColor: '#FFEBCF',
                  borderRadius: 22,
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                },
              }}
              renderMessageAudio={() => (
                <AudioPlayer url={props.currentMessage.audio} />
              )}
            />
          );
        }}
        minComposerHeight={GlobalHeight(30)}
        // maxComposerHeight={100}
        ref={ref => {
          chat = ref;
        }}
        isKeyboardInternallyHandled={false}
        wrapInSafeArea={false}
        keyboardShouldPersistTaps="handled"
        messages={messages}
        text={text}
        onInputTextChanged={t => {
          setText(t);
          if (t) {
            //  api.typing(this.props.config.activeChat.id);
          }
        }}
        onSend={e => {
          onSend(e);
        }}
        user={{
          _id: userInfo.id,
          name: userInfo.name,
          avatar: userInfo.avatar,
        }}
        renderFooter={props => <View style={{height: 30}} />}
        // alignTop
        alwaysShowSend={true}
        // showUserAvatar
        // renderAvatarOnTop
        // renderUsernameOnMessage
        // bottomOffset={26}
        onPressAvatar={console.log}
        renderInputToolbar={props =>
          renderInputToolbar({
            ...props,
            zoomInputActive: zoomInputActive,
            startRec: startRec,
            sendVoiceMessage: voice => {
              sendVoiceMessage(voice);
              setStartRec(!startRec);
            },
          })
        }
        // renderActions={props =>
        //   renderActions({
        //     ...props,
        //     zoomInputActive: zoomInputActive,
        //     openPicker: () => {
        //       //  openPicker();
        //     },
        //   })
        // }
        renderComposer={props =>
          renderComposer({
            ...props,
            zoomInputActive: zoomInputActive,
            zoomInput: zoomInput,
            withAttachments: tempBase64Array.length,
            sendMessageWithFiles: () => {
              onSend();
            },
          })
        }
        renderSend={props =>
          renderSend({
            ...props,
            zoomInputActive: zoomInputActive,
            withAttachments: tempBase64Array.length,
            sendMessageWithFiles: () => {
              onSend();
            },
            recordAudio: () => {
              recordAudio();
            },
          })
        }
        // renderCustomView={renderCustomView}
        // renderDay={renderDay}

        // renderMessage={props =>
        //   renderMessage({
        //     ...props,
        //     deleteMessage: deleteMessage,
        //     unreadMessageId: unreadMessageId,
        //     scrollToNewMessages: scrollToNewMessages,
        //     pageLoading: pageLoading,
        //     activeChat: props.config.activeChat,
        //     openImageSlider: (images, index) => {
        //       openImageSlider(images, index);
        //     },
        //     loading: value => {
        //       setSendFilesLoading(value);
        //     },
        //     setJobId: id => {
        //       downloadJobId = id;
        //     },
        //     openImageOptions: message => {
        //       message = message;
        //       setVisibleImageOptions(true);
        //     },
        //     openFileOptions: (message, file) => {
        //       message = message;

        //       setVisibleFileOptions(true);
        //       setFile(file);
        //     },
        //     openMessageOptions: message => {
        //       message = message;
        //       setVisibleMessageOptions(true);
        //     },
        //   })
        // }
        // renderMessageText={renderMessageText}
        // renderChatEmpty={ renderChatEmpty}
        //renderMessageImage={renderMessageImage}
        // isCustomViewBottom
        // renderMessageVideo={yourRenderedComponentVideo}

        messagesContainerStyle={{
          backgroundColor: '#F5F5F5',
          paddingHorizontal: 10,
        }}
        // parsePatterns={(linkStyle) => [
        //   {
        //     pattern: /#(\w+)/,
        //     style: linkStyle,
        //     onPress: (tag) =>//console.log(`Pressed on hashtag: ${tag}`),
        //   },
        // ]}
      />
    </KeyboardAvoidingView>
  );
}
