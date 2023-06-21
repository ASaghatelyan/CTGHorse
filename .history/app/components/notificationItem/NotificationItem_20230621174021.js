import { View, Text } from 'react-native'
import React from 'react'

export   function NotificationItem({}) {
  return (
    <TouchableOpacity
          style={{
            paddingVertical: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#190C04',
          }}
          onPress={() => navigation.navigate('NewContract')}>
          <View style={styles.isReadView} />
        </TouchableOpacity>
  )
}