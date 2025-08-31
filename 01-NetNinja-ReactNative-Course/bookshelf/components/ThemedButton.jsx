import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export const ThemedButton = ({ style, text, ...props }) => {
    return (
        <Pressable style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]} {...props}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    },
    btn: {
        backgroundColor: 'purple',
        padding: 8,
        borderRadius: 8,
        width: 100
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
})