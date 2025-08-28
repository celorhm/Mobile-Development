import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


const AuthLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false, animation: 'none', initialRouteName: 'register' }}>
            <Stack.Screen name='register' />
            <Stack.Screen name='login' />
        </Stack>
    )
}

export default AuthLayout

