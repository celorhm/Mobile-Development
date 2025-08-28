import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '../../components/ThemedText'
import { ThemedView } from '../../components/ThemedView'

const ProfileScreen = () => {
    return (
        <ThemedView safe={true}>
            <ThemedText title={true}>Profile Page</ThemedText>
        </ThemedView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})