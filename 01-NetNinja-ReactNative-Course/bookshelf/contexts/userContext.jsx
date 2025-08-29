import { createContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const userContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [authChecked, setAuthChecked] = useState(false)

    const login = async (email, password) => {
        try {
            await account.createEmailPasswordSession(email, password)
            const response = await account.get()
            setUser(response)
        }
        catch (error) {
            throw Error(error.message)
        }
    }

    const logout = async () => {
        await account.deleteSession("current")
        setUser(null)
    }

    const register = async (email, password, name) => {
        try {
            await account.create(ID.unique(), email, password, name)
            await login(email, password)
        } catch (error) {
            throw Error(error.message)
        }
    }

    const initialUserAuthentication = async () => {
        try {
            const response = await account.get()
            setUser(response)
        } catch (error) {
            throw Error(error.message)
        } finally {
            setAuthChecked(true)
        }
    }

    useEffect(() => {
        initialUserAuthentication();
    }, [])
    return <userContext.Provider value={{ user, login, logout, register, authChecked }}>{children}</userContext.Provider>
}
