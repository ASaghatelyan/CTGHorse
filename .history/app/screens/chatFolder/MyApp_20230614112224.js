import { View, Text } from 'react-native'
import React from 'react'

export default function MyApp() {
    import {
        Pusher,
        PusherMember,
        PusherChannel,
        PusherEvent,
      } from '@pusher/pusher-websocket-react-native';
      
      const pusher = Pusher.getInstance();
      
      try {
        await pusher.init({
          apiKey: APP_KEY,
          cluster: APP_CLUSTER,
          // authEndpoint: '<YOUR ENDPOINT URI>',
          onConnectionStateChange,
          onError,
          onEvent,
          onSubscriptionSucceeded,
          onSubscriptionError,
          onDecryptionFailure,
          onMemberAdded,
          onMemberRemoved,
          onSubscriptionCount,
        });
      
        await pusher.subscribe({ channelName });
        await pusher.connect();
      } catch (e) {
        console.log(`ERROR: ${e}`);
      }
  return (
    <View>
      <Text>MyApp</Text>
    </View>
  )
}