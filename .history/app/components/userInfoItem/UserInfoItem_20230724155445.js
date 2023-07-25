import { View, Text } from 'react-native'
import React from 'react'

export   function UserInfoItem({}) {
  return (
    <DropShadow
    key={index}
    style={{
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 2,
    }}>
    <TouchableOpacity onPress={getAllIfo} style={styles.listContainer}>
      <View>
       
        <Text style={styles.nameText} numberOfLines={1}>
          {item?.name}
        </Text>
        <Text style={styles.regN} numberOfLines={1}>
        CTG No: {item?.registration_number}
        </Text>
        <Text style={styles.priceText} numberOfLines={1}>
          ${item?.price}
        </Text>
      </View>
    </TouchableOpacity>
  </DropShadow>
  )
}