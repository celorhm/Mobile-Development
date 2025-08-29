import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, useColorScheme } from 'react-native'
import { ThemedView } from '../components/ThemedView'
import { Colors } from '../constants/Colors'


const ThemedActivityIndicator = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <ThemedView style={{
            flex: 1,
            justifyContent: 'center',
            alighnItems: 'center'
        }}>
            <ActivityIndicator color={theme.text} size="large" />
        </ThemedView>
    )
}

export default ThemedActivityIndicator

const styles = StyleSheet.create({})