import { createContext, useEffect, useState } from "react";
import { Permission, Role, ID, Query } from "react-native-appwrite";
import { tablesDB, client, databases } from '../lib/appwrite'

// Constants
const BOOKS_DATABASE_ID = "68b1410b001fb0c45973"
const BOOKS_COLLECTION_ID = "books"

// Hooks
import { useUserContext } from "../hooks/useUserContext";
import { toast } from "../lib/toasts";

// Context Definition
export const BookContext = createContext()


// Context Provider Definition
export const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState([])
    const { user } = useUserContext()

    const createBook = async (book) => {
        const newBook = await tablesDB.createRow(
            {
                databaseId: BOOKS_DATABASE_ID,
                tableId: BOOKS_COLLECTION_ID,
                rowId: ID.unique(),
                user: user.$id,
                data: {
                    title: book.title,
                    author: book.author,
                    description: book.description,
                    user: user.$id
                },
                permissions: [Permission.read(Role.user(user.$id)), Permission.update(Role.user(user.$id)), Permission.delete(Role.user(user.$id))]
            }
        )
        setBooks((prev) => [...prev, newBook])
        toast('Book added')
    }
    const fetchBooks = async () => {
        try {
            const response = await tablesDB.listRows({
                databaseId: BOOKS_DATABASE_ID,
                tableId: BOOKS_COLLECTION_ID,
                queries: [Query.equal('user', user.$id)]
            })
            setBooks(response.rows)
        } catch (error) {
            throw Error(error.message)
        }
    }
    const fetchBookbyID = async (id) => {
        try {
            const response = await tablesDB.getRow({
                databaseId: BOOKS_DATABASE_ID,
                tableId: BOOKS_COLLECTION_ID,
                rowId: id
            }
            )
            return response
        } catch (error) {
            console.log(error.message)
        }
    }
    const deleteBook = async (bookId) => { }


    useEffect(() => {
        let unsubscribe;
        const channel = `database.${BOOKS_DATABASE_ID}.collections.${BOOKS_COLLECTION_ID}.documents`

        if (user) {
            fetchBooks()

            unsubscribe = client.subscribe(channel, (response) => {
                const { payload, events } = response;
                if (events[0].includes('create')) {
                    setBooks((prevBooks) => [...prevBooks, payload])
                }
            })
        } else {
            setBooks([])
        }

        return () => {
            if (unsubscribe) unsubscribe()
        }
    }, [user])
    return (
        <BookContext.Provider value={{ books, createBook, fetchBookbyID, fetchBooks, deleteBook }}>
            {children}
        </BookContext.Provider>
    )
}