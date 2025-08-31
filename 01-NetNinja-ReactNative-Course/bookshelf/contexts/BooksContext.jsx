import { createContext, useEffect, useState } from "react";
import { useUserContextHook } from '../hooks/useUserContext'
import { Permission, Role, ID, Query } from "react-native-appwrite";
import { databases } from '../lib/appwrite'

const DATABASE_ID = "68b1410b001fb0c45973"
const COLLECTION_ID = "books"

export const BookContext = createContext()

export const BookContextProvider = ({ children }) => {
    const [books, updateBooks] = useState([])
    const { user } = useUserContextHook()

    const createBook = async (data) => {
        try {
            const newBook = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                { ...data, user: user.$id },
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id))

                ]
            )

        } catch (error) {
            console.log(error.message)
        }
    }

    const fetchBooks = async () => {
        try {
            const response = await databases.listDocuments(
                DATABASE_ID, COLLECTION_ID, [Query.equal('user', user.$id)]
            )
            console.log(response)
        } catch (error) {
            console.log(error.message)

        }
    }
    useEffect(() => {
        if (user) {
            fetchBooks()
        } else {
            updateBooks([])
        }

    }, [user])
    const fetchBookByID = async (id) => {
        try {

        } catch (error) {
            console.log(error.message)
        }
    }



    const deleteBook = async (id) => {
        try {

        } catch (error) {
            console.log(error.message)
        }
    }
    const deleteAllBooks = async (data) => {
        try {

        } catch (error) {
            console.log(error.message)
        }
    }

    return (<BookContext.Provider value={{ books, createBook, deleteBook, deleteAllBooks, fetchBooks, fetchBookByID }}>
        {children}
    </BookContext.Provider>)
}