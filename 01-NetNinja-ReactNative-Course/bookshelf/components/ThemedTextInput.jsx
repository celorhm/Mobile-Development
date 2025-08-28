import { StyleSheet, Text, View, TextInput, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

export const ThemedTextInput = ({ style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <View>
            <TextInput
                style={[{ backgroundColor: theme.uiBackground, color: theme.text }, styles.textInput, style]}
                {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 6, padding: 20, width: 350
    }
})