import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { UserContextProvider } from '../contexts/UserContext'

const RootLayout = () => {
    return (
        <UserContextProvider>
            <Stack screenOptions={{ headerShown: false, animation: 'none' }}>
                <Stack.Screen name='(books)' options={{ headerShown: false, animation: 'none' }} />
                <Stack.Screen name='(dashboard)' options={{ headerShown: false, animation: 'none' }} />



            </Stack>
        </UserContextProvider>
    )
}

export default RootLayout

const styles = StyleSheet.create({})