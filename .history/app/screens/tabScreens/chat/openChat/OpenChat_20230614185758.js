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
import React, {useRef, useState, useEffect, useMemo} from 'react';
import {styles} from './style';
import online from 'app/assets/img/active.png';
import user1 from 'app/assets/img/user1.png';
import back from 'app/assets/img/back.png';
import send from 'app/assets/img/send.png';
import rec from 'app/assets/img/rec.png';
import {ChatHeader, MessagesList} from 'app/components';
import {Bubble, GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import {
  renderActions,
  renderComposer,
  renderInputToolbar,
  renderSend,
} from 'app/components/chatComponent/InputToolbar';
import {AudioPlayer} from './audioPlayer';

export function OpenChat({navigation,route}) {
  let userInfo = useSelector(store => store.userInfo);
  console.log(route.params);
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
  const [file, setFile] = useState({});
  const [tempBase64Array, setTempBase64Array] = useState([]);
  const [unreadMessageId, setUnreadMessageId] = useState(null);

  let zoomInput = () => {
    setZoomInputActive(!zoomInputActive);
  };

  const onSend = (newMessages = []) => {
    setMessages(prevMessages => GiftedChat.append(prevMessages, newMessages));
  };

  const onInputValueChange = text => {
    setInputValue(text);
  };



  const onSendMessage = () => {
    if (inputValue.trim().length > 0) {
      onSend([
        {
          _id: Math.random().toString(36).substring(7),
          text: inputValue.trim(),
          createdAt: new Date(),

          user: {
            _id: 1,
            name: 'John',
          },
        },
      ]);
      setInputValue('');
    }
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
    setVisible(true)
    try {
        const response = await axiosInstance.post("/fetchMessages/" + YOUR_ID, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        setChat([...response.data.data])
        setVisible(false)
        await subscribeToPusher()
    }catch (e){
        console.log(error.response, YOUR_ID);
        setVisible(false)
    }
}

const filteredChat = useMemo(() => chat.filter((contact) =>
        contact.message ?
            contact.message.toLowerCase().indexOf(SearchText.toLowerCase()) > -1
            :
            contact.path
    ),
    [SearchText, chat]);


const subscribeToPusher = async () => {
    let a_tok = await getToken()
    const user_id = MY_ID
    Pusher.logToConsole = true;
    var pusher = new Pusher('532c15703984b6c41207', {
        cluster: 'ap2',
        authEndpoint: 'https://app.grain-brain.ca/api/broadcasting/auth',
        encrypted: true,
        auth: {
            headers: {
                'Authorization': 'Bearer ' + a_tok,
            }
        }
    })
    var channel = pusher.subscribe('private-chat-' + user_id);
    channel.bind('messageSend', (d) => {
        setChatSecond(d)
    });
}

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <SafeAreaView style={{backgroundColor: '#F5F5F5'}} />
      <ChatHeader />
      {/* <MessagesList /> */}
      {/* <View style={styles.sendView}>
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
        </View> */}
      <GiftedChat
        maxComposerHeight={200}
        renderTime={() => null}
        listViewProps={{
          // onScrollToIndexFailed: (info) => {
          showsVerticalScrollIndicator: false,
          scrollEventThrottle: 400,
          onScroll: ({nativeEvent}) => {
            if (isCloseToTop(nativeEvent) && canLoadPage && pageLoading) {
              // getMessages();
            }
            if (nativeEvent.contentOffset.y > 50) {
              if (!showScrollBottom) setShowScrollBottom(true);
            } else {
              if (showScrollBottom) setShowScrollBottom(false);
            }
          },
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
        minComposerHeight={36}
        // maxComposerHeight={100}
        ref={ref => {
          chat = ref;
        }}
        //isLoadingEarlier
        //inverted={false}
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
          _id: 1,
          // name: this.props.user.full_name,
          // avatar: this.props.user.image,
        }}
        renderFooter={props => <View style={{height: 30}} />}
        // alignTop
        alwaysShowSend={true}
        // showUserAvatar
        // renderAvatarOnTop
        // renderUsernameOnMessage
        // bottomOffset={26}
        // onPressAvatar={console.log}
        renderInputToolbar={props =>
          renderInputToolbar({
            ...props,
            zoomInputActive: zoomInputActive,
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
          })
        }
        // renderCustomView={renderCustomView}
        // renderDay={renderDay}
        //renderBubble={renderBubble}
        // renderSystemMessage={renderSystemMessage}
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
