import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootLayout from '.'

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ title: 'Home' }} />
        </Stack>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        alignItems: 'center',
    }
})


export default RootLayout