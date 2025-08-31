import { StyleSheet, Text, View } from 'react-native'
import { ID } from 'react-native-appwrite'

// Constants
const DATABASE_ID = '68b1410b001fb0c45973'
const COLLECTION_ID = 'books'

// hooks
import { useState } from 'react'
import { useUserContextHook } from '../../../hooks/useUserContext'
import { useBooks } from '../../../hooks/useBooks'
import { user } from '../../../hooks/useUserContext'
import { useRouter } from 'expo-router'


// Components
import { ThemedText } from '../../../components/ThemedText'
import { ThemedView } from '../../../components/ThemedView'
import { ThemedTextInput } from '../../../components/ThemedTextInput'
import { ThemedButton } from '../../../components/ThemedButton'
import { Spacer } from '../../../components/Spacer'


const createBook = () => {
    const [loading, setLoading] = useState(false)
    const [bookTitle, setBookTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [description, setDescription] = useState("")
    const { createBook } = useBooks()
    const router = useRouter()

    const handleBookSubmission = async () => {
        if (!bookTitle.trim() || !author.trim() || !description.trim()) return
        setLoading(true)
        try {
            await createBook({ title: bookTitle, author, description })
        } catch (error) {
            return Error(error.message)
        } finally {
            setBookTitle("")
            setAuthor("")
            setDescription("")
            router.replace('bookList')
            setLoading(false)
        }
    }

    return (
        <ThemedView safe={true} style={styles.formContainer}>
            <ThemedText title={true}>Add New Book</ThemedText>
            <Spacer height={50} />
            <ThemedTextInput placeholder={"Enter Book Title"} value={bookTitle} onChangeText={setBookTitle} />
            <Spacer height={25} />
            <ThemedTextInput placeholder={"Enter Book Author"} value={author} onChangeText={setAuthor} />
            <Spacer height={25} />
            <ThemedTextInput placeholder={"Enter Book Description"} style={styles.description} multiline={true} value={description} onChangeText={setDescription} />
            <Spacer height={25} />
            <ThemedButton text={!loading ? 'Create Book' : 'Loading ...'} style={styles.formButton} onPress={handleBookSubmission} />
        </ThemedView>
    )
}

export default createBook

const styles = StyleSheet.create({
    formContainer: {
        alignItems: 'center'
    },
    formButton: {
        width: '50%',
    },
    description: {
        height: 200,
        textAlignVertical: 'top'
    }
})