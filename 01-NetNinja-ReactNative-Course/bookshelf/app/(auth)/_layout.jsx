import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


// Layout Component
const AuthLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false, animation: 'none' }}>
            <Stack.Screen name='login' options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name='register' options={{ headerShown: false, animation: 'none' }} />
        </Stack>
    )
}

export default AuthLayout

