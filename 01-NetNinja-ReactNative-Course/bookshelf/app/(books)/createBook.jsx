import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from '../../components/ThemedView'
import { ThemedText } from '../../components/ThemedText'
import { ThemedTextInput } from '../../components/ThemedTextInput'

const createBook = () => {
    return (
        <ThemedView safe={true}>
            <ThemedText>Create Book</ThemedText>
            <ThemedView>
                <ThemedTextInput placeholder="Book Title" />
                <ThemedTextInput placeholder="Author" />

            </ThemedView>
        </ThemedView>
    )
}

export default createBook

const styles = StyleSheet.create({})