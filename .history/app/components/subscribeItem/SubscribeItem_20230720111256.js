import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'

export   function SubscribeItem({img,title,subTitle,price,currency,on,off,onSubscribe}) {
  return (
    <View style={sty}>
       <Image  source={img} />
    </View>
  )
}