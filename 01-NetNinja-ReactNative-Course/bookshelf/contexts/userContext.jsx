import { createContext, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const userContext = createContext()

export const UserContextProviderComponent = ({ children }) => {
    const [user, setUser] = useState()

    const login = async (email, password) => {
        try {
            await account.createEmailPasswordSession(email, password)
            const response = await account.get()
            setUser(response)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const logout = async () => {

    }

    const register = async (email, password) => {
        try {
            await account.create(ID.unique(), email, password, name)
            await login(email, password)
        } catch (error) {
            throw Error(error.message)
        }
    }

    return <userContext.Provider value={{ user, login, logout, register }}>{children}</userContext.Provider>
}
