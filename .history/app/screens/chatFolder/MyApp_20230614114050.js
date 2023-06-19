import {View, Text, TextInput, Button} from 'react-native';
import React, {useEffect} from 'react';
import {
  Pusher,
  PusherMember,
  PusherChannel,
  PusherEvent,
} from '@pusher/pusher-websocket-react-native';
import pusherInfo from '../../../pusher.json';
const pusher = Pusher.getInstance();
export default function MyApp() {
  useEffect(() => {
    x();

    return () => {};
  }, []);

  let x = async () => {
    try {
      await pusher.init({
        apiKey: pusherInfo.key,
        cluster: pusherInfo.claster,
        // authEndpoint: '<YOUR ENDPOINT URI>',
        //   onConnectionStateChange,
        //   onError,
        //   onEvent,
        //   onSubscriptionSucceeded,
        //   onSubscriptionError,
        //   onDecryptionFailure,
        //   onMemberAdded,
        //   onMemberRemoved,
        //   onSubscriptionCount,
      });

      const myChannel = await pusher.subscribe({channelName: 'my-channel'});
      console.log(myChannel);
      await pusher.connect();
    } catch (e) {
      console.log(`ERROR: ${e}`);
    }
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
          paddingHorizontal:12
        }}
      />
      <Button title='Send' />
    </View>
  );
}
