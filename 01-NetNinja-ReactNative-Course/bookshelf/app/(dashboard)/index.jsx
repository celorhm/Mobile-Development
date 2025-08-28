import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { ThemedText } from '../../components/ThemedText'
import { ThemedView } from '../../components/ThemedView'


const HomeScreen = () => {
    return (
        <ThemedView safe={true}>
            <ThemedText title={true}>Home Screen</ThemedText>
        </ThemedView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        alignItems: 'center',
    }
})