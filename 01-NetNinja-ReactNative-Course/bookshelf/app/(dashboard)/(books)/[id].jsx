import { StyleSheet } from "react-native"


// Hooks
import { useState, useEffect } from 'react'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { useUserContext } from '../../../hooks/useUserContext'
import { useBookContext } from '../../../hooks/useBookContext'

// Components
import { ThemedText } from '../../../components/ThemedText'
import { ThemedView } from '../../../components/ThemedView'
import { ThemedTextInput } from '../../../components/ThemedTextInput'
import { ThemedButton } from '../../../components/ThemedButton'
import { Spacer } from '../../../components/Spacer'
import ThemedCard from '../../../components/ThemedCard'
import ThemedActivityIndicator from "../../../components/ThemedActivityIndicator"

const BookDetails = () => {
    const [book, setBook] = useState(null)

    const { id } = useLocalSearchParams()
    const { fetchBookbyID } = useBookContext()

    useEffect(() => {
        try {
            async function loadBook() {
                const bookData = await fetchBookbyID(id)
                setBook(bookData)
            }
        } catch (error) {
            console.log(error.message)
        }

        loadBook()
    }, [id])

    if (!book) {
        return (
            <ThemedView safe={true} style={styles.container}>
                <ThemedActivityIndicator />
            </ThemedView>
        )
    }

    return (
        <ThemedView safe={true} style={styles.container}>
            <ThemedCard style={styles.card}>
                <ThemedText style={styles.title} title={true}>{book.title.toUpperCase()}</ThemedText>
                <ThemedText>Written by {book.author}</ThemedText>
                <Spacer height={20} />

                <ThemedText title={true}>Book Description:</ThemedText>
                <Spacer height={10} />

                <ThemedText style={styles.description}>{book.description}</ThemedText>
            </ThemedCard>
        </ThemedView>
    )
}

export default BookDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
    },
    title: {
        fontSize: 22,
        marginVertical: 10,
    },
    card: {
        margin: 20,
        alignItems: 'flex-start',
        borderRadius: 16,
        elevation: 5

    },
    description: {
        fontSize: 15,
        lineHeight: 22,
    }
})