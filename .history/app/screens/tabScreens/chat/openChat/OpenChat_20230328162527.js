// import {
//   View,
//   Text,
//   SafeAreaView,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   Dimensions,
//   TextInput,ScrollView
// } from 'react-native';
// import React from 'react';
// import {styles} from './style';
// import online from 'app/assets/img/active.png';
// import user1 from 'app/assets/img/user1.png';
// import back from 'app/assets/img/back.png'; 
// import send from 'app/assets/img/send.png'; 

// export function OpenChat(props) {
//   let data = [1, 2, 3, 4, 5, 6];
//   return (
//     <View style={{flex:1}}>
//       <SafeAreaView>
//         <View style={styles.topView}>
//           <TouchableOpacity style={styles.backBtnView}>
//             <Image source={back} style={styles.backBtn} />
//           </TouchableOpacity>
//           <Image source={user1} style={styles.userAva} />
//           <View>
//             <Text style={styles.nameText}>John Walton</Text>
//             <View style={styles.activeView}>
//               <Text style={styles.activeNow}>Active Now</Text>
//               <Image source={online} style={styles.activIc} />
//             </View>
//           </View>
//         </View>
//         <ScrollView
//           nestedScrollEnabled={true}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{
//             flexGrow: 1,
//               paddingBottom: 120,
//             paddingHorizontal: 15,
//           }}>
//           {data.map((item, index) => {
//             return (
//               <View key={index}>
//                 <Text style={styles.dateText}>Thursday 24, 2022</Text>
//                 <View style={styles.leftChatView}>
//                   <View style={styles.leftImgView}>
//                     <Image source={user1} style={styles.userAva} />
//                     {true && (
//                       <Image source={online} style={styles.activeIcNow} />
//                     )}
//                   </View>
//                   <View>
//                     <View
//                       style={[styles.leftTextView, !true && {marginTop: 8}]}>
//                       <Text style={styles.leftText}>
//                         Are you still travelling?
//                       </Text>
//                     </View>
//                     <View style={[styles.leftTextView, true && {marginTop: 8}]}>
//                       <Text style={styles.leftText}>Yes?</Text>
//                     </View>
//                   </View>
//                 </View>
//                 <View style={styles.rightChatView}>
//                   <View style={styles.rightTextView}>
//                     <Text style={styles.rightText}>Yes, i’m at Istanbul..</Text>
//                   </View>
//                 </View>
//               </View>
//             );
//           })}
//         </ScrollView>
//       </SafeAreaView>
//       <View style={styles.sendView}>
//         <View style={styles.msgView}>
//           <TextInput multiline={true} style={styles.sendInput} placeholder="Send Message"/>
//           <TouchableOpacity style={styles.sendIcView}>
//             <Image source={send} style={styles.sendIc}/>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }
 
   
 
  import React, { useState, useEffect } from 'react';
  import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    FlatList,
    Dimensions,
    Alert,
  } from 'react-native'; 
  
  export default function OpenChat({ navigation }) {
    const [chatUser] = useState({
      name: 'Robert Henry',
      profile_image: 'https://randomuser.me/api/portraits/men/0.jpg',
      last_seen: 'online',
    });
  
    const [currentUser] = useState({
      name: 'John Doe',
    });
  
    const [messages, setMessages] = useState([
      { sender: 'John Doe', message: 'Hey there!', time: '6:01 PM' },
      {
        sender: 'Robert Henry',
        message: 'Hello, how are you doing?',
        time: '6:02 PM',
      },
      {
        sender: 'John Doe',
        message: 'I am good, how about you?',
        time: '6:02 PM',
      },
      {
        sender: 'John Doe',
        message: `😊😇`,
        time: '6:02 PM',
      },
      {
        sender: 'Robert Henry',
        message: `Can't wait to meet you.`,
        time: '6:03 PM',
      },
      {
        sender: 'John Doe',
        message: `That's great, when are you coming?`,
        time: '6:03 PM',
      },
      {
        sender: 'Robert Henry',
        message: `This weekend.`,
        time: '6:03 PM',
      },
      {
        sender: 'Robert Henry',
        message: `Around 4 to 6 PM.`,
        time: '6:04 PM',
      },
      {
        sender: 'John Doe',
        message: `Great, don't forget to bring me some mangoes.`,
        time: '6:05 PM',
      },
      {
        sender: 'Robert Henry',
        message: `Sure!`,
        time: '6:05 PM',
      },
    ]);
  
    const [inputMessage, setInputMessage] = useState('');
  
    function getTime(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }
  
    function sendMessage() {
      if (inputMessage === '') {
        return setInputMessage('');
      }
      let t = getTime(new Date());
      setMessages([
        ...messages,
        {
          sender: currentUser.name,
          message: inputMessage,
          time: t,
        },
      ]);
      setInputMessage('');
    }
  
    useEffect(() => {
      navigation.setOptions({
        title: '',
        headerLeft: () => (
          <View style={styles.headerLeft}>
            <TouchableOpacity
              style={{ paddingRight: 10 }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              
            </TouchableOpacity>
            <Image
              style={styles.userProfileImage}
              source={{ uri: chatUser.profile_image }}
            />
            <View
              style={{
                paddingLeft: 10,
                justifyContent: 'center',
              }}
            >
              <Text style={{ color: '#fff', fontWeight: '700', fontSize: 18 }}>
                {chatUser.name}
              </Text>
              <Text style={{ color: '#fff', fontWeight: '300' }}>
                {chatUser.last_seen}
              </Text>
            </View>
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{ paddingRight: 10 }}
            onPress={() => {
              Alert.alert('Audio Call', 'Audio Call Button Pressed');
            }}
          >
         
          </TouchableOpacity>
        ),
      });
    }, []);
  
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <FlatList
            style={{ backgroundColor: '#f2f2ff' }}
            inverted={true}
            data={JSON.parse(JSON.stringify(messages)).reverse()}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback>
                <View style={{ marginTop: 6 }}>
                  <View
                    style={{
                      maxWidth: Dimensions.get('screen').width * 0.8,
                      backgroundColor: '#3a6ee8',
                      alignSelf:
                        item.sender === currentUser.name
                          ? 'flex-end'
                          : 'flex-start',
                      marginHorizontal: 10,
                      padding: 10,
                      borderRadius: 8,
                      borderBottomLeftRadius:
                        item.sender === currentUser.name ? 8 : 0,
                      borderBottomRightRadius:
                        item.sender === currentUser.name ? 0 : 8,
                    }}
                  >
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 16,
                      }}
                    >
                      {item.message}
                    </Text>
                    <Text
                      style={{
                        color: '#dfe4ea',
                        fontSize: 14,
                        alignSelf: 'flex-end',
                      }}
                    >
                      {item.time}
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
  
          <View style={{ paddingVertical: 10 }}>
            <View style={styles.messageInputView}>
              <TextInput
                defaultValue={inputMessage}
                style={styles.messageInput}
                placeholder='Message'
                onChangeText={(text) => setInputMessage(text)}
                onSubmitEditing={() => {
                  sendMessage();
                }}
              />
              <TouchableOpacity
                style={styles.messageSendView}
                onPress={() => {
                  sendMessage();
                }}
              >
               
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  
  const styles = StyleSheet.create({
    headerLeft: {
      paddingVertical: 4,
      paddingHorizontal: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    userProfileImage: { height: '100%', aspectRatio: 1, borderRadius: 100 },
    container: {
      flex: 1,
      backgroundColor: '#f2f2ff',
    },
    messageInputView: {
      display: 'flex',
      flexDirection: 'row',
      marginHorizontal: 14,
      backgroundColor: '#fff',
      borderRadius: 4,
    },
    messageInput: {
      height: 40,
      flex: 1,
      paddingHorizontal: 10,
    },
    messageSendView: {
      paddingHorizontal: 10,
      justifyContent: 'center',
    },
  });