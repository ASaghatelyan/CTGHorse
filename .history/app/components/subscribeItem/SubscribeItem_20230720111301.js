import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'

export   function SubscribeItem({img,title,subTitle,price,currency,on,off,onSubscribe}) {
  return (
    <View style={styes}>
       <Image  source={img} />
    </View>
  )
}