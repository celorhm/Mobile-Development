import { useUserContextHook } from "../../hooks/useUserContext";
import { useEffect, useState, } from "react";
import { useRouter } from "expo-router";
import { Text, View, useColorScheme } from 'react-native'
import { Colors } from "../../constants/Colors";
import ThemedActivityIndicator from "../ThemedActivityIndicator";
import LoginScreen from "../../app/(auth)/login";


const UserOnly = ({ children }) => {
    const { user, authChecked } = useUserContextHook()
    const router = useRouter()
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    useEffect(() => {
        if (authChecked && user === null) {

            router.replace('/login')
        }

    }, [user, authChecked])

    if (!authChecked || !user) {
        return <ThemedActivityIndicator />
    }
    return children;
}

export default UserOnly;

const styles = {
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    loadingText: {
        fontSize: 18,
        color: '#555',
    }
}