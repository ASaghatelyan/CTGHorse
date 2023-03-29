// import {
//   View,
//   Text,
//   SafeAreaView,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   Dimensions,
//   TextInput,
//   ScrollView,
//   KeyboardAvoidingView,
// } from 'react-native';
// import React, {useRef} from 'react';
// import {styles} from './style';
// import online from 'app/assets/img/active.png';
// import user1 from 'app/assets/img/user1.png';
// import back from 'app/assets/img/back.png';
// import send from 'app/assets/img/send.png';
// import rec from 'app/assets/img/rec.png';
// import {ChatHeader, MessagesList} from 'app/components';

// export function OpenChat({navigation}) {
//   const scrollViewRef = useRef(null);
//   let scrollViewSizeChanged = height => {
//     scrollViewRef.current?.scrollTo({y: height, animated: true});
//   };
//   let data = [1, 2, 3, 4, 5, 6];
//   return (
//     <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
//       <SafeAreaView />
//       <View style={{flex: 1 }}>
//         {/* <View style={styles.topView}>
//           <TouchableOpacity
//             style={styles.backBtnView}
//             onPress={() => navigation.goBack()}>
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
//         </View> */}
//         <ChatHeader />
//         {/* <ScrollView
         
//           ref={scrollViewRef}
//           onContentSizeChange={(width, height) => {
//             scrollViewSizeChanged(height);
//           }}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{
//             flexGrow: 1,
//             paddingBottom: 120,
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
//         </ScrollView> */}
//         <MessagesList />
//         <View style={styles.sendView}>
//           <View style={styles.msgView}>
//             <TextInput
//               multiline={true}
//               style={styles.sendInput}
//               placeholder="Send Message"
//               numberOfLines={4}
//             />
//             <View>
//               <TouchableOpacity style={styles.sendIcView}>
//                 <Image source={send} style={styles.sendIc} />
//               </TouchableOpacity>
//             </View>
//           </View>
//           <TouchableOpacity style={styles.recIcView}>
//             <Image source={rec} style={styles.recIc} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </KeyboardAvoidingView>
//   );
// }

import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useNavigation, useRoute } from '@react-navigation/native';

 export const OpenChat = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView/>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.icon}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.username}>{route.params.username}</Text>
        <Text style={styles.icon}>...</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Type a message" />
        <TouchableOpacity style={styles.iconContainer}>
          <Text style={styles.icon}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Text style={styles.icon}>M</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },
  icon: {
    fontSize: 20,
    marginLeft: 10,
    color: '#1e90ff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  iconContainer: {
    marginLeft: 10,
  },
});

 