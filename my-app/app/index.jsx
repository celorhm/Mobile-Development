import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const HomeScreen = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ title: 'Home' }} />
        </Stack>
    )
}

export default HomeScreen