import { StyleSheet, FlatList, Pressable } from 'react-native'


// Constants
const DATABASE_ID = '68b1410b001fb0c45973'
const COLLECTION_ID = 'books'
import { Colors } from '../../../constants/Colors'


// Hooks
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { useUserContext } from '../../../hooks/useUserContext'
import { useBookContext } from '../../../hooks/useBookContext'

// Components
import { ThemedText } from '../../../components/ThemedText'
import { ThemedView } from '../../../components/ThemedView'
import { ThemedTextInput } from '../../../components/ThemedTextInput'
import { ThemedButton } from '../../../components/ThemedButton'
import { Spacer } from '../../../components/Spacer'
import ThemedCard from '../../../components/ThemedCard'



const Books = () => {
    const { books } = useBookContext()
    const router = useRouter()

    return (
        <ThemedView style={styles.container} safe={true}>
            <Spacer height={24} />
            <ThemedText title={true} style={styles.heading}>
                Your Reading List
            </ThemedText>
            <FlatList
                data={books}
                keyExtractor={(item) => item.$id}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <Pressable onPress={() => router.push(`/${item.$id}`)}>
                        <ThemedCard style={styles.card}>
                            <ThemedText style={styles.title}>{item.title}</ThemedText>
                            <ThemedText>Written by {item.author}</ThemedText>
                        </ThemedCard>
                    </Pressable>
                )}
            />

        </ThemedView>
    )
}

export default Books

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
    },
    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
    list: {
        marginTop: 40,
        paddingBottom: 40
    },
    card: {
        width: "90%",
        marginHorizontal: "5%",
        marginVertical: 10,
        padding: 10,
        paddingLeft: 14,
        borderLeftColor: Colors.primary,
        borderLeftWidth: 4
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
})