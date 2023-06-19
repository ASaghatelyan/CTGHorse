import {View, Text, TextInput, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Pusher,
  PusherMember,
  PusherChannel,
  PusherEvent,
} from '@pusher/pusher-websocket-react-native';
import pusherInfo from '../../../pusher.json';
const pusher = Pusher.getInstance();
export default function MyApp() {
  const [text, setText] = useState('');
  useEffect(() => {
    x();

    return () => {};
  }, []);

  let x = async () => {
    try {
      await pusher.init({
        apiKey: pusherInfo.key,
        cluster: pusherInfo.claster,
      });

      await pusher.connect();
      await pusher.subscribe({
        channelName: 'Chat',
        onEvent: event => {
          console.log(`Event received: ${event}`);
        },
      });
    } catch (e) {
      console.log(`ERROR: ${e}`);
    }
  };
console.log(pusher,'pusher');
  let onSend = () => {
    setText('');
  };

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>MyApp</Text>
      <TextInput
        style={{
          width: '100%',
          borderWidth: 1,
          borderRadius: 20,
          paddingVertical: 10,
          paddingHorizontal: 12,
        }}
        value={text}
        onChangeText={t => setText(t)}
      />
      <Button title="Send" onPress={onSend} />
    </View>
  );
}
