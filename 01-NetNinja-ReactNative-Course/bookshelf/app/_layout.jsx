import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'

// Contexts
import { UserContextProvider } from '../contexts/UserContext'
import { BookContextProvider } from '../contexts/BookContext'

// RootLayout Definition
const RootLayout = () => {
    return (
        <UserContextProvider>
            <BookContextProvider>
                <Stack screenOptions={{ headerShown: false, animation: 'none' }}>
                    <Stack.Screen name='(dashboard)' options={{ headerShown: false, animation: 'none' }} />
                </Stack>
            </BookContextProvider>
        </UserContextProvider>
    )
}

export default RootLayout

const styles = StyleSheet.create({})