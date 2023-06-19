import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, FlatList} from 'react-native';
import axios from 'axios';
import PusherCall from './pusherCall';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const channel = PusherCall.subscribe('Chat');
    channel.bind('message', data => {
      setMessages(prevMessages => [...prevMessages, data]);
    });

    return () => {
      channel.unbind();
      PusherCall.unsubscribe('Chat');
    };
  }, []);

  const sendMessage = async () => {
    if (message.trim() !== '') {
      await axios.post('http://192.168.77.230:8000', {message});
      setMessage('');
    }
  };

  return (
    <View style={{flex: 1,backgroundColor:'purpur'}}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Text>
            {item.sender}: {item.text}
          </Text>
        )}
      />
      <View>
        <TextInput
          value={message}
          onChangeText={text => setMessage(text)}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

export default ChatScreen;
