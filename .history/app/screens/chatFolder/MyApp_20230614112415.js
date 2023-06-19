import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {
    Pusher,
    PusherMember,
    PusherChannel,
    PusherEvent,
  } from '@pusher/pusher-websocket-react-native';
  import pusherInfo from '../../../pusher.json'
  const pusher = Pusher.getInstance();
export default function MyApp() {
   
    useEffect(() => {
      x()
    
      return () => {
       
      }
    }, [ ])
    
    let x =async()=>{
        try {
            await pusher.init({
              apiKey:pusherInfo ,
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
     }
  return (
    <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
      <Text>MyApp</Text>
    </View>
  )
}