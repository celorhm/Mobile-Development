import { useContext } from "react";
import { BookContext } from "../contexts/BooksContext";


export const useBooks = () => {
    const context = useContext(BookContext)

    if (!context) {
        return new Error('Use hook inside a book context provide')
    }
    return context
}