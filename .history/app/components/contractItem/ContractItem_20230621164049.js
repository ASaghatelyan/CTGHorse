import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'

export   function ContractItem({}) {
  return (
    <View style={styles.itemView}>
              <View style={styles.leftView}>
                <View
                  style={[
                    styles.cycleView,
                    item.status === 'in process' && {
                      backgroundColor: '#E9A13A',
                    },
                    item.status === 'refused' && {backgroundColor: '#FF2323'},
                  ]}
                />
                <View>
                  <Text
                    style={[
                      styles.statusText,
                      item.status === 'in process' && {color: '#E9A13A'},
                      item.status === 'refused' && {color: '#FF2323'},
                    ]}>
                    {item.status}!
                  </Text>
                  <Text style={styles.nameText}>{item.name}</Text>
                  <Text style={styles.dateText}>{item.date}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.showIcView}>
                <Image source={show} style={styles.showIc} />
              </TouchableOpacity>
            </View>
  )
}