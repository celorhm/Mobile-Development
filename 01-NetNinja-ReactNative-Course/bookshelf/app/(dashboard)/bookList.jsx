import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '../../components/ThemedText'
import { ThemedView } from '../../components/ThemedView'
const BookListScreen = () => {
    return (
        <ThemedView safe={true}>
            <ThemedText title={true}>BookList</ThemedText>
        </ThemedView>
    )
}

export default BookListScreen

const styles = StyleSheet.create({})