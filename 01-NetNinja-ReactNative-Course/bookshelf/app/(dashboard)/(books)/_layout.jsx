import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
    return (
        <Stack screenOptions={{ headerShown: false, animation: 'none' }}>
            <Stack.Screen name='createBook' options={{ title: 'createBook', headerShown: false }} />
        </Stack>
    )
}

export default _layout