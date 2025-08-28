import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import { ThemedView } from './ThemedView'


export const ThemedText = ({ style, title = false, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    const textColor = title ? theme.title : theme.text

    return (
        <ThemedView>
            <Text title style={[{ color: textColor }, title ? styles.title : styles.text, style]} {...props} />
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 35,
        textAlign: 'center'
    },
    title: {
        fontSize: 50,
        textAlign: 'center'

    }
})