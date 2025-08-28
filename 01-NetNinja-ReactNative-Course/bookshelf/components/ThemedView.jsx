import { View, SafeAreaView, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'

export const ThemedView = ({ style, safe = false, ...props }) => {
    const insets = useSafeAreaInsets()
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    if (!safe) {
        return (
            <>
                <StatusBar value="auto" />
                <View style={[{ backgroundColor: theme.background }, style]} {...props} />
            </>
        )
    }
    return (
        <>
            <StatusBar value="auto" />
            <View style={[styles.safe, { backgroundColor: theme.background, paddingTop: insets.top, paddingBottom: insets.bottom }, style]} {...props} />
        </>
    )
}

const styles = StyleSheet.create({
    safe: {
        flex: 1
    }
})