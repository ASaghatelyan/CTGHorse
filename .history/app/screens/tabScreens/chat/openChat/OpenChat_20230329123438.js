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
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './style';
import online from 'app/assets/img/active.png';
import user1 from 'app/assets/img/user1.png';
import back from 'app/assets/img/back.png';
import send from 'app/assets/img/send.png';
import rec from 'app/assets/img/rec.png';
import {ChatHeader, MessagesList} from 'app/components';
import {
  Bubble,
  GiftedChat,
  InputToolbar,
  Composer,
} from 'react-native-gifted-chat';

export function OpenChat({navigation}) {
  const scrollViewRef = useRef(null);
  let scrollViewSizeChanged = height => {
    scrollViewRef.current?.scrollTo({y: height, animated: true});
  };
  let data = [1, 2, 3, 4, 5, 6];
  const [messages, setMessages] = useState([
    {
      text: '',
      audio:
        'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
      user: {
        _id: 2,
        name: 'John',
        avatar:
          'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      createdAt: '2023-03-29T05:28:54.680Z',
      _id: '14a71207-1579-4f4c-b6cf-2a069995c5df8',
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
      <View style={[styles.sendView]}>
        <View style={styles.msgView}>
          <TextInput
            multiline={true}
            style={styles.sendInput}
            placeholder="Send Message"
            value={inputValue}
            onChangeText={onInputValueChange}
          />
          <View>
            <TouchableOpacity style={styles.sendIcView} onPress={onSendMessage}>
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
  return (
    <View style={{flex: 1}}>
      <SafeAreaView />
      <View style={{flex: 1}}>
        <ChatHeader />
        {/* <MessagesList /> */}
        <View style={{flex: 1, marginBottom: 35}}>
          <GiftedChat
            messages={messages}
            renderInputToolbar={() => (
              <View style={{backgroundColor: 'red', height: 200}}>
                <View style={styles.inputContainer}>
                 
                  <TextInput
                    multiline={true}
                    style={styles.sendInput}
                    placeholder="Send Message"
                    value={inputValue}
                    onChangeText={onInputValueChange}
                  />
                 
                </View>
                <View></View>
              </View>
            )}
            onSend={onSend}
            user={{_id: 1}}
            renderTime={() => null}
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
                />
              );
            }}
          />

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
        </View>
      </View>
    </View>
  );
}

// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   SafeAreaView,
// } from 'react-native';
// import {Bubble, GiftedChat, IMessage} from 'react-native-gifted-chat';

// export const OpenChat = () => {
//   const [messages, setMessages] = useState([
//     {
//       text: 'Gg',
//       user: {
//         _id: 2,
//         name: 'John',
//         avatar:
//           'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//       },
//       createdAt: '2023-03-29T05:28:54.680Z',
//       _id: '14a71207-1579-4f4c-b6cf-2a069995c5df8',
//     },
//     {
//       text: 'Gg',
//       user: {
//         _id: 2,
//         name: 'John',
//         avatar:
//           'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//       },
//       createdAt: '2023-03-29T05:28:54.680Z',
//       _id: '14a71207-1579-4f4c-b6cf-2da069995c5f8',
//     },
//     {
//       text: 'Gg yakjhgcbasdfaksjdnf asdfasdnf laskdnf lskdjf nsaldkfaslkfnasdlf jknaskldjf nsadjklfn asdklfjklsd nfjklasdnf kljsadfsjhdbf kjasbdjfkha sdkjfhb asdkhfb askd',
//       user: {
//         _id: 2,
//         name: 'John',
//         avatar:
//           'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//       },
//       createdAt: '2023-03-29T05:28:54.680Z',
//       _id: '14a71207-1579-4f4c-b6cf-2a069995c5f8',
//     },
//     {
//       text: 'Gg yakjhgcbasdfaksjdnf asdfasdnf laskdnf lskdjf nsaldkfaslkfnasdlf jknaskldjf nsadjklfn asdklfjklsd nfjklasdnf kljsadfsjhdbf kjasbdjfkha sdkjfhb asdkhfb askd',
//       user: {
//         _id: 2,
//         name: 'John',
//         avatar:
//           'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//       },
//       createdAt: '2023-03-29T05:28:54.680Z',
//       _id: '14a71207-1579-4f4c-b6cf-2ad069995c5f8',
//     },
//   ]);
//   const [inputValue, setInputValue] = useState('');

//   const onSend = (newMessages = []) => {
//     setMessages(prevMessages => GiftedChat.append(prevMessages, newMessages));
//   };

//   const onInputValueChange = text => {
//     setInputValue(text);
//   };

//   const onSendMessage = () => {
//     if (inputValue.trim().length > 0) {
//       onSend([
//         {
//           _id: Math.random().toString(36).substring(7),
//           text: inputValue.trim(),
//           createdAt: new Date(),
//           image:
//             'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//           user: {
//             _id: 1,
//             name: 'John',
//           },
//         },
//       ]);
//       setInputValue('');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <SafeAreaView />
//       <Text style={styles.header}>Messages</Text>
//       <GiftedChat
//         messages={messages}
//         onSend={onSend}
//         user={{_id: 1}}
//         showUserAvatar={false}
//         renderTime={() => null}
//         renderBubble={props => {
//           return (
//             <Bubble
//               {...props}
//               textStyle={{
//                 right: {
//                   color: '#E9A13A',
//                 },
//                 left: {
//                   color: '#190C04',
//                 },
//               }}
//               wrapperStyle={{
//                 left: {
//                   backgroundColor: 'rgba(228, 228, 228, 0.83)',
//                   borderRadius: 22,
//                   paddingHorizontal: 8,
//                   paddingVertical:6
//                 },
//                 right: {
//                   backgroundColor: '#FFEBCF',
//                   borderRadius: 22,
//                   paddingHorizontal: 12,
//                   paddingVertical:8
//                 },
//               }}
//             />
//           );
//         }}
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Type a message"
//           value={inputValue}
//           onChangeText={onInputValueChange}
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={onSendMessage}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     padding: 20,
//     textAlign: 'center',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 10,
//     padding: 10,
//     marginRight: 10,
//   },
//   sendButton: {
//     backgroundColor: '#1e90ff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });
