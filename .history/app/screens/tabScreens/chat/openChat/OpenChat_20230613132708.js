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
import React, {useRef, useState} from 'react';
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
import Sound from 'react-native-sound';
Sound.setCategory('Playback',// Play Music / Sound in React Native App for Android and iOS
// https://aboutreact.com/react-native-play-music-sound/

// import React in our code
import React, {useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

// import Sound Component
import Sound from 'react-native-sound';

const App = () => {
  let sound1, sound2, sound3, sound4, sound5, sound6;

  useEffect(() => {
    Sound.setCategory('Playback', true); // true = mixWithOthers
    return () => {
      if (sound1) sound1.release();
      if (sound2) sound2.release();
      if (sound3) sound3.release();
      if (sound4) sound4.release();
      if (sound5) sound5.release();
      if (sound6) sound6.release();
    };
  }, []);

  //List of the dummy sound track
  const audioList = [
    {
      title: 'Play mp3 sound from Local',
      isRequire: true,
      url: require('./resource/advertising.mp3'),
    },
    {
      title: 'Play mp3 sound from remote URL',
      url:
        'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
    },
    {
      title: 'Play aac sound from Local',
      isRequire: true,
      url: require('./resource/pew2.aac'),
    },
    {
      title: 'Play aac sound from remote URL',
      url:
        'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/pew2.aac',
    },
    {
      title: 'Play wav sound from Local',
      isRequire: true,
      url: require('./resource/frog.wav'),
    },
    {
      title: 'Play wav sound from remote URL',
      url:
        'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav',
    },
  ];

  const playSound = (item, index) => {
    if (index == 0) {
      sound1 = new Sound(item.url, (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
    } else if (index == 1) {
      sound2 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound2.play(() => {
          sound2.release();
        });
      });
    } else if (index == 2) {
      sound3 = new Sound(item.url, (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound3.play(() => {
          sound3.release();
        });
      });
    } else if (index == 3) {
      sound4 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound4.play(() => {
          sound4.release();
        });
      });
    } else if (index == 4) {
      sound5 = new Sound(item.url, (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound5.play(() => {
          sound5.release();
        });
      });
    } else if (index == 5) {
      sound6 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound6.play(() => {
          sound6.release();
        });
      });
    }
  };

  const stopSound = (_item, index) => {
    if (index == 0 && sound1) {
      sound1.stop(() => {
        console.log('Stop');
      });
    } else if (index == 1 && sound2) {
      sound2.stop(() => {
        console.log('Stop');
      });
    } else if (index == 2 && sound3) {
      sound3.stop(() => {
        console.log('Stop');
      });
    } else if (index == 3 && sound4) {
      sound4.stop(() => {
        console.log('Stop');
      });
    } else if (index == 4 && sound5) {
      sound5.stop(() => {
        console.log('Stop');
      });
    } else if (index == 5 && sound6) {
      sound6.stop(() => {
        console.log('Stop');
      });
    }
  };

  const ItemView = (item, index) => {
    return (
      <View style={styles.feature} key={index}>
        <Text style={styles.textStyle}>{item.title}</Text>
        <TouchableOpacity onPress={() => playSound(item, index)}>
          <Text style={styles.buttonPlay}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => stopSound(item, index)}>
          <Text style={styles.buttonStop}>Stop</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Play Music / Sound in React Native App for Android and iOS
        </Text>
        <ScrollView style={{flex: 1}}>
          {audioList.map(ItemView)}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    flex: 1,
    padding: 5,
  },
  buttonPlay: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(00,80,00,1)',
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  buttonStop: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(80,00,00,1)',
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  feature: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 7,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(180,180,180)',
  },
}););

export function OpenChat({navigation}) {
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
        'http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a',
      user: {
        _id: 2,
        name: 'John',
        avatar:
          'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      createdAt: '2023-03-29T05:28:54.680Z',
      _id: '14a71207-1579-4f4c-b6cf-2a069995dc5df8',
    },
    {
      text: '',
      audio:
        'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3',
      user: {
        _id: 2,
        name: 'John',
        avatar:
          'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      createdAt: '2023-03-29T05:28:54.680Z',
      _id: '14a71207-1579-4f4c-b6cf-2a0699w95c5df8',
    },
    {
      text: 'Gg',
      user: {
        _id: 2,
        name: 'John',
        avatar:
          'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      createdAt: '2023-03-29T05:28:54.680Z',
      _id: '14a71207-1579-4f4c-b6cf-2da069995c5f8',
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
        'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
      text: 'Gg yakjhgcbasdfaksjdnf asdfasdnf laskdnf lskdjf nsaldkfaslkfnasdlf jknaskldjf nsadjklfn asdklfjklsd nfjklasdnf kljsadfsjhdbf kjasbdjfkha sdkjfhb asdkhfb askd',
      user: {
        _id: 2,
        name: 'John',
        avatar:
          'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      createdAt: '2023-03-29T05:28:54.680Z',
      _id: '14a71207-1579-4f4c-b6cf-2ad069995c5f8',
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
  let yourRenderedComponentAudio = () => {
    <View style={{flex: 1}}>
      <Text>sdsds</Text>
    </View>;
  };
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
                <View style={{width: '100%'}}>
                  <Button
                    title="Play"
                    onPress={async () => {
                      // let whoosh = new Sound(props.currentMessage.audio);
                      global.sound1 = new Sound(
                        props.currentMessage.audio,
                        (error, sound) => {
                          if (error) {
                            alert('error' + error.message);
                            return;
                          }
                        },
                        );
                        global.sound1.play(() => {
                          global.sound1.release();
                        });
                    }}
                  />
                </View>
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
