import { createContext, useEffect, useState } from "react";
import { account, avatars, tablesDB } from '../lib/appwrite'
import { ID } from "react-native-appwrite";
import { toast } from "../lib/toasts";


// Context Definition
export const UserContext = createContext()


// Context Provider Definition
export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [authChecked, setAuthChecked] = useState(false)

    const initialAuthentication = async () => {
        try {
            const response = await account.get()
            setUser(response)
            setAuthChecked(true)

        } catch (error) {
            console.log(error.message)
        }
    }
    const login = async (email, password) => {
        try {
            const response = await account.createEmailPasswordSession({ email: email, password: password })
            setUser(response)
            toast('Welcome back. You are logged in')
        } catch (error) {
            console.log(error.message)
        }

    }

    const register = async (email, password) => {
        await account.create({ userId: ID.unique(), email: email, password: password })
        await login(email, password)
        toast('Account Created')

    }

    const logout = async () => {
        await account.deleteSession({ sessionId: "current" })
    }

    useEffect(() => {
        initialAuthentication();
    }, [])
    return (<UserContext.Provider
        value={{ login, logout, register, authChecked, user }}
    >{children}</UserContext.Provider>)
}
