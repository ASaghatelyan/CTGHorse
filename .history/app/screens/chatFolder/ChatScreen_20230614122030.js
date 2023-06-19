import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import axios from 'axios';
import pusher from './pusher';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const channel = pusher.subscribe('chat');
    channel.bind('message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      channel.unbind();
      pusher.unsubscribe('chat');
    };
  }, []);

  const sendMessage = async () => {
    if (message.trim() !== '') {
      await axios.post('YOUR_SERVER_ENDPOINT', { message });
      setMessage('');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>
            {item.sender}: {item.text}
          </Text>
        )}
      />
      <View>
        <TextInput
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

export default ChatScreen;
