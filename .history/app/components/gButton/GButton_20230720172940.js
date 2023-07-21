
import React from 'react'
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { styles } from './style'


export function GButton({customStyle,color,handelMove,btnName}) {
    return (
        <View style={[styles.btnView,customStyle]}>
            <TouchableOpacity style={[styles.btn,color]} onPress={handelMove}  >
                <Text style={styles.btnName}>
                    {btnName}
                </Text>
            </TouchableOpacity>
        </View>
    )
}