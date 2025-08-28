import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { UserContextProviderComponent } from '../contexts/userContext'

const RootLayout = () => {
    return (
        <UserContextProviderComponent>
            <Stack>
                <Stack.Screen name='(auth)' options={{ headerShown: false, animation: 'none' }} />
            </Stack>
        </UserContextProviderComponent>
    )
}

export default RootLayout

const styles = StyleSheet.create({})