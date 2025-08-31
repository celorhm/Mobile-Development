import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'


// Components
import { ThemedText } from '../../../components/ThemedText'
import { ThemedView } from '../../../components/ThemedView'
import { ThemedTextInput } from '../../../components/ThemedTextInput'
import { ThemedButton } from '../../../components/ThemedButton'
import { Spacer } from '../../../components/Spacer'

// Hooks
import { useRouter } from 'expo-router'



const BookListScreen = () => {
    const router = useRouter()
    const handleAddBook = () => {
        router.push('createBook')
    }
    return (
        <ThemedView safe={true} >
            <ThemedText title={true}>BookList</ThemedText>
            <ThemedButton text={"Add New Book"} style={{ width: '80%', marginHorizontal: 50 }} onPress={handleAddBook} />
            <FlatList></FlatList>
        </ThemedView>
    )
}

export default BookListScreen

const styles = StyleSheet.create({})