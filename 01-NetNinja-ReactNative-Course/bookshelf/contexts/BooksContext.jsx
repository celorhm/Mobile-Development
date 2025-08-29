import { createContext, useState } from "react";
import { useUserContextHook } from '../hooks/useUserContext'
import { db, } from "../lib/appwrite";
import { Permission, Role, ID } from "react-native-appwrite";
export const BookContext = createContext()

const DATABASE_ID = "68b1410b001fb0c45973"
const COLLECTION_ID = "books"

export const BookContextProvider = ({ children }) => {
    const [books, updateBooks] = useState([])
    const { user } = useUserContextHook()

    const createBook = async (data) => {
        try {
            const newBook = await db.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                { ...data, user: user.$id },
                [
                    Permission.read(Role(user.$id)),
                    Permission.update(Role(user.$id)),
                    Permission.delete(Role(user.$id))

                ]
            )

        } catch (error) {
            console.log(error.message)
        }
    }

    const fetchBooks = async () => {
        try {

        } catch (error) {
            console.log(error.message)

        }
    }

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

    return <BookContext.Provider value={{ books, createBook, deleteBook, deleteAllBooks, fetchBooks, fetchBookByID }}>
        {children}
    </BookContext.Provider>
}