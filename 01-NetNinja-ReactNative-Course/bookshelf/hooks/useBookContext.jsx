import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";


export const useBookContext = () => {
    const context = useContext(BookContext)

    if (!context) {
        return new Error('Use hook inside a book context provide')
    }
    return context
}