
import React from 'react'
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { styles } from './style'


export function GButton({customStyle,color}) {
    return (
        <View style={[styles.btnView,props.customStyle]}>
            <TouchableOpacity style={[styles.btn,props.color]} onPress={props.handelMove}  >
                <Text style={styles.btnName}>
                    {props.btnName}
                </Text>
            </TouchableOpacity>
        </View>
    )
}