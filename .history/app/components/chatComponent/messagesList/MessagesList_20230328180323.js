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
  import React, {useRef} from 'react';
  import {styles} from './style';
  import online from 'app/assets/img/active.png';
  import user1 from 'app/assets/img/user1.png';
  import back from 'app/assets/img/back.png';
  import send from 'app/assets/img/send.png';
  import rec from 'app/assets/img/rec.png';
  import { ChatHeader } from 'app/components';

export   function MessagesList() {
  return (
    <View>
      <Text>MessagesList</Text>
    </View>
  )
}