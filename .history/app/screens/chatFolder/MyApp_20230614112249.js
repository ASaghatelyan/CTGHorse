import { View, Text } from 'react-native'
import React from 'react'
import {
    Pusher,
    PusherMember,
    PusherChannel,
    PusherEvent,
  } from '@pusher/pusher-websocket-react-native';
  
export default function MyApp() {
   
      const pusher = Pusher.getInstance();
      
     let x =async()=>{
        
     }
  return (
    <View>
      <Text>MyApp</Text>
    </View>
  )
}